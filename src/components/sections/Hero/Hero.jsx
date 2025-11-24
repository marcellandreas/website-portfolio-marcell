import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';
import { Heading, Text } from '../../common/Typography/Typography';
import { IconButton } from '../../common/Button/Button';
import { Card, CardBody } from '../../common/Card/Card';

const SOCIAL_LINKS = [
  { icon: 'logo-github', href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: 'logo-linkedin', href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: 'mail-outline', href: 'mailto:your@email.com', label: 'Email' }
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <Sparkles count={100} scale={10} size={2} speed={0.5} color="#13FF00" opacity={0.3} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <img
              src="/assets/images/marcell.png"
              alt="Marcell Andreas"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary-100 shadow-2xl"
            />
          </div>

          <Heading level={1} className="text-white mb-4 animate-fadeInUp animation-delay-200">
            Hi, I'm <span className="text-primary-100">Marcell Andreas</span>
          </Heading>

          <Text size="xl" className="mb-8 animate-fadeInUp animation-delay-400">
            Front-End Web Developer
          </Text>

          <Text className="mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-600">
            Passionate about creating beautiful and functional web experiences. 
            Specialized in modern JavaScript frameworks and responsive design.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fadeInUp animation-delay-800">
            <IconButton
              icon="cloud-download-outline"
              label="Download Resume"
              href="/CV_marcell andreas samadhani duha.pdf"
            />
            <a 
              href="#contact"
              className="
                px-6 py-3 border-2 border-white text-white font-semibold rounded-3xl
                hover:bg-white hover:text-black transition-all duration-300
              "
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fadeInUp animation-delay-1000">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 flex items-center justify-center
                  rounded-full bg-white/10 backdrop-blur-md text-white
                  hover:bg-primary-100 hover:text-black
                  transition-all duration-300 hover:scale-110
                "
                aria-label={social.label}
              >
                <ion-icon name={social.icon} size="small"></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ion-icon name="chevron-down-outline" class="text-white text-3xl"></ion-icon>
      </div>
    </section>
  );
};