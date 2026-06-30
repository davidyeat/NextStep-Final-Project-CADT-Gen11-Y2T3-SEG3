import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-[#8899AA]/8">
      <div className="max-w-300 mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & Tagline */}
          <div className="lg:max-w-xs">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="font-['Space_Grotesk'] font-semibold text-xl text-[#F0F4F8]">
                NextStep
              </span>
            </Link>
            <p className="text-[#8899AA] text-sm mt-3 leading-relaxed">
              Empowering Cambodian students to discover their path to higher education since 2026.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#667788] text-sm">
                <Mail className="w-4 h-4" />
                <span>info@nextstep.edu.kh</span>
              </div>
              <div className="flex items-center gap-2 text-[#667788] text-sm">
                <Phone className="w-4 h-4" />
                <span>+855 973 350 560</span>
              </div>
              <div className="flex items-center gap-2 text-[#667788] text-sm">
                <MapPin className="w-4 h-4" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-['Space_Grotesk'] font-medium text-[#F0F4F8] text-sm mb-4">
                Platform
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link to="/universities" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    Universities
                  </Link>
                </li>
                <li>
                  <Link to="/scholarships" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link to="/majors" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    Majors
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Space_Grotesk'] font-medium text-[#F0F4F8] text-sm mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link to="/recommendation" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    Recommendations
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="text-[#8899AA] text-sm hover:text-[#00D4FF] transition-colors">
                    Saved Items
                  </Link>
                </li>
                <li>
                  <span className="text-[#8899AA] text-sm cursor-default">FAQ</span>
                </li>
                <li>
                  <span className="text-[#8899AA] text-sm cursor-default">Support</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Space_Grotesk'] font-medium text-[#F0F4F8] text-sm mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <span className="text-[#8899AA] text-sm cursor-default">Privacy Policy</span>
                </li>
                <li>
                  <span className="text-[#8899AA] text-sm cursor-default">Terms of Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-6 border-t border-[#8899AA]/6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#667788] text-xs">
            &copy; 2026 NextStep. All rights reserved.
          </p>
          <p className="text-[#667788] text-xs">
            Made with care for Cambodian students
          </p>
        </div>
      </div>
    </footer>
  );
}
