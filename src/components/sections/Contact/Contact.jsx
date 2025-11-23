import { useState } from 'react';
import { SectionContainer, SectionHeader } from '../SectionContainer/SectionContainer';
import { Card, CardBody } from '../../common/Card/Card';
import { Input, TextArea } from '../../common/Form/FormFields';
import { Button } from '../../common/Button/Button';
import { Heading, Text } from '../../common/Typography/Typography';

const CONTACT_INFO = [
  {
    icon: 'mail-outline',
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  },
  {
    icon: 'call-outline',
    label: 'Phone',
    value: '+62 812 3456 7890',
    href: 'tel:+6281234567890'
  },
  {
    icon: 'location-outline',
    label: 'Location',
    value: 'Depok, West Java, Indonesia',
    href: null
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const isFormValid = Object.values(formData).every(val => val.trim() !== '');

  return (
    <SectionContainer id="contact" background="secondary">
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's work together"
        description="Have a project in mind? Feel free to reach out!"
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-right">
          <Card>
            <CardBody>
              <Heading level={4} className="text-primary-100 mb-6">
                Contact Information
              </Heading>
              
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100/10 flex items-center justify-center text-primary-100">
                      <ion-icon name={info.icon} size="small"></ion-icon>
                    </div>
                    <div>
                      <Text size="sm" color="primary" className="mb-1">
                        {info.label}
                      </Text>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-primary-100 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <Text size="sm">{info.value}</Text>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Social Links */}
          <Card>
            <CardBody>
              <Heading level={5} className="text-white mb-4">
                Connect with me
              </Heading>
              <div className="flex gap-3">
                {[
                  { icon: 'logo-github', href: 'https://github.com' },
                  { icon: 'logo-linkedin', href: 'https://linkedin.com' },
                  { icon: 'logo-twitter', href: 'https://twitter.com' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-12 h-12 rounded-full bg-white/10 
                      flex items-center justify-center text-white
                      hover:bg-primary-100 hover:text-black
                      transition-all duration-300
                    "
                  >
                    <ion-icon name={social.icon}></ion-icon>
                  </a>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    icon="person-outline"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    icon="mail-outline"
                    required
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  icon="create-outline"
                  required
                />

                <TextArea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
                    <Text className="text-green-400">
                      ✓ Message sent successfully!
                    </Text>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <ion-icon name="send-outline"></ion-icon>
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};