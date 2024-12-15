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
        <div className=" h-[400px]">
            {/* All Notes section */}
            <div className="flex flex-wrap gap-2 justify-center mt-10">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
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
    );
}

export default Notes;
