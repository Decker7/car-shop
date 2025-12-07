
export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_car_background.png"
                    alt="Sports Car in Garage"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10 relative pt-20">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 bg-primary-900/30 border border-primary-700/50 rounded-full mb-6 backdrop-blur-sm">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Premium Auto Care</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Expert Care for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">Dream Machine</span>
                    </h1>
                    <p className="text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
                        Experience top-tier automotive service with our certified specialists. From routine maintenance to performance upgrades, we treat every car like it's our own.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold text-lg transition-all transform hover:translate-y-[-2px] shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] text-center"
                        >
                            Schedule Service
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-neutral-800/50 hover:bg-neutral-800 text-white border border-neutral-700 rounded-lg font-bold text-lg transition-all backdrop-blur-md hover:border-neutral-500 text-center"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
