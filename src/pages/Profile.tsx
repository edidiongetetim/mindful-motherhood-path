
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, Edit, Save, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    userType: user?.profile?.userType || "",
    age: user?.profile?.age || "",
    gestationStage: user?.profile?.gestationStage || "",
    previousPregnancies: user?.profile?.previousPregnancies || "",
    medicalHistory: user?.profile?.medicalHistory || [],
    goals: user?.profile?.goals || [],
  });

  const handleSave = () => {
    updateUser({ 
      name: formData.name, 
      email: formData.email,
      profile: {
        ...user?.profile,
        userType: formData.userType,
        age: formData.age,
        gestationStage: formData.gestationStage,
        previousPregnancies: formData.previousPregnancies,
        medicalHistory: formData.medicalHistory,
        goals: formData.goals,
      }
    });
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      userType: user?.profile?.userType || "",
      age: user?.profile?.age || "",
      gestationStage: user?.profile?.gestationStage || "",
      previousPregnancies: user?.profile?.previousPregnancies || "",
      medicalHistory: user?.profile?.medicalHistory || [],
      goals: user?.profile?.goals || [],
    });
    setIsEditing(false);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account and update your wellness preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your profile information and wellness preferences
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <Button variant="outline" size="sm" onClick={handleCancel}>
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                      <Button size="sm" onClick={handleSave} className="wellness-gradient text-white">
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label>User Type</Label>
                  <RadioGroup 
                    value={formData.userType} 
                    onValueChange={(value) => updateFormData("userType", value)}
                    disabled={!isEditing}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pregnant" id="pregnant-profile" disabled={!isEditing} />
                      <Label htmlFor="pregnant-profile">Pregnant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="postpartum" id="postpartum-profile" disabled={!isEditing} />
                      <Label htmlFor="postpartum-profile">Postpartum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="trying" id="trying-profile" disabled={!isEditing} />
                      <Label htmlFor="trying-profile">Trying to Conceive</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="age-profile">Age</Label>
                    <Input
                      id="age-profile"
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateFormData("age", e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  {formData.userType === "pregnant" && (
                    <div>
                      <Label htmlFor="gestation-profile">Gestation Stage (weeks)</Label>
                      <Input
                        id="gestation-profile"
                        type="number"
                        value={formData.gestationStage}
                        onChange={(e) => updateFormData("gestationStage", e.target.value)}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  )}
                  <div>
                    <Label htmlFor="previous-profile">Previous Pregnancies</Label>
                    <Input
                      id="previous-profile"
                      type="number"
                      value={formData.previousPregnancies}
                      onChange={(e) => updateFormData("previousPregnancies", e.target.value)}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label>Medical History</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      "Diabetes",
                      "High Blood Pressure",
                      "Depression/Anxiety",
                      "Thyroid Disorders",
                      "Previous Pregnancy Complications",
                      "Family History of Mental Health Issues"
                    ].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={formData.medicalHistory.includes(condition)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("medicalHistory", [...formData.medicalHistory, condition]);
                            } else {
                              updateFormData("medicalHistory", formData.medicalHistory.filter(c => c !== condition));
                            }
                          }}
                          disabled={!isEditing}
                        />
                        <Label htmlFor={condition} className={!isEditing ? "text-gray-500" : "cursor-pointer"}>
                          {condition}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Goals</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      "Early risk detection",
                      "Mental health monitoring",
                      "Peer support",
                      "Daily check-ins",
                      "Educational resources",
                      "Pregnancy tracking"
                    ].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox
                          id={goal}
                          checked={formData.goals.includes(goal)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("goals", [...formData.goals, goal]);
                            } else {
                              updateFormData("goals", formData.goals.filter(g => g !== goal));
                            }
                          }}
                          disabled={!isEditing}
                        />
                        <Label htmlFor={goal} className={!isEditing ? "text-gray-500" : "cursor-pointer"}>
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you'd like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="daily-checkins" />
                    <Label htmlFor="daily-checkins">Daily check-in reminders</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="risk-alerts" />
                    <Label htmlFor="risk-alerts">Risk assessment alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="community-updates" />
                    <Label htmlFor="community-updates">Community updates</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="educational-content" />
                    <Label htmlFor="educational-content">Educational content</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control your data privacy and sharing preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="data-sharing" />
                    <Label htmlFor="data-sharing">Allow anonymous data sharing for research</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="community-profile" />
                    <Label htmlFor="community-profile">Show profile in community</Label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                  <CardDescription>Add emergency contacts for crisis situations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                    <Input id="emergency-name" placeholder="Full Name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="emergency-phone">Phone Number</Label>
                    <Input id="emergency-phone" type="tel" placeholder="(555) 123-4567" className="mt-1" />
                  </div>
                  <Button className="wellness-gradient text-white">Save Emergency Contact</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
