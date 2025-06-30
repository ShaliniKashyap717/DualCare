
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Users } from 'lucide-react';
import TeenNavbar from './TeenNavbar';

interface Message {
  id: number;
  author: string;
  content: string;
  time: string;
  color: string;
}

const TeenChatroom: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: 'Anonymous_1',
      content: 'Hey everyone! How is everyone doing today?',
      time: '10:30 AM',
      color: 'bg-pink-500'
    },
    {
      id: 2,
      author: 'Anonymous_2',
      content: 'I\'m feeling a bit stressed about my exams. Anyone else?',
      time: '10:32 AM',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      author: 'Anonymous_3',
      content: 'You got this! I found that taking breaks really helps. What subjects are you studying?',
      time: '10:35 AM',
      color: 'bg-cyan-500'
    }
  ]);
  const [onlineUsers] = useState(12);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        author: 'You',
        content: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: 'bg-yellow-500'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TeenNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Anonymous Chatroom
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            A safe space to talk about anything without judgment
          </p>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Users className="w-5 h-5" />
            <span className="font-medium">{onlineUsers} users online</span>
          </div>
        </div>

        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Teen Support Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.author === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.author === 'You' 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      {msg.author !== 'You' && (
                        <span className={`w-3 h-3 ${msg.color} rounded-full`}></span>
                      )}
                      <span className="text-xs font-medium opacity-75">
                        {msg.author}
                      </span>
                      <span className="text-xs opacity-50">{msg.time}</span>
                    </div>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message... (You'll appear as anonymous)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border-gray-300 focus:border-pink-500"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Remember: Be kind, respectful, and supportive. This is a safe space for everyone.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chat Guidelines */}
        <Card className="mt-6 border-0 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-gray-800">Chat Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Be respectful and kind to everyone</li>
              <li>• No sharing of personal information</li>
              <li>• Support each other without judgment</li>
              <li>• If you're in crisis, please reach out to a trusted adult or helpline</li>
              <li>• Report inappropriate behavior to moderators</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeenChatroom;
