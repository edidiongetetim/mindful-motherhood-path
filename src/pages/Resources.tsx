import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  Clock,
  Heart,
  Brain,
  Baby,
  Users,
  AlertTriangle,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Resources", icon: BookOpen },
    { id: "pregnancy", label: "Pregnancy", icon: Baby },
    { id: "mental-health", label: "Mental Health", icon: Brain },
    { id: "postpartum", label: "Postpartum", icon: Heart },
    { id: "community", label: "Community", icon: Users },
    { id: "emergency", label: "Emergency", icon: AlertTriangle }
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Pregnancy Risk Factors: A Comprehensive Guide",
      description: "Learn about common and uncommon pregnancy risk factors and how to manage them effectively.",
      category: "pregnancy",
      type: "article",
      readTime: "8 min read",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      featured: true,
      tags: ["Risk Assessment", "Prevention", "Health Monitoring"]
    },
    {
      id: 2,
      title: "Recognizing Signs of Postpartum Depression",
      description: "A detailed guide on identifying symptoms of postpartum depression and when to seek help.",
      category: "mental-health",
      type: "article",
      readTime: "6 min read",
      author: "Maya Patel, LCSW",
      date: "2024-01-12",
      featured: true,
      tags: ["Mental Health", "Depression", "Support"]
    },
    {
      id: 3,
      title: "Creating Your Postpartum Recovery Plan",
      description: "Essential steps for physical and emotional recovery after childbirth.",
      category: "postpartum",
      type: "article",
      readTime: "10 min read",
      author: "Dr. Emily Chen",
      date: "2024-01-10",
      featured: false,
      tags: ["Recovery", "Planning", "Self-Care"]
    },
    {
      id: 4,
      title: "Building Your Support Network During Pregnancy",
      description: "How to create a strong support system for your pregnancy journey.",
      category: "community",
      type: "article",
      readTime: "7 min read",
      author: "Jessica Williams",
      date: "2024-01-08",
      featured: false,
      tags: ["Support", "Community", "Relationships"]
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Breathing Techniques for Labor and Anxiety",
      description: "Learn effective breathing exercises to manage pain and anxiety.",
      category: "pregnancy",
      type: "video",
      duration: "12 min",
      thumbnail: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 2,
      title: "Postpartum Exercise: Safe Return to Fitness",
      description: "Guidelines for safely returning to exercise after childbirth.",
      category: "postpartum",
      type: "video",
      duration: "18 min",
      thumbnail: "/api/placeholder/300/200",
      featured: false
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Complete Pregnancy Nutrition Guide",
      description: "Comprehensive guide to eating well during pregnancy",
      category: "pregnancy",
      type: "guide",
      pages: "24 pages",
      downloadable: true,
      featured: true
    },
    {
      id: 2,
      title: "Mental Health Crisis Action Plan",
      description: "Step-by-step guide for mental health emergencies",
      category: "emergency",
      type: "guide",
      pages: "8 pages",
      downloadable: true,
      featured: true
    }
  ];

  const emergencyResources = [
    {
      title: "Crisis Hotlines",
      resources: [
        { name: "National Suicide Prevention Lifeline", contact: "988", available: "24/7" },
        { name: "Crisis Text Line", contact: "Text HOME to 741741", available: "24/7" },
        { name: "Postpartum Support International", contact: "1-800-944-4773", available: "24/7" }
      ]
    },
    {
      title: "Emergency Contacts",
      resources: [
        { name: "Medical Emergency", contact: "911", available: "24/7" },
        { name: "Mental Health Crisis Mobile Team", contact: "211", available: "24/7" },
        { name: "Domestic Violence Hotline", contact: "1-800-799-7233", available: "24/7" }
      ]
    }
  ];

  const filteredContent = [...articles, ...videos, ...guides].filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Wellness <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Evidence-based articles, guides, and tools to support your pregnancy and postpartum journey
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-purple-200 focus:border-purple-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid grid-cols-6 w-full">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-1">
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {/* Featured Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...articles, ...videos, ...guides].filter(item => item.featured).map((item) => (
                    <Card key={`${item.type}-${item.id}`} className="hover:shadow-lg transition-shadow border-purple-100">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            {item.type === 'article' && <FileText className="h-3 w-3 mr-1" />}
                            {item.type === 'video' && <Video className="h-3 w-3 mr-1" />}
                            {item.type === 'guide' && <BookOpen className="h-3 w-3 mr-1" />}
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.readTime || item.duration || item.pages}
                          </div>
                          {item.author && <span>By {item.author}</span>}
                        </div>
                        <Button className="w-full" variant="outline">
                          {item.type === 'guide' && item.downloadable ? 'Download' : 'Read More'}
                          {item.type === 'guide' && item.downloadable && <Download className="h-4 w-4 ml-2" />}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">All Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredContent.map((item) => (
                    <Card key={`${item.type}-${item.id}`} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">
                            {item.type === 'article' && <FileText className="h-3 w-3 mr-1" />}
                            {item.type === 'video' && <Video className="h-3 w-3 mr-1" />}
                            {item.type === 'guide' && <BookOpen className="h-3 w-3 mr-1" />}
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                          <Badge variant="secondary" className="capitalize">
                            {item.category.replace('-', ' ')}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.readTime || item.duration || item.pages}
                          </div>
                          {item.author && <span>By {item.author}</span>}
                        </div>
                        {item.tags && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <Button className="w-full" variant="outline">
                          {item.type === 'guide' && item.downloadable ? 'Download' : 'Read More'}
                          {item.type === 'guide' && item.downloadable && <Download className="h-4 w-4 ml-2" />}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="emergency">
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h2 className="text-2xl font-bold text-red-900">Emergency Resources</h2>
                  </div>
                  <p className="text-red-800 mb-6">
                    If you're experiencing a medical or mental health emergency, please reach out for immediate help.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {emergencyResources.map((section, index) => (
                      <Card key={index} className="border-red-200">
                        <CardHeader>
                          <CardTitle className="text-red-900">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {section.resources.map((resource, resourceIndex) => (
                              <div key={resourceIndex} className="p-3 bg-white rounded border">
                                <div className="font-semibold text-gray-900">{resource.name}</div>
                                <div className="text-lg font-bold text-red-600">{resource.contact}</div>
                                <div className="text-sm text-gray-500">{resource.available}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Other category tabs would filter content by category */}
            {categories.filter(cat => cat.id !== 'all' && cat.id !== 'emergency').map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...articles, ...videos, ...guides]
                    .filter(item => item.category === category.id)
                    .map((item) => (
                      <Card key={`${item.type}-${item.id}`} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">
                              {item.type === 'article' && <FileText className="h-3 w-3 mr-1" />}
                              {item.type === 'video' && <Video className="h-3 w-3 mr-1" />}
                              {item.type === 'guide' && <BookOpen className="h-3 w-3 mr-1" />}
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </Badge>
                            {item.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.readTime || item.duration || item.pages}
                            </div>
                            {item.author && <span>By {item.author}</span>}
                          </div>
                          <Button className="w-full" variant="outline">
                            {item.type === 'guide' && item.downloadable ? 'Download' : 'Read More'}
                            {item.type === 'guide' && item.downloadable && <Download className="h-4 w-4 ml-2" />}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Resources;
