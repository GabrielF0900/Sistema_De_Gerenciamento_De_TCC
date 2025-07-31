import { useState } from 'react';
import Card from '@/components/ui/card/Card';
import Button from '@/components/ui/Button';

import { RiRobot2Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function AssistantTCC() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular resposta da IA (aqui você integraria com sua API real)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Olá! Como posso ajudar você hoje? Digite sua mensagem abaixo para começar nossa conversa.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex bg-secondary min-h-screen w-full p-4 ">
      <div className="flex justify-center items-center w-full h-full min-h-[calc(100vh-2rem)]">
        <Card className="max-w-5xl w-full h-[600px] bg-neutral flex flex-col shadow-2xl">
          {/* Header do Chat */}
          <div className="flex items-center gap-3 p-6 border-b border-gray-200">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-black bg-secondary rounded-lg flex items-center justify-center">
                <BsStars size={25} className='text-primary' />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary">Assistente IA</h2>
              <p className="text-sm text-gray-600">Powered by OpenAI</p>
            </div>
          </div>

          {/* Área da Conversa */}
          <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <RiRobot2Line size={25} className='text-secondary' />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Olá! Como posso ajudar você hoje?
                </h3>
                <p className="text-gray-600 max-w-md">
                  Digite sua mensagem abaixo para começar nossa conversa.
                </p>
              </div>
            ) : (
              <div className="w-full max-w-4xl overflow-hidden px-2">
                <div className="space-y-4">
                  {messages.slice(-2).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isUser
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Input de Mensagem */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                variant="primary"
                className="px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AssistantTCC;
