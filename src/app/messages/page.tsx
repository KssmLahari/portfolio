'use client';
import { useState, useEffect } from 'react';
import { Mail, User, Calendar, MessageSquare, ArrowLeft, Trash2, Eye } from 'lucide-react';
import { MotionDiv } from '@/components/MotionDiv';
import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const MessagesPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulated messages for demo - replace with real data from your backend
  useEffect(() => {
    const demoMessages: ContactMessage[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Project Collaboration Opportunity',
        message: 'Hi Lahari, I came across your portfolio and was impressed by your AI/ML work. I have a project that could benefit from your expertise in RAG pipelines and MLOps. Would you be interested in discussing a potential collaboration?',
        timestamp: '2024-01-15T10:30:00Z',
        read: false
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah.j@techcorp.com',
        subject: 'Full-Stack Developer Position',
        message: 'Hello! We\'re looking for a Full-Stack AI Engineer at TechCorp. Your experience with React, Python, and AI systems would be a perfect fit. Are you currently open to new opportunities?',
        timestamp: '2024-01-14T15:45:00Z',
        read: true
      },
      {
        id: '3',
        name: 'Mike Chen',
        email: 'mike.chen@startup.io',
        subject: 'Consultation Request',
        message: 'I\'m building a startup focused on AI-powered e-commerce. Your SmartBuy project caught my attention. Would you be available for a consultation call to discuss implementation strategies?',
        timestamp: '2024-01-13T09:20:00Z',
        read: true
      }
    ];

    setMessages(demoMessages);
    setLoading(false);
  }, []);

  const markAsRead = (messageId: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  if (loading) {
    return (
      <SiteChrome>
        <div className="flex min-h-[50vh] items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-purple-600 border-t-transparent dark:border-cyan-500 dark:border-t-transparent"></div>
            <p className="text-slate-600 dark:text-slate-300">Loading messages...</p>
          </div>
        </div>
      </SiteChrome>
    );
  }

  return (
    <SiteChrome>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="rounded-lg border border-slate-200/80 bg-white/90 p-2 transition-colors hover:bg-white dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <ArrowLeft className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Messages</h1>
                <p className="text-slate-600 dark:text-slate-400">Contact form submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {unreadCount} unread
              </span>
            </div>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white/90 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/95">
              <div className="border-b border-slate-200 p-4 dark:border-slate-700">
                <h2 className="font-semibold text-slate-900 dark:text-white">Inbox</h2>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-6 text-center text-slate-500 dark:text-slate-400">
                    <Mail className="mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        markAsRead(message.id);
                      }}
                      className={`cursor-pointer border-b border-slate-100 p-4 transition-colors hover:bg-purple-50 dark:border-slate-700 dark:hover:bg-slate-700/50 ${
                        selectedMessage?.id === message.id ? 'bg-purple-100 dark:bg-slate-700/80' : ''
                      } ${!message.read ? 'bg-blue-50 dark:bg-slate-800/80' : ''}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="truncate font-medium text-slate-900 dark:text-slate-100">
                              {message.name}
                            </h3>
                            {!message.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                            {message.subject}
                          </p>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                            {formatDate(message.timestamp)}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMessage(message.id);
                          }}
                          className="p-1 text-slate-400 transition-colors hover:text-red-500 dark:text-slate-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </MotionDiv>

          {/* Message Detail */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {selectedMessage ? (
              <div className="rounded-xl border border-slate-200/90 bg-white/90 p-6 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/95">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedMessage.subject}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedMessage.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {selectedMessage.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(selectedMessage.timestamp)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                      className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/60">
                  <div className="mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">Message</span>
                  </div>
                  <p className="whitespace-pre-wrap text-slate-800 dark:text-slate-200">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Reply
                  </a>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-200/90 bg-white/90 p-12 text-center shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/95">
                <Eye className="mx-auto mb-4 h-16 w-16 text-slate-300 dark:text-slate-600" />
                <h3 className="mb-2 text-xl font-medium text-slate-700 dark:text-slate-300">
                  Select a message
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Choose a message from the inbox to view its details
                </p>
              </div>
            )}
          </MotionDiv>
        </div>
      </div>
    </div>
    </SiteChrome>
  );
};

export default MessagesPage; 