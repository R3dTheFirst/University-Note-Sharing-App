import { useState, useEffect } from "react";
import "./App.css";
import { supabase } from "./supabase-config";
import { Link } from "react-router-dom";
import NoteCard from "./components/NoteCard";

function App() {
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
            {/* Hero */}
            <div className="text-center w-full h-full flex flex-col justify-center font-bold">
                <p className="text-6xl p-2">For Students, by Students</p>
                <p className="p-2 text-secondary">
                    Share knowledge with the rest of the people around you.
                </p>
            </div>

            {/* Seperator */}
            <div className="mx-auto mt-3 w-[90%] h-[1px] bg-primary rounded-full"></div>

            {/* All Notes section */}
            <div className="flex flex-wrap gap-2 justify-center mt-10">
                {notes.map((note) => (
                    <div
                        key={note.noteid}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center"
                    >
                        <NoteCard
                            moduleName={note.moduleName}
                            year={note.year}
                            author={note.author}
                            thanks={note.thanks}
                            id={note.noteid}
                            to={"/notes/" + note.noteid}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
