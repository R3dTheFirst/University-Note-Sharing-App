import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";

export default function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("notes") // Your table name
                .select("*")
                .eq("noteid", id)
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

    return (
        <div>
            <p className="text-white bg-black">{note.moduleName}</p>
            <p className="text-white bg-black">{note.kind}</p>
            <p className="text-white bg-black">{note.thanks}</p>
            <p className="text-white bg-black">{note.year}</p>
            <Link to={note.downloadurl}>Download Note</Link>
        </div>
    );
}
