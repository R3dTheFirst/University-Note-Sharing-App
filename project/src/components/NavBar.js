import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase-config";
import { RiAccountCircleFill } from "react-icons/ri";

export default function NavBar() {
    const [user, setUser] = useState(null); // State for logged-in user

    useEffect(() => {
        // Check if user is logged in when the component mounts
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user); // Set the logged-in user
        };

        fetchUser();
    }, []);

    return (
        <div className="flex bg-primary text-xs md:text-base font-spaceGrotesk justify-around p-2">
            {/* Logo */}
            <div>
                <Link to="/">Note Share</Link>
            </div>

            {/* mid Items */}
            <div className="flex gap-1 md:gap-4">
                <Link to="/notes">Notes</Link>
                <Link to="/create">Create</Link>
            </div>

            {/* Authentication Links */}
            <div className="flex flex-col justify-center">
                <Link to="/account">
                    <RiAccountCircleFill className="text-lg" />
                </Link>
            </div>
        </div>
    );
}
