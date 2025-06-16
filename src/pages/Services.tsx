
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Brain, 
  Users, 
  MessageCircle, 
  Calendar, 
  Heart,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Services = () => {
  const coreServices = [
    {
      icon: Shield,
      title: "Early Risk Detection",
      description: "AI-powered assessment that analyzes multiple factors to identify potential pregnancy and postpartum risks before they become serious.",
      features: [
        "Comprehensive health screening",
        "Real-time risk monitoring",
        "Predictive health analytics",
        "Personalized risk reports"
      ],
      badge: "Core Service"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Comprehensive mental health monitoring and support for anxiety, depression, and other perinatal mental health conditions.",
      features: [
        "Daily mood tracking",
        "Depression & anxiety screening",
        "Crisis intervention protocols",
        "Professional referrals"
      ],
      badge: "Essential"
    },
    {
      icon: Calendar,
      title: "Daily Check-ins",
      description: "Personalized daily assessments that track your physical and emotional wellbeing throughout your journey.",
      features: [
        "Symptom tracking",
        "Mood assessment",
        "Sleep quality monitoring",
        "Energy level tracking"
      ],
      badge: "Daily"
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Peer Support Community",
      description: "Connect with other mothers in a safe, moderated environment",
      features: ["Support groups", "One-on-one connections", "Expert-led discussions"]
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Assistant",
      description: "Instant support and guidance whenever you need it",
      features: ["Medical information", "Symptom guidance", "Emergency protocols"]
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Evidence-based content tailored to your journey stage",
      features: ["Weekly articles", "Video content", "Interactive guides"]
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visual insights into your wellness journey over time",
      features: ["Health trends", "Goal tracking", "Achievement milestones"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Support",
      description: "Immediate assistance during crisis situations",
      features: ["Crisis hotlines", "Emergency contacts", "Professional referrals"]
    },
    {
      icon: Heart,
      title: "Personalized Care Plans",
      description: "Custom wellness plans based on your unique needs",
      features: ["Individual goals", "Custom reminders", "Adaptive recommendations"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      service: "Early Risk Detection",
      quote: "WellNest's risk assessment caught my gestational diabetes early. My doctor was amazed at how comprehensive the report was.",
      rating: 5
    },
    {
      name: "Ashley K.",
      service: "Mental Health Support",
      quote: "The daily mood tracking helped me realize I was developing postpartum anxiety. Getting help early made all the difference.",
      rating: 5
    },
    {
      name: "Maria S.",
      service: "AI Assistant",
      quote: "Having 24/7 support was a lifesaver during those 3 AM worries. The AI always knew when to escalate to human support.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wellness Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need for a supported, healthy pregnancy and postpartum journey - 
            all in one intelligent platform.
          </p>
          <Button asChild size="lg" className="wellness-gradient text-white">
            <Link to="/signup">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">
              Our foundational services that every WellNest member receives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <Card key={index} className="relative border-purple-100 hover:shadow-xl transition-all group">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {service.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 w-fit mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Support Services</h2>
            <p className="text-xl text-gray-600">
              Enhanced features to provide comprehensive care and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100">
                      <service.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-500">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How WellNest Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started with personalized maternal care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up & Onboard",
                description: "Create your account and complete our comprehensive health assessment"
              },
              {
                step: "02",
                title: "Get Your Risk Profile",
                description: "Receive your personalized risk assessment and care recommendations"
              },
              {
                step: "03",
                title: "Daily Check-ins",
                description: "Track your daily wellness with guided check-ins and monitoring"
              },
              {
                step: "04",
                title: "Continuous Support",
                description: "Access 24/7 AI assistance, community support, and professional care"
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="h-5 w-5 text-purple-300 absolute top-6 -right-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from mothers who trust WellNest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-purple-600">{testimonial.service}</p>
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
            Ready to Experience Comprehensive Care?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of mothers who trust WellNest for their wellness journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
