import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

export default function Physics() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("notes") // Your table name
                .select("*")
                .eq("category", "Physics"); // Select all columns
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setNotes(data);
            }
        };

        fetchNotes();
    }, []);

    if (notes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mt-20">
                <p className="text-xl text-center">
                    No notes available in this category at the moment. Please
                    check back later.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {/* Physics Notes section */}
                <div className="flex flex-wrap justify-center gap-4 px-4 mt-10">
                    {notes.map((note) => (
                        <Link
                            key={note.id}
                            to={`/notes/${note.id}`}
                            className="flex justify-center w-full md:w-1/3"
                        >
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
        </div>
    );
}
