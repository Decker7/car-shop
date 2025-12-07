export default function Footer() {
    return (
        <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                                <span className="font-bold text-white">T</span>
                            </div>
                            <span className="text-xl font-bold text-white">TurboFix</span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            Premium automotive care for enthusiasts, by enthusiasts. We treat every vehicle with the respect it deserves.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <a key={i} href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:bg-primary-600 hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'About', 'Contact', 'Terms'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Oil Change', 'Engine Repair', 'Wheel Alignment', 'Diagnostics', 'Brake Service'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-neutral-400 mb-4">Subscribe to get special offers and maintenance tips.</p>
                        <form className="flex gap-2">
                            <input type="email" placeholder="Your email" className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-primary-500 w-full" />
                            <button className="bg-primary-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-primary-700 transition-colors">
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">© 2024 TurboFix Auto Shop. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-neutral-500">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
