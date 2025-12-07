const services = [
    {
        title: "Engine Diagnostics",
        description: "Advanced computer diagnostics to identify issues accurately and efficiently.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        title: "Oil & Fluids",
        description: "Premium synthetic oil changes and comprehensive fluid top-ups for longevity.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        title: "Brake Components",
        description: "Complete brake service including pads, rotors, and ABS system checks.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Tire & Wheels",
        description: "Mounting, balancing, and alignment services for a smoother, safer ride.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ), // Placeholder icon, fixed later if needed
    },
    {
        title: "Suspension Tuning",
        description: "Shock, strut, and suspension repair for optimal handling and comfort.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Eco Inspection",
        description: "Certified emissions testing and exhaust system repairs.",
        icon: (
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-neutral-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-primary-500">Services</span></h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        We offer a comprehensive range of automotive services designed to keep your vehicle running at peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-neutral-800/30 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-800/50 hover:border-primary-900/50 transition-all group">
                            <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{service.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
