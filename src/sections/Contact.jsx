export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-neutral-900 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Get In <span className="text-primary-500">Touch</span></h2>
                        <p className="text-neutral-400 mb-10 text-lg">
                            Ready to give your car the care it deserves? Schedule an appointment or drop by our shop.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                                    <p className="text-neutral-400">123 Turbo Lane, Speed City, SP 90210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                                    <p className="text-neutral-400">+1 (555) 123-4567</p>
                                    <p className="text-neutral-500 text-sm">Mon-Fri: 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                                    <p className="text-neutral-400">service@turbofix.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-800/30 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-neutral-400 text-sm mb-2">First Name</label>
                                    <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 text-white transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-neutral-400 text-sm mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 text-white transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-neutral-400 text-sm mb-2">Email Address</label>
                                <input type="email" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 text-white transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-neutral-400 text-sm mb-2">Service Type</label>
                                <select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 text-white transition-colors">
                                    <option>General Repair</option>
                                    <option>Oil Change</option>
                                    <option>Diagnostics</option>
                                    <option>Performance Tuning</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-neutral-400 text-sm mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 text-white transition-colors" placeholder="Tell us about your car issues..."></textarea>
                            </div>
                            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
