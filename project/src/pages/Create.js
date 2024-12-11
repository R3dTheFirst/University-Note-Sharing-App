import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";

export default function Create() {
    const [id, setID] = useState(null);
    const [moduleName, setModuleName] = useState(null);
    const [year, setYear] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [author, setAuthor] = useState(null);
    const [kind, setKind] = useState(null);
    const [thanks, setThanks] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("notes")
            .insert([
                {
                    noteid: id,
                    moduleName: moduleName,
                    year: year,
                    downloadurl: downloadUrl,
                    author: author,
                    kind: kind,
                    thanks: thanks,
                },
            ])
            .select();
    };

    useEffect(() => {
        setID(
            `${moduleName.replace(/\s+/g, "")}${year.replace(
                /\s+/g,
                ""
            )}${kind.replace(/\s+/g, "")}${author.replace(/\s+/g, "")}`
        );
        setDownloadUrl("https://twitch.com/r3dthefirst");
        setAuthor("Cristiano Ronaldo");
        setThanks(0);
    }, []);

    return (
        <div>
            <div>Create a new note</div>
            <form className="text-black *:p-2">
                <div>
                    <label className="text-white p-1">Module</label>
                    <input
                        className="text-black p-1"
                        onChange={(e) => {
                            setModuleName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label className="text-white p-1">year</label>
                    <input
                        className="text-black p-1"
                        onChange={(e) => {
                            setYear(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label className="text-white p-1">Kind</label>
                    <input
                        className="text-black p-1"
                        onChange={(e) => {
                            setKind(e.target.value);
                        }}
                    />
                </div>
                <button className="bg-white text-black" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
