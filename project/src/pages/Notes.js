import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";
import NoteCard from "../components/NoteCard";

function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchNotes = async () => {
            const { data, error } = await supabase
                .from("notes") // Your table name
                .select("*"); // Select all columns

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setNotes(data);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                {/* All Notes section */}
                <div className="flex flex-wrap justify-center gap-2 mt-10">
                    {notes.map((note) => (
                        <div
                            key={note.id}
                            className="flex justify-center w-full md:w-1/3"
                        >
                            <NoteCard
                                moduleName={note.module}
                                year={note.year}
                                author={note.author}
                                thanks={note.thanks}
                                id={note.id}
                                to={"/notes/" + note.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Notes;
