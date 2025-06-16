
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: "",
    age: "",
    gestationStage: "",
    previousPregnancies: "",
    medicalHistory: [],
    goals: [],
    consent: false
  });
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    updateUser({ 
      onboardingCompleted: true, 
      profile: formData 
    });
    toast.success("Welcome to WellNest! Your profile has been set up.");
    navigate("/dashboard");
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to WellNest!</h2>
              <p className="text-gray-600">Let's personalize your experience. What describes you best?</p>
            </div>
            <RadioGroup 
              value={formData.userType} 
              onValueChange={(value) => updateFormData("userType", value)}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-purple-50 cursor-pointer">
                  <RadioGroupItem value="pregnant" id="pregnant" />
                  <Label htmlFor="pregnant" className="cursor-pointer flex-1">
                    <div>
                      <div className="font-medium">I'm Pregnant</div>
                      <div className="text-sm text-gray-500">Currently expecting</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-purple-50 cursor-pointer">
                  <RadioGroupItem value="postpartum" id="postpartum" />
                  <Label htmlFor="postpartum" className="cursor-pointer flex-1">
                    <div>
                      <div className="font-medium">I'm Postpartum</div>
                      <div className="text-sm text-gray-500">Recently gave birth</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-purple-50 cursor-pointer">
                  <RadioGroupItem value="trying" id="trying" />
                  <Label htmlFor="trying" className="cursor-pointer flex-1">
                    <div>
                      <div className="font-medium">Trying to Conceive</div>
                      <div className="text-sm text-gray-500">Planning for pregnancy</div>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Information</h2>
              <p className="text-gray-600">Help us understand your current situation</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => updateFormData("age", e.target.value)}
                  className="mt-1"
                />
              </div>
              {formData.userType === "pregnant" && (
                <div>
                  <Label htmlFor="gestation">Current Gestation Stage (weeks)</Label>
                  <Input
                    id="gestation"
                    type="number"
                    placeholder="e.g., 20"
                    value={formData.gestationStage}
                    onChange={(e) => updateFormData("gestationStage", e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}
              <div>
                <Label htmlFor="previousPregnancies">Number of Previous Pregnancies</Label>
                <Input
                  id="previousPregnancies"
                  type="number"
                  placeholder="0"
                  value={formData.previousPregnancies}
                  onChange={(e) => updateFormData("previousPregnancies", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical History</h2>
              <p className="text-gray-600">Select any conditions that apply to you</p>
            </div>
            <div className="space-y-3">
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
                  />
                  <Label htmlFor={condition} className="cursor-pointer">{condition}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Goals</h2>
              <p className="text-gray-600">What do you need most from WellNest?</p>
            </div>
            <div className="space-y-3">
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
                  />
                  <Label htmlFor={goal} className="cursor-pointer capitalize">{goal}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Consent</h2>
              <p className="text-gray-600">Your data privacy and security are our top priority</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">HIPAA/PHIPA Compliance</h3>
              <p className="text-sm text-gray-600 mb-4">
                WellNest is fully compliant with HIPAA and PHIPA regulations. Your health information 
                is encrypted, secure, and will never be shared without your explicit consent.
              </p>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => updateFormData("consent", checked)}
                />
                <Label htmlFor="consent" className="text-sm cursor-pointer">
                  I consent to WellNest collecting and processing my health data as described in the 
                  Privacy Policy. I understand that I can withdraw this consent at any time.
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              WellNest
            </span>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full h-2" />
            <p className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</p>
          </div>
        </div>

        <Card className="border-purple-100 shadow-xl">
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !formData.userType) ||
                  (currentStep === 2 && !formData.age) ||
                  (currentStep === 5 && !formData.consent)
                }
                className="wellness-gradient text-white flex items-center"
              >
                {currentStep === totalSteps ? "Complete Setup" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
