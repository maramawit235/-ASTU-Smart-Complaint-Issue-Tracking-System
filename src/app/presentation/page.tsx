"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft, PresentationIcon, Zap, ShieldCheck, Sparkles, LayoutDashboard, MessageCircle, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Slide {
    id: number;
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    bgComponent?: React.ReactNode;
}

export default function PresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const slides: Slide[] = [
        {
            id: 0,
            title: "ASTU Smart Complaint Platform",
            subtitle: "Reimagining Campus Issue Tracking",
            content: (
                <div className="flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <div className="h-24 w-24 rounded-3xl bg-primary/10 flex items-center justify-center mb-4 shadow-inner ring-1 ring-primary/20">
                        <PresentationIcon className="h-12 w-12 text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                        Future-Ready <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Issue Resolution</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mt-4">
                        A centralized, AI-enhanced platform built for Adama Science and Technology University to streamline student complaints and facility management.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <Badge variant="secondary" className="px-4 py-2 text-sm">Next.js 14</Badge>
                        <Badge variant="secondary" className="px-4 py-2 text-sm">Tailwind CSS</Badge>
                        <Badge variant="secondary" className="px-4 py-2 text-sm">Shadcn UI</Badge>
                    </div>
                </div>
            ),
            bgComponent: (
                <>
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
                </>
            )
        },
        {
            id: 1,
            title: "The Core Problem",
            content: (
                <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-5xl animate-in fade-in slide-in-from-right-10 duration-500">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">Why do we need this?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Traditional complaint handling at universities relies on paper forms, scattered emails, and physical visits. This leads to:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Lost or misplaced complaints causing student frustration",
                                "Zero visibility into ticket status or resolution time",
                                "Inefficient routing to the wrong departments",
                                "No centralized data for administrators to spot campus-wide trends"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-destructive/10 p-1 rounded-full shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-destructive" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <Card className="border-slate-200/60 shadow-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-6 transform rotate-2">
                            <div className="space-y-4 opacity-50 grayscale blur-[1px]">
                                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700 rounded" />
                                <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded" />
                                <div className="h-24 w-full bg-slate-200 dark:bg-slate-700 rounded mt-4" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Badge variant="destructive" className="text-lg px-4 py-1 shadow-lg transform -rotate-12">System Inefficient</Badge>
                            </div>
                        </Card>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "The Solution Highlights",
            content: (
                <div className="w-full max-w-5xl animate-in fade-in zoom-in-95 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <CardContent className="p-8 space-y-4 text-center flex flex-col items-center">
                                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-2">
                                    <LayoutDashboard className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold">Role-Based Portals</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Tailored dashboard experiences for Students, Department Staff, and System Administrators.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform duration-300 transform md:-translate-y-4">
                            <CardContent className="p-8 space-y-4 text-center flex flex-col items-center">
                                <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center mb-2">
                                    <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold">Smart Chatbot</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Always-on AI assistant helping students track status and get immediate automated support.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                            <CardContent className="p-8 space-y-4 text-center flex flex-col items-center">
                                <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-2">
                                    <ShieldCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Comprehensive insights into resolution times, category trends, and platform health.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ),
            bgComponent: (
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0.4))] -z-10 bg-[length:30px_30px]" />
            )
        },
        {
            id: 3,
            title: "Design System & Polish",
            content: (
                <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in scale-95 duration-500 w-full max-w-4xl">
                    <h2 className="text-4xl font-bold">Premium Feel. Enterprise Ready.</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We focused on creating an interface that feels fast, modern, and delightful to use.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-8">
                        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <Sparkles className="h-8 w-8 text-amber-500 mb-4" />
                            <h4 className="font-semibold">Micro-animations</h4>
                            <p className="text-xs text-muted-foreground mt-2">Smooth transitions</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <Zap className="h-8 w-8 text-blue-500 mb-4" />
                            <h4 className="font-semibold">Fast Performance</h4>
                            <p className="text-xs text-muted-foreground mt-2">Next.js App Router</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex gap-1 mb-4">
                                <div className="h-8 w-4 rounded-full bg-slate-900 dark:bg-slate-100"></div>
                                <div className="h-8 w-4 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                            </div>
                            <h4 className="font-semibold">Dark Mode</h4>
                            <p className="text-xs text-muted-foreground mt-2">Native support</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <MessageCircle className="h-8 w-8 text-primary mb-4" />
                            <h4 className="font-semibold">Bot Integration</h4>
                            <p className="text-xs text-muted-foreground mt-2">Always available</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "End of Presentation",
            content: (
                <div className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <GraduationCapIcon className="h-32 w-32 text-primary relative z-10 drop-shadow-2xl" />
                    </div>
                    <h1 className="text-5xl font-bold">Ready to Launch</h1>
                    <p className="text-xl text-muted-foreground">Thank you for exploring the ASTU Smart Complaint System.</p>
                    <div className="pt-8">
                        <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl hover:scale-105 transition-transform">
                            <Link href="/">Back to Login</Link>
                        </Button>
                    </div>
                </div>
            ),
            bgComponent: (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
            )
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative overflow-hidden text-slate-900 dark:text-slate-50">
            {/* Dynamic Background */}
            {slides[currentSlide].bgComponent}

            {/* Header bar */}
            <header className="w-full p-6 flex justify-between items-center relative z-20">
                <Link href="/" className="font-bold flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                    <GraduationCapIcon className="h-6 w-6" />
                    <span>ASTU Tracker</span>
                </Link>
                <div className="flex items-center gap-2">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-slate-300 dark:bg-slate-700"
                                }`}
                        />
                    ))}
                </div>
            </header>

            {/* Main Slide Content Area */}
            <main className="flex-1 flex items-center justify-center p-6 md:p-12 relative z-10 w-full max-w-7xl mx-auto overflow-hidden">
                {/* We use a key to force re-render/animation on slide change */}
                <div
                    key={currentSlide}
                    className="w-full h-full flex items-center justify-center"
                >
                    {slides[currentSlide].content}
                </div>
            </main>

            {/* Navigation Controls */}
            <footer className="p-6 md:p-8 flex justify-between items-center relative z-20">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="rounded-full h-14 w-14 p-0 shadow-md backdrop-blur-md bg-white/80 dark:bg-slate-900/80"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>

                <div className="text-sm font-medium text-slate-400">
                    Slide {currentSlide + 1} of {slides.length}
                </div>

                <Button
                    size="lg"
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="rounded-full h-14 w-14 p-0 shadow-lg"
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </footer>
        </div>
    );
}

// Inline GraduationCap wrapper to avoid missing import issues easily
function GraduationCapIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.42 10.922a2 2 0 0 1-.01 2.83M22 10v6" />
            <path d="M12 4l9 5-9 5-9-5 9-5Z" />
            <path d="M5 12v6s3 2 7 2 7-2 7-2v-6" />
        </svg>
    );
}
