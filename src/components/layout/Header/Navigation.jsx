import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home-outline' },
  { id: 'about', label: 'About', icon: 'person-outline' },
  { id: 'skills', label: 'Skills', icon: 'code-slash-outline' },
  { id: 'projects', label: 'Projects', icon: 'briefcase-outline' },
  { id: 'contact', label: 'Contact', icon: 'mail-outline' }
];

export const Navigation = ({ isMobile = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (item) => {
    if (item.id === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.id === 'projects' && location.pathname !== '/') {
      navigate('/projects');
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(item.id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  if (isMobile) {
    return (
      <div className="flex justify-around items-center py-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item)}
            className="flex flex-col items-center gap-1 px-3 py-2 text-white hover:text-primary-100 transition-colors"
          >
            <ion-icon name={item.icon} size="small"></ion-icon>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <nav className="flex items-center gap-1">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavigate(item)}
          className="
            px-4 py-2 text-white font-medium
            hover:text-primary-100 
            border-b-2 border-transparent hover:border-primary-100
            transition-all duration-300
          "
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};