import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Code, Cog, Calculator } from 'lucide-react';
import heroImage from '@/assets/stem-hero.jpg';
import stemPillars from '@/assets/stem-pillars.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 20, 71, 0.7), rgba(35, 107, 204, 0.7)), url(${heroImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Inspiring Innovation Through STEM Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            ElevateMinds STEM Foundation empowers students through hands-on learning experiences 
            in Science, Technology, Engineering, and Mathematics. Join us in building the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/about">
                Learn About Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white hover:text-dark-blue">
              <Link to="/events">
                View Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is STEM Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">What is STEM?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              STEM education integrates Science, Technology, Engineering, and Mathematics to develop 
              critical thinking, problem-solving, and innovation skills essential for the 21st century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Beaker className="text-primary" size={32} />
                </div>
                <h3 className="font-subheading font-medium text-lg mb-2">Science</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring the natural world through observation and experimentation
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-accent" size={32} />
                </div>
                <h3 className="font-subheading font-medium text-lg mb-2">Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Using digital tools and programming to solve complex problems
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cog className="text-primary" size={32} />
                </div>
                <h3 className="font-subheading font-medium text-lg mb-2">Engineering</h3>
                <p className="text-sm text-muted-foreground">
                  Designing and building solutions to real-world challenges
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="text-accent" size={32} />
                </div>
                <h3 className="font-subheading font-medium text-lg mb-2">Mathematics</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding patterns and relationships through numbers and logic
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={stemPillars} 
                alt="STEM Education Illustration showing Science, Technology, Engineering, and Mathematics concepts"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Organization Section */}
      <section className="py-16 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Organization</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Info about organization
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              N/A
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-subheading font-medium text-xl mb-2">One-Day Workshops</h3>
                <p className="text-muted-foreground">
                  Intensive hands-on learning experiences covering various STEM topics
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-subheading font-medium text-xl mb-2">Virtual Sessions</h3>
                <p className="text-muted-foreground">
                  Online interactive sessions accessible from anywhere in the world
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-subheading font-medium text-xl mb-2">Summer Camps</h3>
                <p className="text-muted-foreground">
                  Week-long immersive programs for deep STEM exploration
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild className="btn-primary">
                <Link to="/events">
                  View Our Upcoming Events
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
