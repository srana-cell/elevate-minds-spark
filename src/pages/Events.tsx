import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Robotics Workshop: Build Your First Robot",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Innovation Center",
      category: "One-Day Workshop",
      description: "Learn the basics of robotics by building and programming your own robot using Arduino and sensors.",
      capacity: "24 students",
      ageGroup: "Ages 12-16",
      status: "Open"
    },
    {
      id: 2,
      title: "Virtual Coding Bootcamp: Python for Beginners",
      date: "March 22, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Online (Zoom)",
      category: "Virtual Session",
      description: "Introduction to Python programming with hands-on projects and interactive exercises.",
      capacity: "50 students",
      ageGroup: "Ages 10-14",
      status: "Open"
    },
    {
      id: 3,
      title: "Chemistry Lab: Spectacular Science Reactions",
      date: "April 5, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "University Science Building",
      category: "One-Day Workshop",
      description: "Explore fascinating chemical reactions through safe, supervised laboratory experiments.",
      capacity: "16 students",
      ageGroup: "Ages 13-17",
      status: "Nearly Full"
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'One-Day Workshop':
        return 'bg-primary text-primary-foreground';
      case 'Virtual Session':
        return 'bg-accent text-accent-foreground';
      case 'Camp':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'Nearly Full':
        return 'bg-yellow-100 text-yellow-800';
      case 'Early Bird':
        return 'bg-blue-100 text-blue-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting hands-on learning experiences that bring STEM to life. 
            From one-day workshops to summer camps, there's something for every curious mind.
          </p>
        </div>

        {/* Event Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="outline" className="px-4 py-2 text-sm">One-Day Workshops</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">Virtual Sessions</Badge>
          <Badge variant="outline" className="px-4 py-2 text-sm">Camps</Badge>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={16} className="mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-2 text-primary" />
                    {event.capacity} • {event.ageGroup}
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-primary"
                  disabled={event.status === 'Full'}
                >
                  {event.status === 'Full' ? 'Event Full' : 'RSVP Now'}
                  {event.status !== 'Full' && <ExternalLink size={16} className="ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl mb-4">Don't See What You're Looking For?</h3>
            <p className="text-muted-foreground mb-6">
              We're always developing new programs based on student interests and community needs. 
              Let us know what STEM topics you'd like to explore!
            </p>
            <Button className="btn-primary">
              Suggest an Event
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
