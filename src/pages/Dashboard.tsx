
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Brain, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  MessageCircle,
  Users,
  BookOpen,
  Settings,
  Shield
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Dashboard = () => {
  const { user } = useAuth();

  const todayTasks = [
    { id: 1, task: "Complete daily check-in", completed: false },
    { id: 2, task: "Take prenatal vitamins", completed: true },
    { id: 3, task: "Track symptoms", completed: false },
    { id: 4, task: "Practice mindfulness", completed: true },
  ];

  const riskFactors = [
    { factor: "Blood Pressure", status: "normal", value: "120/80", color: "text-green-600" },
    { factor: "Mood Score", status: "attention", value: "6/10", color: "text-yellow-600" },
    { factor: "Sleep Quality", status: "good", value: "7.5 hrs", color: "text-green-600" },
    { factor: "Stress Level", status: "elevated", value: "High", color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Here's your wellness overview for today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <Card className="border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Wellness Score</CardTitle>
              <Heart className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">82/100</div>
              <p className="text-xs text-muted-foreground">+5 from yesterday</p>
              <Progress value={82} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
              <Shield className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Low Risk</div>
              <p className="text-xs text-muted-foreground">Last updated 2 days ago</p>
              <Button size="sm" variant="outline" className="mt-2">
                Update Assessment
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Check-in Streak</CardTitle>
              <Calendar className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">12 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Today's Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Today's Tasks
              </CardTitle>
              <CardDescription>Complete your daily wellness activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayTasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      task.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300'
                    }`}>
                      {task.completed && (
                        <CheckCircle className="w-3 h-3 text-white m-0.5" />
                      )}
                    </div>
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>
                      {task.task}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 wellness-gradient text-white">
                Complete Check-in
              </Button>
            </CardContent>
          </Card>

          {/* Risk Monitoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Health Monitoring
              </CardTitle>
              <CardDescription>Key indicators to watch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{factor.factor}</div>
                      <div className={`text-sm ${factor.color}`}>{factor.value}</div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      factor.status === 'normal' || factor.status === 'good' 
                        ? 'bg-green-100 text-green-800'
                        : factor.status === 'attention'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {factor.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Brain className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold mb-1">Mental Health Check</h3>
              <p className="text-sm text-gray-600">Quick mood assessment</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold mb-1">Community</h3>
              <p className="text-sm text-gray-600">Connect with others</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold mb-1">Resources</h3>
              <p className="text-sm text-gray-600">Educational content</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Settings className="h-8 w-8 mx-auto mb-2 text-gray-600" />
              <h3 className="font-semibold mb-1">Settings</h3>
              <p className="text-sm text-gray-600">Manage preferences</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your wellness journey over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Completed daily check-in</p>
                  <p className="text-sm text-gray-600">Today at 9:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Updated risk assessment</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Joined community discussion</p>
                  <p className="text-sm text-gray-600">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Dashboard;
