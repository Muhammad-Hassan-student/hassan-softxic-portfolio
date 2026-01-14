"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923202190049";
  const defaultMessage =
    "Hello! I visited your portfolio and would like to discuss a project.";

  const handleSend = () => {
    if (!message.trim()) return;

    setIsSending(true);

    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset after sending
    setTimeout(() => {
      setMessage("");
      setIsSending(false);
      setIsOpen(false);
    }, 1000);
  };

  const quickMessages = [
    "I need a website",
    "Mobile app project",
    "SaaS development",
    "Want to schedule a call",
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
          ✓
        </span>
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-green-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Chat with Hassan</h3>
                      <p className="text-sm opacity-90">
                        Typically replies within 1 hour
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white dark:bg-gray-900 p-4 max-h-96 overflow-y-auto">
                {/* Welcome Message */}
                <div className="mb-4">
                  <div className="inline-block bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 max-w-[80%]">
                    <p className="font-medium mb-1">👋 Hello! I'm Hassan</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      How can I help you with your project? Choose a quick
                      option or type your message below.
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Just now</p>
                </div>

                {/* Quick Messages */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">Quick options:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickMessages.map((msg, index) => (
                      <button
                        key={index}
                        onClick={() => setMessage(msg)}
                        className="px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center space-x-1 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-sm">H</span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((dot) => (
                      <motion.div
                        key={dot}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          delay: dot * 0.1,
                          duration: 0.6,
                        }}
                        className="h-2 w-2 bg-gray-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={isSending || !message.trim()}
                    className="px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSending ? (
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  By continuing, you agree to our Privacy Policy
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWhatsApp;
