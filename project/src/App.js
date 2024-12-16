import { Link } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <div className="flex flex-col justify-center w-full min-h-[200px] md:min-h-[400px] font-bold text-center p-4">
                <p className="p-2 text-6xl">For Students, by Students</p>
                <p className="p-2 text-secondary">
                    Share knowledge with the rest of the people around you.
                </p>
            </div>

            {/* Separator */}
            <div className="mx-auto mt-3 w-[90%] h-[1px] bg-primary rounded-full"></div>

            {/* All Notes section */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-10">
                <Link
                    to="/physics"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Physics Notes
                    </h5>
                </Link>
                <Link
                    to="/compsci"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Computer Science Notes
                    </h5>
                </Link>
                <Link
                    to="/maths"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mathematics Notes
                    </h5>
                </Link>
                <Link
                    to="other"
                    className="block max-w-sm p-6 border border-secondary rounded-lg shadow hover:bg-secondary bg-primary w-[80%] text-center"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Other Notes
                    </h5>
                </Link>
            </div>
        </div>
    );
}

export default App;
