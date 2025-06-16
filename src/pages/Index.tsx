
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
  CheckCircle,
  Play
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-purple-600">AI-Powered Care</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Your pregnancy & postpartum wellness companion
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Track how you feel and listen to your body with personalized care, early risk detection, 
                  and 24/7 support from our AI assistant.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link to="/signup">Get started</Link>
                  </Button>
                  <Button variant="ghost" asChild className="text-purple-600">
                    <Link to="/about" className="flex items-center">
                      <Play className="mr-2 h-4 w-4" />
                      Watch demo
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-x-6 text-sm text-gray-600">
                  <div className="flex items-center gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <div className="relative">
                <img
                  src="/lovable-uploads/64680758-6fae-4750-9601-8d2dc4397edb.png"
                  alt="WellNest Platform Preview"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive care for every stage
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From conception to postpartum recovery, WellNest provides the tools and support you need.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Shield className="h-5 w-5 flex-none text-purple-600" />
                  Early Risk Detection
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">AI-powered assessment to identify pregnancy and postpartum risks early</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Brain className="h-5 w-5 flex-none text-purple-600" />
                  Mental Health Monitoring
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Track mood, anxiety, and depression with personalized insights</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <MessageCircle className="h-5 w-5 flex-none text-purple-600" />
                  24/7 AI Assistant
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Get instant answers to your wellness questions anytime</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-purple-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by mothers everywhere
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>"WellNest helped me recognize early signs of postpartum anxiety. The daily check-ins and AI assistant made me feel supported throughout my journey."</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <div className="flex-auto">
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-gray-600">New Mom</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your wellness journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-200">
              Join thousands of women who trust WellNest for their pregnancy and postpartum care.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild className="bg-white text-purple-600 hover:bg-gray-50">
                <Link to="/signup">Get started</Link>
              </Button>
              <Button variant="ghost" asChild className="text-white hover:bg-purple-700">
                <Link to="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
