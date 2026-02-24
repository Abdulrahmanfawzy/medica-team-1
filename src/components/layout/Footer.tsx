import React from "react";
// Note: You can replace these icons with Lucide-React or FontAwesome
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0D6C71]">
                            MediLink
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Find your doctor and book appointments in under 60
                            seconds.
                        </p>
                    </div>

                    {/* Column 1: For Patients */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-6">
                            For Patients
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                Find Doctors
                            </li>
                            <Link to="/online_consultation">
                                <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                    Online Consultation
                                </li>
                            </Link>
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-6">
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                About us
                            </li>
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                Join Our Team
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                Privacy & Policy
                            </li>
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                Terms of service
                            </li>
                            <li className="hover:text-[#0D6C71] cursor-pointer transition">
                                Careers
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © 2024 MediLink. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 text-gray-400">
                        <FaTwitter className="hover:text-[#0D6C71] cursor-pointer transition text-lg" />
                        <FaFacebookF className="hover:text-[#0D6C71] cursor-pointer transition text-lg" />
                        <FaInstagram className="hover:text-[#0D6C71] cursor-pointer transition text-lg" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
