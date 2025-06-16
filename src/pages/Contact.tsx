
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
      urgent: false
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "support@wellnest.com",
      details: "Response within 24 hours",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "1-800-WELLNEST",
      details: "Mon-Fri, 8AM-6PM EST",
      color: "text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our AI assistant",
      details: "Available 24/7",
      color: "text-purple-600"
    },
    {
      icon: AlertTriangle,
      title: "Crisis Support",
      description: "Emergency mental health",
      details: "Call 988 or text HOME to 741741",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here to support you every step of the way. Reach out with questions, 
            concerns, or just to connect with our care team.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                <CardContent className="p-6 text-center">
                  <div className={`p-3 rounded-full bg-gray-100 inline-flex mb-4`}>
                    <method.icon className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-800 font-medium mb-1">{method.description}</p>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="medical">Medical Question</SelectItem>
                        <SelectItem value="billing">Billing & Account</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1"
                      placeholder="Please describe your question or concern in detail..."
                    />
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-800">Medical Emergency Notice</p>
                        <p className="text-yellow-700">
                          If you're experiencing a medical emergency, please call 911 or visit 
                          your nearest emergency room immediately. This form is not monitored 24/7.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full wellness-gradient text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 3:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-gray-600">
                      AI Assistant available 24/7 for immediate support
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    WellNest Headquarters<br />
                    123 Wellness Way<br />
                    Health City, HC 12345<br />
                    United States
                  </p>
                  <p className="text-sm text-gray-500">
                    Virtual consultations available worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Need Immediate Support?</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our AI assistant is available 24/7 to provide immediate guidance and support.
                  </p>
                  <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                    Chat with AI Assistant
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Crisis Resources
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-red-800">National Suicide Prevention Lifeline</p>
                      <p className="text-red-700">Call or text 988</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-800">Crisis Text Line</p>
                      <p className="text-red-700">Text HOME to 741741</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-800">Postpartum Support International</p>
                      <p className="text-red-700">1-800-944-4773</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
