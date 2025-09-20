import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, Users, Lightbulb, GraduationCap, Heart, Building } from 'lucide-react';

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    reason: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', volunteerForm);
    setVolunteerForm({ name: '', email: '', reason: '' });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner form submitted:', partnerForm);
    setPartnerForm({ name: '', email: '', message: '' });
  };

  const volunteerOpportunities = [
    {
      icon: <GraduationCap className="text-primary" size={32} />,
      title: "Workshop Assistant",
      description: "Help facilitate hands-on activities and guide students through experiments and projects."
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Mentor",
      description: "Provide one-on-one guidance and inspiration to students exploring STEM careers."
    },
    {
      icon: <Lightbulb className="text-primary" size={32} />,
      title: "Content Creator",
      description: "Develop educational materials, videos, and resources for our programs."
    },
    {
      icon: <Heart className="text-accent" size={32} />,
      title: "Event Support",
      description: "Assist with event setup, registration, and logistics for our various programs."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Get Involved</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our mission to inspire the next generation of innovators. Whether you're an educator, 
            industry professional, or simply passionate about STEM education, there's a place for you.
          </p>
        </div>

        {/* Help Volunteer Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <HandHeart className="text-primary-foreground" size={32} />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Join Us Today!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help make a difference by supporting STEM education. Sign up to volunteer and 
              get notified about opportunities that match your skills and interests.
            </p>
          </div>

          {/* Volunteer Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="font-subheading font-semibold text-lg mb-3">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Volunteer Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Volunteer Interest Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Why would you like to volunteer with us? What skills or experience do you bring?"
                  value={volunteerForm.reason}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, reason: e.target.value })}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full btn-primary">
                  Sign Up to Volunteer
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Partner With Us Section */}
        <section className="section-light rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="text-accent-foreground" size={32} />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for partnerships with schools, businesses, and organizations 
              that share our commitment to STEM education excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-subheading font-semibold text-lg mb-2">Schools & Districts</h3>
              <p className="text-muted-foreground text-sm">
                Bring our programs directly to your students through in-school workshops and assemblies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-subheading font-semibold text-lg mb-2">Corporate Partners</h3>
              <p className="text-muted-foreground text-sm">
                Sponsor programs, provide mentors, and help us reach more students in your community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-subheading font-semibold text-lg mb-2">Community Organizations</h3>
              <p className="text-muted-foreground text-sm">
                Collaborate on events and programs that serve underrepresented communities.
              </p>
            </div>
          </div>

          {/* Partnership Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Partnership Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={partnerForm.name}
                  onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full btn-primary">
                  Send Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;