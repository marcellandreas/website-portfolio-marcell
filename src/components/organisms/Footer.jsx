import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { path: "/about", label: "About Us" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary-200 p-6">
      <nav className="mb-4 text-center">
        <ul className="flex justify-center space-x-8">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-white hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-4 text-center">
        {socialLinks.map((social, index) => (
          <React.Fragment key={social.href}>
            <a
              href={social.href}
              className="text-white hover:text-gray-300 mx-3"
              aria-label={social.label}
            >
              {social.label}
            </a>
            {index < socialLinks.length - 1 && (
              <span className="text-white">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marcell Andreas Samadhani Duha, All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
