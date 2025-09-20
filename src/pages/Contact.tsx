import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNYbj5FGAlRReHetzCol-_Hb23emo69JyG8hVnp79TboIpUhyVff0Cn30mYN23Q44cow/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

  
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("formType", "Contacts");
  
    try {
      await fetch(SCRIPT_URL, { method: 'POST', body: data });
      toast({ title: "Thank you!", description: "Your volunteer interest form has been submitted." });
      setFormData({ name: '', email: '', reason: '' });
    } catch (error) {
      console.error('Thank you!', error);
      toast({ title: "Thank you!", description: "Your volunteer interest form has been submitted." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Have questions about our programs? Want to schedule a visit? We'd love to hear from you! 
                    Reach out to us using any of the methods below.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    disabled={isSubmitting}
                                />
                                <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Get in Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-subheading font-semibold text-lg mb-1">Email</h3>
                                    <p className="text-muted-foreground">info@elevateminds.org</p>
                                    <p className="text-muted-foreground text-sm">We typically respond within 24 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-subheading font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-muted-foreground">(555) 123-STEM</p>
                                    <p className="text-muted-foreground text-sm">Monday - Friday, 9 AM - 5 PM EST</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-subheading font-semibold text-lg mb-1">Address</h3>
                                    <p className="text-muted-foreground">123 Innovation Drive</p>
                                    <p className="text-muted-foreground">Tech City, TC 12345</p>
                                    <p className="text-muted-foreground text-sm">Visitors welcome by appointment</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="text-accent" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-subheading font-semibold text-lg mb-1">Office Hours</h3>
                                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                                    <p className="text-muted-foreground">Sunday: Closed</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}; // <-- This was the missing closing brace and semicolon

export default Contact;
