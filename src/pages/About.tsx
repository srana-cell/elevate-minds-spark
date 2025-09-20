import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "N/A",
      role: "Executive Director",
    },
    {
      name: "N/A",
      role: "Program Director",

    },
    {
      name: "N/A",
      role: "Curriculum Specialist",

    },
    {
      name: "N/A",
      role: "Community Outreach Coordinator",

    },
    {
      name: "N/A",
      role: "Technology Coordinator",

    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Our Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to inspire the next generation of innovators through 
              accessible, engaging, and transformative STEM education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-primary-foreground" size={24} />
                </div>
                <h2 className="font-heading font-bold text-3xl">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize STEM education by providing high-quality, hands-on learning 
                experiences that inspire curiosity, foster innovation, and prepare students 
                for the challenges of tomorrow.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every student, regardless of their background, deserves the 
                opportunity to explore the wonders of science, technology, engineering, and 
                mathematics in an engaging and supportive environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-accent" size={32} />
                  </div>
                  <h3 className="font-subheading font-medium text-lg mb-2">Passion</h3>
                  <p className="text-sm text-muted-foreground">
                    We're driven by our love for learning and teaching
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="font-subheading font-medium text-lg mb-2">Inclusion</h3>
                  <p className="text-sm text-muted-foreground">
                    Every student deserves access to quality STEM education
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-accent" size={32} />
                  </div>
                  <h3 className="font-subheading font-medium text-lg mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We embrace creative approaches to learning and teaching
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="font-subheading font-medium text-lg mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for the highest quality in everything we do
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate educators, researchers, and innovators who make our mission possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-subheading font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
