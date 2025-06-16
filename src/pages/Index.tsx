
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Shield, 
  Brain, 
  Users, 
  MessageCircle, 
  Calendar,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Early Risk Detection",
      description: "AI-powered assessment to identify pregnancy and postpartum risks early"
    },
    {
      icon: Brain,
      title: "Mental Health Monitoring",
      description: "Track mood, anxiety, and depression with personalized insights"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with other mothers in a safe, supportive community"
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Assistant",
      description: "Get instant answers to your wellness questions anytime"
    },
    {
      icon: Calendar,
      title: "Daily Check-ins",
      description: "Track symptoms, mood, and wellness with guided check-ins"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized recommendations based on your unique journey"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "New Mom",
      content: "WellNest helped me recognize early signs of postpartum anxiety. The daily check-ins and AI assistant made me feel supported throughout my journey.",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Expecting Mother",
      content: "The risk assessment tool gave me peace of mind during my pregnancy. Having 24/7 support through the chatbot was invaluable.",
      rating: 5
    },
    {
      name: "Maria K.",
      role: "Mom of Two",
      content: "The community support and personalized recommendations helped me navigate postpartum depression with confidence.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Your AI-Powered companion for{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    pregnancy & postpartum
                  </span>{" "}
                  mind and body wellness.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Track how you feel and listen to your body with personalized care, 
                  early risk detection, and 24/7 support from our AI assistant.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="wellness-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-3 text-lg font-semibold border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Evidence-Based
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/64680758-6fae-4750-9601-8d2dc4397edb.png"
                  alt="WellNest Platform Preview"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg transform rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care for Every Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From conception to postpartum recovery, WellNest provides the tools and support you need for your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-purple-100 hover:border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Mothers Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from women who found support and care with WellNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 wellness-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of women who trust WellNest for their pregnancy and postpartum care.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
          >
            <Link to="/signup" className="flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
