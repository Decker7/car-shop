export default function About() {
    return (
        <section id="about" className="py-20 bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-primary-900 rounded-2xl opacity-30 transform group-hover:rotate-2 transition-all duration-500 blur-lg"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Using a placeholder service image here - in production this would be real shop photo */}
                            <div className="aspect-[4/3] bg-neutral-800 flex items-center justify-center">
                                <svg className="w-24 h-24 text-neutral-700" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" /></svg>
                                <img src="/hero_car_background.png" alt="Shop Interior" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-neutral-900 p-2 rounded-xl">
                            <div className="bg-primary-600 p-6 rounded-lg shadow-xl text-center">
                                <span className="block text-4xl font-bold text-white mb-1">15+</span>
                                <span className="text-sm font-medium text-white/90 uppercase tracking-wide">Years Exp</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-12 h-[2px] bg-primary-500"></span>
                            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">About TurboFix</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            We Are Defined By <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Precision & Passion</span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                            Founded in 2010, TurboFix started with a single bay and a dream to provide honest, high-performance automotive care. Today, we are the region's premier destination for luxury and sports car maintenance.
                        </p>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            Our team of ASE-certified technicians combines old-school craftsmanship with cutting-edge diagnostic technology to ensure your vehicle performs exactly as designed.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {['Certified Master Technicians', 'Genuine OEM Parts', 'State-of-the-Art Equipment'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-neutral-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
