import { useState, useEffect } from "react";
import { supabase } from "../supabase-config";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";

export default function Account() {
    const [user, setUser] = useState(); // State for logged-in user
    const [id, setId] = useState();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Check if user is logged in when the component mounts
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user); // Set the logged-in user
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchUserNotes = async () => {
            if (!user?.email) return; // Ensure user.email is available before proceeding
            try {
                const { data } = await supabase
                    .from("notes")
                    .select("*")
                    .eq("author", user.email);
                setNotes(data); // Log fetched data
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };

        fetchUserNotes();
    }, [user]);

    if (!user) {
        return (
            <div>
                <p>
                    There is no account logged in, if you have an account{" "}
                    <Link to="/login">Log in</Link> otherwise{" "}
                    <Link to="/register">register</Link>
                </p>
            </div>
        );
    }

    async function RemoveNote(note, fileName) {
        const { error } = await supabase.from("notes").delete().eq("id", note);
        if (!error) {
            const { error } = await supabase.storage
                .from("pdfs")
                .remove([`${fileName}`]);
            console.log(fileName);
            if (error) {
                console.log("error with storage", error.message);
            } else {
                console.log("success");
            }
        }
    }

    return (
        <div className="mt-[15%] md:mt-14">
            <div className="flex flex-col justify-center w-[90%] md:w-[50%] bg-primary p-2 mx-auto">
                <div>Logged in as {user.email}</div>
                <button
                    className="px-3 py-2 bg-red-700 rounded-sm"
                    onClick={async () => {
                        const { error } = await supabase.auth.signOut();
                        console.log("signed out");
                    }}
                >
                    Log Out
                </button>
            </div>
            <div className="w-[60%] bg-primary h-1 mx-auto mt-10 rounded-full"></div>
            <div className="text-center p-2 text-6xl font-bold text-text">
                Your Notes
            </div>
            <div className="flex flex-wrap gap-4 justify-center w-[80%] md:w-[45%] mx-auto">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="mx-auto flex flex-col justify-left  bg-primary p-2 rounded-md"
                    >
                        <NoteCard
                            moduleName={note.module}
                            year={note.year}
                            author={note.author}
                            thanks={note.thanks}
                            id={note.id}
                        />
                        <button
                            className="p-2 bg-red-600 rounded-md text-center hover:bg-red-700 duration-200"
                            onClick={() => {
                                RemoveNote(note.id, note.fileName);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
