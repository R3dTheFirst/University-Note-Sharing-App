import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";

export default function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [thanksNumber, setThanksNumber] = useState();

    useEffect(() => {
        // Fetch data when component mounts
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("notes") // Your table name
                .select("*")
                .eq("id", id)
                .single(); // Select all columns
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setNote(data);
            }
        };

        fetchNotes();
    }, []);

    if (!note) {
        return <div>Loading...</div>;
    }

    async function handleThanks() {
        const user = await supabase.auth.getUser();
        const userId = user.data.user.id;

        let updateQuery;
        if (note.thanks.includes(userId)) {
            // Remove userId from the "thanks" array
            updateQuery = supabase
                .from("notes")
                .update({
                    thanks: note.thanks.filter((id) => id !== userId), // Filter out the userId
                })
                .eq("id", note.id);
        } else {
            // Add userId to the "thanks" array
            updateQuery = supabase
                .from("notes")
                .update({
                    thanks: [...note.thanks, userId], // Append userId to the array
                })
                .eq("id", note.id);
        }

        const { data, error } = await updateQuery.select();
        if (error) {
            console.error("Error updating thanks:", error);
        } else {
            console.log("Updated thanks successfully:", data);
        }
    }

    return (
        <div className="flex flex-col items-center mt-10 space-y-8">
            <div className="w-full max-w-4xl shadow-lg rounded-lg p-6">
                {/* Info Section */}
                <div className="relative pb-2">
                    {/* Kind Section */}
                    <div className="absolute -top-4">
                        <p className="text-secondary text-sm uppercase tracking-wide font-medium">
                            {note.kind}
                        </p>
                    </div>

                    {/* Module Section */}
                    <div className="mb-6">
                        <h1 className="text-text text-5xl font-bold tracking-tight">
                            {note.module}
                        </h1>
                    </div>

                    {/* Author Section */}
                    <div className="absolute top-14">
                        <h1 className="text-text text-sm tracking-wide font-medium">
                            {note.category}{" "}
                            <span className="text-primary">●</span>{" "}
                            {note.author}
                        </h1>
                    </div>
                </div>

                {/* PDF Viewer Section */}
                <div className="mt-6">
                    <iframe
                        className="w-full h-[600px] border border-primary rounded-lg"
                        src={note.downloadurl}
                    ></iframe>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-2 gap-6 text-sm text-gray-400 mt-5">
                    <div>
                        <span className="block font-semibold text-text">
                            Year
                        </span>
                        {note.year}
                    </div>
                    <div>
                        <button
                            onClick={handleThanks}
                            className="block font-semibold text-text"
                        >
                            Thanks
                        </button>
                        {note.thanks.length}
                    </div>
                </div>
            </div>
        </div>
    );
}
