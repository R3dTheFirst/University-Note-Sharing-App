import { Link } from "react-router-dom";

export default function NoteCard({ moduleName, year, author, thanks, id }) {
    return (
        <Link to={`/notes/${id}`} className="p-2 w-full">
            <div className="block max-w-sm p-6 border border-secondary rounded-lg shadow bg-primary hover:bg-secondary">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {moduleName}
                </h5>
                <p className="text-text">
                    {year} by: {author}
                </p>
                <p className="text-text">Thanks: {thanks.length}</p>
            </div>
        </Link>
    );
}
