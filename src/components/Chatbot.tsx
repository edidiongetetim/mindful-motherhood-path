
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your WellNest AI assistant. I'm here to help with pregnancy and postpartum wellness questions. How can I support you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('pregnancy') || input.includes('pregnant')) {
      return "I can help you with pregnancy-related questions! Are you looking for information about symptoms, nutrition, exercise, or risk assessment?";
    } else if (input.includes('postpartum') || input.includes('depression')) {
      return "Postpartum wellness is so important. I can provide information about postpartum depression, recovery tips, and when to seek professional help. What specific area would you like to discuss?";
    } else if (input.includes('risk') || input.includes('assessment')) {
      return "Our platform offers personalized risk assessments based on your health profile. Would you like me to guide you through our screening questionnaire?";
    } else if (input.includes('emergency') || input.includes('urgent')) {
      return "If you're experiencing a medical emergency, please call 911 or your local emergency services immediately. For non-emergency concerns, I can help guide you to appropriate resources.";
    } else {
      return "Thanks for your question! I'm here to help with pregnancy and postpartum wellness. You can ask me about symptoms, risk factors, mental health resources, or general wellness tips.";
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full wellness-gradient text-white shadow-lg hover:shadow-xl transition-all z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 h-96 flex flex-col shadow-xl z-50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 wellness-gradient text-white">
        <CardTitle className="text-sm">WellNest Assistant</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                }`}
              >
                <div className={`p-1.5 rounded-full ${
                  message.isBot ? 'bg-purple-100' : 'bg-mint-100'
                }`}>
                  {message.isBot ? (
                    <Bot className="h-3 w-3 text-purple-600" />
                  ) : (
                    <User className="h-3 w-3 text-green-600" />
                  )}
                </div>
                <div
                  className={`p-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="text-sm"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="wellness-gradient text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
