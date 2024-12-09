import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex bg-primary text-xs md:text-base font-spaceGrotesk justify-around p-2">
            {/* Logo */}
            <div>
                <Link to="/">Note Share</Link>
            </div>

            {/* mid Items */}
            <div className="flex gap-1 md:gap-4">
                <Link to="#AllNotes">Notes</Link>
                <Link to="#CreateNote">Create</Link>
            </div>

            {/* Authentication Links */}
            <div>
                <Link to="/login" className="bg-secondary px-2 py-1 rounded-sm">
                    Log In
                </Link>
            </div>
        </div>
    );
}
