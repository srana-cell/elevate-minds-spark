import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white w-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Organization Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6">ElevateMinds STEM Foundation</h3>
            <p className="text-white/80 mb-6">
              Inspiring innovation through quality STEM education. We believe every student 
              deserves access to engaging science, technology, engineering, and mathematics learning experiences.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span>NA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span>NAM</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-subheading font-medium text-lg mb-4">Follow Us</h4>
                <a 
                  href="https://instagram.com" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2025 ElevateMinds STEM Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
