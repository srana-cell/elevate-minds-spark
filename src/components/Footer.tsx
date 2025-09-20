import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFJHI2jhm0OW7Y6h_GEk9Mm55bKl_nYRV5XNhYJ_80RN0dwjfQosnxV_cGxCtsn3wUfw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSubmit = { ...formData, formType: "Contacts" };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      toast({ title: "Success!", description: "Your message has been sent." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ title: "Error", description: "Could not send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
              <div className="flex space-x-4">
        
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
