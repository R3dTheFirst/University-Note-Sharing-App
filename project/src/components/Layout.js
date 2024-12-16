import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow w-[80%] md:w-[60%] mx-auto">
                {children}
            </main>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}
