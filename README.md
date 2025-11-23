# 🎨 Portfolio Website - Restructured

Modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [Styling](#styling)
- [Deployment](#deployment)
- [Performance](#performance)

## ✨ Features

- 🎯 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Loading** - Optimized performance with lazy loading
- 🎨 **Glassmorphism UI** - Beautiful glass effect cards
- 🌈 **3D Background** - Interactive Three.js background
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG 2.1 compliant
- 🎭 **Smooth Animations** - AOS and custom CSS animations

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── FE-CV-Marcell-ENG.pdf
│   └── icon.png
├── src/
│   ├── assets/
│   │   └── data/
│   │       ├── projects.js
│   │       ├── skills.js
│   │       └── experience.js
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button/
│   │   │   │   └── Button.jsx
│   │   │   ├── Card/
│   │   │   │   └── Card.jsx
│   │   │   ├── Typography/
│   │   │   │   └── Typography.jsx
│   │   │   ├── Form/
│   │   │   │   └── FormFields.jsx
│   │   │   ├── Modal/
│   │   │   │   └── Modal.jsx
│   │   │   └── Divider/
│   │   │       └── Divider.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Logo.jsx
│   │   │   │   └── Navigation.jsx
│   │   │   └── Footer/
│   │   │       └── Footer.jsx
│   │   └── sections/        # Page sections
│   │       ├── Hero/
│   │       │   └── Hero.jsx
│   │       ├── About/
│   │       │   └── About.jsx
│   │       ├── Skills/
│   │       │   └── Skills.jsx
│   │       ├── Timeline/
│   │       │   └── Timeline.jsx
│   │       ├── Projects/
│   │       │   ├── Projects.jsx
│   │       │   └── ProjectCard.jsx
│   │       ├── Contact/
│   │       │   └── Contact.jsx
│   │       └── SectionContainer/
│   │           └── SectionContainer.jsx
│   ├── hooks/
│   │   ├── useForm.js
│   │   └── useValidation.js
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── ProjectsPage/
│   │   │   └── ProjectsPage.jsx
│   │   ├── ProjectDetail/
│   │   │   └── ProjectDetail.jsx
│   │   └── NotFound/
│   │       └── NotFound.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

## 🧩 Components

### Common Components

#### Button
Reusable button component with multiple variants.

```jsx
import { Button, IconButton } from '@/components/common/Button/Button';

// Primary button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Icon button
<IconButton 
  icon="download-outline" 
  label="Download" 
  href="/file.pdf" 
/>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `onClick`: Function
- `className`: string

#### Card
Container component with glass morphism effect.

```jsx
import { Card, CardHeader, CardBody, CardFooter } from '@/components/common/Card/Card';

<Card hover>
  <CardHeader>
    <Heading level={4}>Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>Content here...</Text>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `hover`: boolean - Enable hover effect
- `className`: string

#### Typography
Consistent typography components.

```jsx
import { Heading, Text, Badge } from '@/components/common/Typography/Typography';

<Heading level={1} gradient>Main Title</Heading>
<Text size="lg" color="primary">Description</Text>
<Badge variant="primary">New</Badge>
```

**Heading Props:**
- `level`: 1-6
- `gradient`: boolean
- `className`: string

**Text Props:**
- `size`: 'sm' | 'base' | 'lg' | 'xl'
- `color`: 'white' | 'gray' | 'primary'
- `className`: string

#### Form Fields
Styled form inputs with validation.

```jsx
import { Input, TextArea } from '@/components/common/Form/FormFields';

<Input
  label="Email"
  name="email"
  type="email"
  icon="mail-outline"
  placeholder="your@email.com"
  error={errors.email}
  required
/>

<TextArea
  label="Message"
  name="message"
  rows={5}
  placeholder="Your message..."
  error={errors.message}
  required
/>
```

### Layout Components

#### Header
Fixed navigation header with responsive menu.

```jsx
import { Header } from '@/components/layout/Header/Header';

<Header />
```

Features:
- Sticky navigation
- Mobile menu
- Smooth scroll to sections
- Active link highlighting

#### Footer
Footer with links and social icons.

```jsx
import { Footer } from '@/components/layout/Footer/Footer';

<Footer />
```

### Section Components

#### SectionContainer
Wrapper for page sections with consistent spacing.

```jsx
import { SectionContainer, SectionHeader } from '@/components/sections/SectionContainer/SectionContainer';

<SectionContainer id="about" background="secondary">
  <SectionHeader
    title="About Me"
    subtitle="Get to know me"
    description="Learn more about my journey"
  />
  {/* Content */}
</SectionContainer>
```

**Props:**
- `id`: string - Section ID for navigation
- `background`: 'primary' | 'secondary' | 'gradient'
- `className`: string

## 🎨 Styling

### Color Palette

```css
/* Primary Green */
--primary-100: #13FF00
--primary-200: #202020
--primary-300: #3F3F3F
--primary-400: #E2E2E2
--primary-500: #8F8F8F
--primary-600: #252525
--primary-700: #161616
```

### Custom Classes

```jsx
// Text gradients
<h1 className="text-gradient">Gradient Text</h1>
<h1 className="text-gradient-green">Green Gradient</h1>

// Glass morphism
<div className="glass-card">Card Content</div>

// Animations
<div className="animate-fadeInUp animation-delay-400">Animated</div>
```

### Responsive Design

The portfolio uses Tailwind's responsive prefixes:

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

## 🎯 Key Features Implementation

### 1. Smooth Scrolling
```jsx
const handleScrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
```

### 2. Form Validation
```jsx
import { useForm } from '@/hooks/useForm';

const { formData, handleChange, isButtonDisabled } = useForm({
  name: '',
  email: '',
  message: ''
});
```

### 3. AOS Animations
```jsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}, []);

<div data-aos="fade-up" data-aos-delay="100">
  Animated content
</div>
```

### 4. 3D Background
```jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';

<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
  <ambientLight intensity={0.4} />
  <Sparkles count={100} size={2} color="#13FF00" />
  <OrbitControls enableZoom={false} autoRotate />
</Canvas>
```

## 📊 Performance Optimization

1. **Code Splitting**
   - React.lazy() for route components
   - Dynamic imports for heavy components

2. **Image Optimization**
   - WebP format with fallbacks
   - Lazy loading with Intersection Observer
   - Responsive images

3. **Bundle Size**
   - Tree shaking
   - Minification
   - Compression (Gzip/Brotli)

4. **Caching**
   - Service Worker (optional)
   - Cache-Control headers

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

Deploy:
```bash
npm run deploy
```

## 🔧 Customization Guide

### 1. Update Personal Information

Edit `/src/assets/data/`:
- `projects.js` - Your projects
- `skills.js` - Your skills
- `experience.js` - Work experience and education

### 2. Change Colors

Update `tailwind.config.js`:
```js
colors: {
  primary: {
    100: '#YOUR_COLOR',
    // ...
  }
}
```

### 3. Add New Sections

1. Create component in `/src/components/sections/`
2. Import in Home page
3. Add to navigation

### 4. Modify Layout

Edit components in `/src/components/layout/`

## 📝 Best Practices

1. **Component Organization**
   - One component per file
   - Use functional components
   - Implement PropTypes or TypeScript

2. **State Management**
   - Use React hooks
   - Keep state close to where it's used
   - Consider Context API for global state

3. **Performance**
   - Memoize expensive computations
   - Use React.memo() for pure components
   - Optimize re-renders

4. **Accessibility**
   - Use semantic HTML
   - Add ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

### Deployment Issues

Check:
- Build command is correct
- Environment variables are set
- Publish directory is `dist`
- Base path in vite.config.js

## 📄 License

MIT License - feel free to use for your own portfolio!

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

**Marcell Andreas Samadhani Duha**
- Email: your@email.com
- LinkedIn: [Your Profile]
- GitHub: [Your Profile]

---

Built with ❤️ using React, Vite, and Tailwind CSS