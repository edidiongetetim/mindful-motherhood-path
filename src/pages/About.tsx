
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, Target, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe every mother deserves personalized, empathetic support throughout their journey."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health data is sacred. We maintain the highest standards of privacy and security."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building a supportive community where mothers can connect, share, and grow together."
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Our platform is built on the latest research in maternal and mental health."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Maternal-Fetal Medicine",
      description: "15+ years in maternal health, passionate about early risk detection"
    },
    {
      name: "Maya Patel",
      role: "Head of Psychology",
      specialty: "Perinatal Mental Health",
      description: "Expert in postpartum depression and anxiety treatment"
    },
    {
      name: "Dr. Emily Chen",
      role: "AI Research Director",
      specialty: "Healthcare AI",
      description: "Leading researcher in AI applications for women's health"
    },
    {
      name: "Jessica Williams",
      role: "Community Manager",
      specialty: "Peer Support",
      description: "Mother of three, advocate for maternal wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">WellNest</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to revolutionize maternal healthcare by combining cutting-edge AI 
            technology with compassionate, personalized care for every mother's unique journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every year, millions of women experience preventable complications during pregnancy 
                and postpartum. Too many suffer in silence with mental health challenges that could 
                be identified and addressed early.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                WellNest exists to change this reality. We believe that with the right tools, 
                support, and early intervention, every mother can have a healthier, more supported 
                journey through pregnancy and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50K+</div>
                  <div className="text-sm text-gray-600">Mothers Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every mother has access to personalized, AI-powered healthcare 
                  that detects risks early, provides emotional support, and connects them with 
                  a community of care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at WellNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100">
                      <value.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to maternal health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.specialty}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 wellness-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-purple-100">
              Real results from real mothers using WellNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-purple-100">Mothers Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <div className="text-purple-100">Early Risk Detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">76%</div>
              <div className="text-purple-100">Reduced Anxiety</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100">AI Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
