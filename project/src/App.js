import { useState, useEffect } from "react";
import "./App.css";
import { supabase } from "./supabase-config";
import { Link } from "react-router-dom";
import NoteCard from "./components/NoteCard";

function App() {
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
                <Link
                    to="/physics"
                    href="#"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Physics Notes
                    </h5>
                </Link>
                <Link
                    to="/compsci"
                    href="#"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Computer Science
                    </h5>
                </Link>
                <Link
                    to="/maths"
                    href="#"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mathematics
                    </h5>
                </Link>
                <Link
                    to="other"
                    href="#"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Other
                    </h5>
                </Link>
            </div>
        </div>
    );
}

export default App;
