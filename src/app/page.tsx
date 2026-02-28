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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserCircle, GraduationCap, Building2, ShieldCheck } from "lucide-react";

type Role = "student" | "department" | "admin" | null;

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;

    setIsLoading(true);

    // Simulate API call and redirect
    setTimeout(() => {
      if (role === "student") {
        router.push("/student-dashboard");
      } else if (role === "department") {
        router.push("/department-dashboard");
      } else if (role === "admin") {
        router.push("/admin-dashboard");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-1 items-center justify-center p-4 md:p-8 bg-slate-50 relative overflow-hidden min-h-[calc(100vh-4rem)]">
      {/* Soft Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />

      <Card className="w-full max-w-md shadow-2xl border-slate-200/60 bg-white/95 backdrop-blur-md relative z-10 animate-in fade-in zoom-in-95 duration-700">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">ASTU Issue Tracker</CardTitle>
          <CardDescription className="text-slate-500">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label>Select Role</Label>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  type="button"
                  variant={role === "student" ? "default" : "outline"}
                  className={`w-full flex-col h-auto py-4 gap-2 transition-all duration-300 ${role === "student" ? "shadow-md scale-[1.02] ring-2 ring-primary/20" : "hover:-translate-y-1 hover:shadow-sm"}`}
                  onClick={() => setRole("student")}
                >
                  <UserCircle className="h-6 w-6" />
                  <span className="text-xs font-medium">Student</span>
                </Button>
                <Button
                  type="button"
                  variant={role === "department" ? "default" : "outline"}
                  className={`w-full flex-col h-auto py-4 gap-2 transition-all duration-300 ${role === "department" ? "shadow-md scale-[1.02] ring-2 ring-primary/20" : "hover:-translate-y-1 hover:shadow-sm"}`}
                  onClick={() => setRole("department")}
                >
                  <Building2 className="h-6 w-6" />
                  <span className="text-xs font-medium">Department</span>
                </Button>
                <Button
                  type="button"
                  variant={role === "admin" ? "default" : "outline"}
                  className={`w-full flex-col h-auto py-4 gap-2 transition-all duration-300 ${role === "admin" ? "shadow-md scale-[1.02] ring-2 ring-primary/20" : "hover:-translate-y-1 hover:shadow-sm"}`}
                  onClick={() => setRole("admin")}
                >
                  <ShieldCheck className="h-6 w-6" />
                  <span className="text-xs font-medium">Admin</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="id">ID Number / Email</Label>
              <Input id="id" placeholder="e.g. UGR/1234/12 or hr@astu.edu.et" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-primary hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full mt-6 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 text-white font-semibold py-5" disabled={!role || isLoading}>
              {isLoading ? "Signing in..." : "Login to Workspace"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4 pb-4">
          <p className="text-xs text-muted-foreground text-center">
            Adama Science and Technology University <br />
            Smart Complaint & Issue Tracking System
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
