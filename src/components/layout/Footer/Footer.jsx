import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/yourusername', icon: 'logo-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourusername', icon: 'logo-linkedin', label: 'LinkedIn' },
  { href: 'mailto:your@email.com', icon: 'mail-outline', label: 'Email' }
];

export const Footer = () => {
  return (
    <footer className="bg-primary-700 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        {/* Links */}
        <nav className="flex justify-center gap-8 mb-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-300 hover:text-primary-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-full bg-white/10 text-white
                hover:bg-primary-100 hover:text-black
                transition-all duration-300
              "
              aria-label={social.label}
            >
              <ion-icon name={social.icon}></ion-icon>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marcell Andreas Samadhani Duha.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};