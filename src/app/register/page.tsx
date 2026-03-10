"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GraduationCap, UserCircle, Building2, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Role = "student" | "department" | null;

export default function RegisterPage() {
    const router = useRouter();
    const [role, setRole] = useState<Role>(null);
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [password, setPassword] = useState("");

    const calculateStrength = (pass: string) => {
        let s = 0;
        if (pass.length > 6) s++;
        if (pass.length > 10) s++;
        if (/[A-Z]/.test(pass)) s++;
        if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) s++;
        return s;
    };

    const strength = calculateStrength(password);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (!role) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            // Redirect to login after success
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-1 items-center justify-center p-4 md:p-8 bg-slate-50 relative overflow-hidden min-h-[calc(100vh-4rem)]">
                <Card className="w-full max-w-md shadow-2xl border-slate-200/60 bg-white/95 backdrop-blur-md relative z-10 text-center p-8">
                    <div className="flex justify-center mb-6">
                        <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center animate-bounce">
                            <CheckCircle2 className="h-12 w-12 text-green-500" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">Registration Successful!</CardTitle>
                    <CardDescription className="text-slate-500 mb-6">
                        Your account has been created. Redirecting you to login...
                    </CardDescription>
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/login">Go to Login Now</Link>
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-1 items-center justify-center p-4 md:p-8 bg-slate-50 relative overflow-hidden min-h-[calc(100vh-4rem)]">
            {/* Soft Background Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />

            <Card className="w-full max-w-lg shadow-2xl border-slate-200/60 bg-white/95 backdrop-blur-md relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                            <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">Create Account</CardTitle>
                    <CardDescription className="text-slate-500">
                        Join the ASTU Smart Complaint System
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-6">
                        {step === 1 ? (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-3">
                                    <Label className="text-base font-semibold">I am a...</Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button
                                            type="button"
                                            variant={role === "student" ? "default" : "outline"}
                                            className={`h-32 flex-col gap-3 transition-all duration-300 ${role === "student" ? "shadow-lg scale-[1.02] ring-2 ring-primary/20" : "hover:-translate-y-1 hover:shadow-md"}`}
                                            onClick={() => setRole("student")}
                                        >
                                            <UserCircle className="h-8 w-8" />
                                            <div className="flex flex-col items-center">
                                                <span className="font-bold">Student</span>
                                                <span className="text-[10px] opacity-80">Report campus issues</span>
                                            </div>
                                        </Button>
                                        <Button
                                            type="button"
                                            variant={role === "department" ? "default" : "outline"}
                                            className={`h-32 flex-col gap-3 transition-all duration-300 ${role === "department" ? "shadow-lg scale-[1.02] ring-2 ring-primary/20" : "hover:-translate-y-1 hover:shadow-md"}`}
                                            onClick={() => setRole("department")}
                                        >
                                            <Building2 className="h-8 w-8" />
                                            <div className="flex flex-col items-center">
                                                <span className="font-bold">Staff</span>
                                                <span className="text-[10px] opacity-80">Manage department issues</span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    className="w-full py-6 group"
                                    disabled={!role}
                                    onClick={() => setStep(2)}
                                >
                                    Continue to Details
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">University Email</Label>
                                    <Input id="email" type="email" placeholder="john.doe@astu.edu.et" required />
                                </div>

                                {role === "student" ? (
                                    <div className="space-y-2">
                                        <Label htmlFor="studentId">Student ID</Label>
                                        <Input id="studentId" placeholder="UGR/1234/12" required />
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Label htmlFor="dept">Department</Label>
                                        <Input id="dept" placeholder="Computer Science & Engineering" required />
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        required
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />

                                    {password && (
                                        <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-300">
                                            <div className="flex gap-1 h-1">
                                                {[1, 2, 3, 4].map((level) => (
                                                    <div
                                                        key={level}
                                                        className={`h-full flex-1 rounded-full transition-all duration-500 ${strength >= level
                                                            ? strength === 1 ? "bg-red-500"
                                                                : strength === 2 ? "bg-orange-500"
                                                                    : strength === 3 ? "bg-yellow-500"
                                                                        : "bg-green-500"
                                                            : "bg-slate-200"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center text-[10px] font-medium uppercase tracking-wider">
                                                <span className={
                                                    strength === 1 ? "text-red-500"
                                                        : strength === 2 ? "text-orange-500"
                                                            : strength === 3 ? "text-yellow-500"
                                                                : "text-green-600"
                                                }>
                                                    {strength === 1 ? "Weak" : strength === 2 ? "Fair" : strength === 3 ? "Good" : "Strong"}
                                                </span>
                                                <span className="text-slate-400">Security Strength</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button variant="outline" type="button" className="flex-1" onClick={() => setStep(1)}>
                                        Back
                                    </Button>
                                    <Button type="submit" className="flex-[2] bg-primary text-white" disabled={isLoading}>
                                        {isLoading ? "Creating Account..." : "Complete Registration"}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col items-center border-t p-6 bg-slate-50/50 rounded-b-lg">
                    <p className="text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
