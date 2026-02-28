"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Mock AI Response Logic
        setTimeout(() => {
            let aiResponse = "I'm sorry, I don't understand. Can you rephrase?";
            const lowerInput = userMsg.content.toLowerCase();

            if (lowerInput.includes("status") || lowerInput.includes("track")) {
                aiResponse = "You can track your complaint status directly in the Dashboard under 'My Complaints'.";
            } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
                aiResponse = "I can assist you with understanding status updates, finding departments, or resetting your password.";
            } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
                aiResponse = "Hello! 👋 Welcome to ASTU. How can I assist you with your requests or issues today?";
            }

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: aiResponse,
            };

            setMessages((prev) => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button Backdrop/Trigger */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {isOpen && (
                    <Card className="mb-4 w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-slate-200/60 overflow-hidden animate-in slide-in-from-bottom-5 fade-in zoom-in-95 duration-200">
                        <CardHeader className="bg-primary text-primary-foreground p-4 py-3 flex flex-row items-center justify-between rounded-t-xl space-y-0">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <CardTitle className="text-md font-medium">ASTU Assistant</CardTitle>
                                    <p className="text-[10px] text-primary-foreground/80 leading-none">Online & ready to help</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-primary-foreground hover:bg-primary/90 hover:text-white rounded-full transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-80 pt-8">
                                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 shadow-inner">
                                        <Bot className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-700">How can I help you today?</h3>
                                    <p className="text-xs text-slate-500 max-w-[200px]">Ask me a question or try one of the suggestions below.</p>
                                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                                        <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors py-1.5" onClick={() => setInputValue("Check my status")}>Track status</Badge>
                                        <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors py-1.5" onClick={() => setInputValue("I need help")}>Get Help</Badge>
                                    </div>
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                            }`}
                                    >
                                        <Avatar className="h-8 w-8 shadow-sm">
                                            {msg.role === "ai" ? (
                                                <>
                                                    <AvatarFallback className="bg-primary/10 text-primary">
                                                        <Bot className="h-4 w-4" />
                                                    </AvatarFallback>
                                                </>
                                            ) : (
                                                <>
                                                    <AvatarFallback className="bg-slate-200 text-slate-700">
                                                        <User className="h-4 w-4" />
                                                    </AvatarFallback>
                                                </>
                                            )}
                                        </Avatar>
                                        <div
                                            className={`px-3.5 py-2.5 rounded-2xl max-w-[80%] text-sm shadow-sm ${msg.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                                                    : "bg-white border border-slate-100 text-slate-700 rounded-tl-sm"
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))
                            )}
                            {isTyping && (
                                <div className="flex gap-3 flex-row">
                                    <Avatar className="h-8 w-8 shadow-sm">
                                        <AvatarFallback className="bg-primary/10 text-primary">
                                            <Bot className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="px-4 py-3 rounded-2xl bg-white border border-slate-100 text-slate-800 rounded-tl-sm shadow-sm flex items-center gap-1.5 w-fit">
                                        <span className="h-1.5 w-1.5 bg-slate-400/70 rounded-full animate-bounce"></span>
                                        <span className="h-1.5 w-1.5 bg-slate-400/70 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="h-1.5 w-1.5 bg-slate-400/70 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </CardContent>
                        <CardFooter className="p-3 bg-white border-t border-slate-100">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex w-full items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full pr-1 pl-4 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/30 transition-all"
                            >
                                <input
                                    placeholder="Ask something..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent py-3 text-sm outline-none text-slate-700 placeholder:text-slate-400"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="h-8 w-8 rounded-full shrink-0 shadow-sm bg-primary hover:bg-primary/90 disabled:opacity-50"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                )}

                {/* Floating Toggle Button */}
                {!isOpen && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        size="icon"
                        className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 ease-out glow group"
                    >
                        <MessageCircle className="h-6 w-6 text-white group-hover:animate-pulse" />
                    </Button>
                )}
            </div>
        </>
    );
}
