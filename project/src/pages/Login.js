import { app, auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            navigate("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <div className="font-clashGrotesk max-w-4xl flex items-center mx-auto md:h-screen p-4">
                <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden bg-primary">
                    <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
                        <div>
                            <h4 className="text-white text-lg font-semibold">
                                Log In To Your Account
                            </h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                                Welcome to our log in page! Get started by
                                entering you email and password.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-semibold">
                                Simple & Secure
                            </h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                                Our login process is designed for both ease of
                                use and security. We ensure your privacy is
                                protected while providing a smooth
                                authentication experience.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="md:col-span-2 w-full py-6 px-6 sm:px-16"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold">Log me in</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-sm mb-2 block">
                                    Email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={email} // Add the value binding here
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        } // Correct onChange for email input
                                        className="text-text bg-background border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm mb-2 block">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        value={password} // Add the value binding here
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        } // Correct onChange for password input
                                        className="text-text bg-background border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-3 block text-sm"
                                >
                                    I accept the{" "}
                                    <a
                                        href="javascript:void(0);"
                                        className="text-blue-600 font-semibold hover:underline ml-1"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <div className="!mt-12">
                            <button
                                type="submit" // Change to type="submit"
                                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                            >
                                Create account
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-blue-600 font-semibold hover:underline ml-1"
                            >
                                Register Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
