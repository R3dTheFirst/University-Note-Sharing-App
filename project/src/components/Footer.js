export default function Footer() {
    return (
        <footer className="text-white bg-primary">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="grid items-center grid-cols-3 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                    <div>
                        <h2 className="mb-6 text-sm font-bold md:text-lg">
                            Community
                        </h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a
                                    href="https://discord.gg/your-invite-link"
                                    className="hover:underline"
                                >
                                    Discord Server
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/rules" className="hover:underline">
                                    Community Rules
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/contribute"
                                    className="hover:underline"
                                >
                                    Contribute Notes
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold md:text-lg">
                            Resources
                        </h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="/guide" className="hover:underline">
                                    Submission Guidelines
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/faq" className="hover:underline">
                                    FAQ
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="/privacy" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold md:text-lg">
                            Legal
                        </h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="/terms" className="hover:underline">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/licensing"
                                    className="hover:underline"
                                >
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    href="/copyright"
                                    className="hover:underline"
                                >
                                    Copyright Information
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 text-center bg-primary md:flex md:items-center md:justify-center">
                    <span className="mx-auto text-sm text-text sm:text-center">
                        اَمۡ حَسِبۡتُمۡ اَنۡ تَدۡخُلُوا الۡجَـنَّةَ وَ لَمَّا
                        يَاۡتِكُمۡ مَّثَلُ الَّذِيۡنَ خَلَوۡا مِنۡ قَبۡلِكُمۡؕ
                        مَسَّتۡهُمُ الۡبَاۡسَآءُ وَالضَّرَّآءُ وَزُلۡزِلُوۡا
                        حَتّٰى يَقُوۡلَ الرَّسُوۡلُ وَالَّذِيۡنَ اٰمَنُوۡا
                        مَعَهٗ مَتٰى نَصۡرُ اللّٰهِؕ اَلَاۤ اِنَّ نَصۡرَ اللّٰهِ
                        قَرِيۡبٌ‏
                    </span>
                </div>
            </div>
        </footer>
    );
}
