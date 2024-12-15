import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

export default function Other() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("notes") // Your table name
                .select("*")
                .eq("category", "Other"); // Select all columns
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setNotes(data);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className="flex flex-wrap justify-center w-[60%] mx-auto">
            <div className="flex justify-center">
                {notes.map((note) => (
                    <Link to={`/notes/${note.id}`}>
                        <NoteCard
                            moduleName={note.module}
                            year={note.year}
                            author={note.author}
                            thanks={note.thanks}
                            id={note.id}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
