import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { RiRefreshLine } from "react-icons/ri";

export default function Create() {
    const [moduleName, setModuleName] = useState("");
    const [id, setId] = useState("");
    const [year, setYear] = useState("");
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [kind, setKind] = useState("");
    const [thanks, setThanks] = useState([""]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [user, setUser] = useState(null);
    const [category, setCategory] = useState();
    const navigate = useNavigate();
    const [createErrorMessage, setCreateErrorMessage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadingMessage, setUploadingMessage] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user);
        };

        fetchUser();
    }, []);

    useEffect(() => {
        if (file) {
            setFileName(`${Date.now()}-${file.name}`);
        }
    }, [file]);

    const handleSubmit = async (e) => {
        setUploading(true);
        e.preventDefault();

        if (!file) {
            console.error("No file selected");
            return;
        }

        try {
            await uploadFile(fileName);
            setProgress(Math.round((100 * e.loaded) / e.total));
            setUploadingMessage("The file is being uploaded to the db");
            const url = await getUrl(fileName);
            await uploadData(url);
        } catch (error) {
            setCreateErrorMessage(
                "There was an error uploading the file, the db might be full, try again later."
            );
        }
    };

    async function getUrl(fileName) {
        try {
            const { data, error } = await supabase.storage
                .from("pdfs")
                .getPublicUrl(fileName);

            return data.publicUrl;
        } catch (error) {
            setCreateErrorMessage(
                "Something went wrong on our end. Please try again later."
            );
        }
    }

    async function uploadFile(fileName) {
        try {
            const { data, error } = await supabase.storage
                .from("pdfs")
                .upload(fileName, file);
        } catch (error) {
            setCreateErrorMessage(
                "The file may already exist in the database or it exceeds the file size limit. Please try uploading a different file."
            );
        }
    }

    async function uploadData(downloadUrl) {
        try {
            if (!user) {
                console.error("No logged-in user");
                return;
            }

            const { data, error } = await supabase.from("notes").insert([
                {
                    id: uuidv4(),
                    module: moduleName,
                    year: year,
                    downloadurl: downloadUrl,
                    author: user.email,
                    kind: kind,
                    thanks: thanks,
                    category: category,
                    fileName: fileName,
                },
            ]);
            setUploading(false);
            navigate(`/notes`);
        } catch (error) {
            setCreateErrorMessage(
                "Please ensure all required fields are filled out."
            );
        }
    }

    if (!user) {
        return (
            <div className="flex justify-center mt-10">
                <div className="flex flex-col w-full max-w-lg p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl text-center text-white font-semibold mb-6">
                        You need to be logged in to create a note
                    </h1>
                    <p className="text-white text-center mb-4">
                        Please log in to access this feature.
                    </p>
                </div>
            </div>
        );
    }

    if (uploading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="flex flex-col items-center justify-center p-6 max-w-lg w-full bg-background shadow-xl rounded-lg">
                    <div className="text-white text-center text-xl font-semibold mb-4">
                        Your note is being shared with the masses
                    </div>
                    <div className="flex justify-center items-center mb-4">
                        <RiRefreshLine className="animate-spin text-4xl text-primary" />
                    </div>
                    <div>
                        <p className="text-white text-center font-medium">
                            Please wait...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="flex flex-col w-full max-w-lg p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl text-center text-white font-semibold mb-6">
                    Create a New Note
                </h1>
                <div>
                    {createErrorMessage ? (
                        <p className="text-red-500 font-bold mb-4">
                            {createErrorMessage}
                        </p>
                    ) : (
                        <p></p>
                    )}
                </div>
                <form className="space-y-4">
                    <div>
                        <label
                            className="text-white block mb-2"
                            htmlFor="moduleName"
                        >
                            Module Name
                        </label>
                        <input
                            className="w-full p-3 bg-background text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            id="moduleName"
                            type="text"
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            placeholder="Enter module name"
                        />
                    </div>
                    <div>
                        <label className="text-white block mb-2" htmlFor="year">
                            Year
                        </label>
                        <input
                            className="w-full p-3 bg-background text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            id="year"
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter year"
                        />
                    </div>
                    <div>
                        <label
                            className="text-white block mb-2"
                            htmlFor="noteType"
                        >
                            Note Type
                        </label>
                        <select
                            id="noteType"
                            className="w-full p-3 bg-background text-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={kind}
                            onChange={(e) => setKind(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a type
                            </option>
                            <option value="Assignment Note">
                                Assignment Tips
                            </option>
                            <option value="Finals Notes">Finals Notes</option>
                            <option value="Mock Tests">Mock Tests</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="text-white block mb-2"
                            htmlFor="noteType"
                        >
                            Note Category
                        </label>
                        <select
                            id="noteType"
                            className="w-full p-3 bg-background text-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a type
                            </option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Computer Science">
                                Computer Science
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-text block mb-2" htmlFor="file">
                            Upload PDF
                        </label>
                        <input
                            className="w-full p-3 bg-background text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            id="file"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
