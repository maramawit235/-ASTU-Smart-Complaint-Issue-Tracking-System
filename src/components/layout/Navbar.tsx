"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, GraduationCap, Menu, Check, Settings as SettingsIcon, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Navbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const mockNotifications = [
    { id: 1, text: "Your complaint #ASTU-102 has been Resolved.", time: "2h ago", unread: true },
    { id: 2, text: "New remark added by IT Support on #ASTU-105.", time: "5h ago", unread: true },
    { id: 3, text: "Welcome to ASTU Smart Complaint System.", time: "1d ago", unread: true },
  ];

  const handleMarkAllRead = () => {
    setUnreadCount(0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:bg-primary/90">
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="hidden sm:inline-block">ASTU Smart Complaint</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="/student-dashboard" className="transition-colors hover:text-accent">
            Dashboard
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/90 focus-visible:ring-accent relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end" forceMount>
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <span className="font-semibold text-sm">Notifications</span>
                {unreadCount > 0 && (
                  <Button variant="ghost" className="h-auto p-0 text-xs text-primary hover:bg-transparent" onClick={handleMarkAllRead}>
                    <Check className="h-3 w-3 mr-1" /> Mark all read
                  </Button>
                )}
              </div>
              <div className="flex flex-col max-h-[300px] overflow-y-auto py-1">
                {mockNotifications.map((note) => (
                  <div key={note.id} className="flex flex-col px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer border-b last:border-0 border-slate-100">
                    <span className={`text-sm ${note.unread && unreadCount > 0 ? "font-medium text-slate-800 dark:text-slate-200" : "text-slate-600 dark:text-slate-400"}`}>
                      {note.text}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">{note.time}</span>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full border border-primary-foreground/20">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="bg-primary-foreground text-primary font-semibold">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Abebe Kebede</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    abebe@astu.edu.et
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/student-dashboard" className="cursor-pointer">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => setIsSettingsOpen(true)}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-background border rounded-xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <SettingsIcon className="h-5 w-5 text-primary" />
                Profile Settings
              </h2>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsSettingsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Abebe Kebede" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="abebe@astu.edu.et" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Reset Password</Label>
                <Input id="password" type="password" placeholder="Enter new password" />
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t bg-muted/20 rounded-b-xl">
              <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsSettingsOpen(false)}>Save Changes</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
