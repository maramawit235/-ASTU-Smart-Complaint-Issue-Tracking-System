"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
  GraduationCap,
  Users,
  Clock,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI-Powered Issue Resolution
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Empowering ASTU with <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Smart Solutions
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            The official Smart Complaint & Issue Tracking System for Adama Science and Technology University.
            Bridge the gap between students and management with transparency and AI efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/login">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-semibold" asChild>
              <Link href="/about">Learn How It Works</Link>
            </Button>
          </div>

          <div className="mt-16 relative mx-auto max-w-5xl animate-in fade-in zoom-in-95 duration-1000">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-2xl skew-y-1">
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent flex items-center justify-center">
                  <div className="p-8 text-center">
                    <BarChart3 className="h-16 w-16 text-primary/20 mx-auto mb-4" />
                    <p className="text-slate-400 font-medium">Dashboard Preview Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-blue-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-blue-100 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Issues Resolved", value: "2,450+" },
              { label: "Active Students", value: "12,000+" },
              { label: "Avg. Response Time", value: "< 24h" },
              { label: "Satisfaction Rate", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features for a Better Campus</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Everything you need to report, track, and resolve campus issues in one smart platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Chatbot Assistant",
                desc: "Get instant answers to campus-related queries and help with submitting complaints through our intelligent AI assistant.",
                icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Real-time Tracking",
                desc: "Monitor the status of your complaints in real-time. Get notified immediately when a department responds.",
                icon: <Zap className="h-8 w-8 text-orange-600" />,
              },
              {
                title: "Department Workspace",
                desc: "Dedicated dashboards for department staff to efficiently manage and prioritize incoming issues.",
                icon: <Shield className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Advanced Analytics",
                desc: "Data-driven insights for administration to identify recurring problems and improve university services.",
                icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Privacy First",
                desc: "Secure authentication and data handling ensuring that student and staff information remains confidential.",
                icon: <Users className="h-8 w-8 text-red-600" />,
              },
              {
                title: "24/7 Accessibility",
                desc: "Submit your issues anytime, anywhere. Our platform is mobile-responsive and always available.",
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Steps to Resolution</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Submit Your Issue", desc: "Report any campus problem through our simple form or via the AI chatbot." },
                  { step: "02", title: "Automated Routing", desc: "Issues are automatically directed to the relevant department based on category." },
                  { step: "03", title: "Track Progress", desc: "Get real-time updates and notifications as your issue moves through stages." },
                  { step: "04", title: "Successful Resolution", desc: "Provide feedback on the resolution and close the ticket once satisfied." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-blue-500/30 font-mono leading-none">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-1 shadow-2xl overflow-hidden">
                <div className="h-full w-full rounded-[calc(1.5rem-4px)] bg-slate-900 flex items-center justify-center p-12">
                  <div className="space-y-4 w-full">
                    <div className="h-12 w-full bg-slate-800 rounded-lg animate-pulse" />
                    <div className="h-12 w-3/4 bg-slate-800 rounded-lg animate-pulse" />
                    <div className="h-12 w-1/2 bg-slate-800 rounded-lg animate-pulse" />
                    <div className="pt-8 flex justify-center">
                      <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <CheckCircle2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is my complaint anonymous?",
                a: "While the system tracks your ID for authenticity, you can choose to keep your identity confidential from the specific department staff handling the ticket if requested."
              },
              {
                q: "How long does a typical resolution take?",
                a: "Most issues are acknowledged within 24 hours. Minor technical issues are usually resolved in 2-3 business days, while departmental policy issues might take longer."
              },
              {
                q: "Can I track issues reported by others?",
                a: "No, to maintain privacy, you can only track issues you have submitted. However, the admin dashboard shows aggregated, non-identifiable trends."
              },
              {
                q: "How do I use the AI Chatbot?",
                a: "Simply click the 'Chat' icon in your dashboard. You can ask it to draft a complaint for you or ask questions about university procedures."
              },
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-100 rounded-2xl bg-slate-50/30 overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-800">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AI Preview Section */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 max-w-sm mx-auto animate-in fade-in zoom-in duration-1000">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">ASTU AI Assistant</div>
                    <div className="text-[10px] text-green-500 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online & Ready
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-sm text-slate-700 max-w-[80%]">
                      Hello! How can I help you with campus life today?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-2xl rounded-tr-none p-3 text-sm max-w-[80%] shadow-md">
                      I want to report a water leakage in Block 50.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-sm text-slate-700 max-w-[80%] animate-pulse">
                      Understood. I've drafted a report for the Facilities Management. Should I submit it for you?
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative floaters */}
              <div className="absolute -top-4 -left-4 h-12 w-12 bg-blue-400 rounded-full blur-xl opacity-20 animate-bounce" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-blue-600 rounded-full blur-xl opacity-20 animate-pulse" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ask Anything to Your AI Assistant</h2>
              <div className="space-y-6">
                {[
                  { title: "Smart Categorization", desc: "AI automatically identifies the right department for your issue." },
                  { title: "Drafting Support", desc: "Don't know how to word it? AI helps you write a clear, professional report." },
                  { title: "Immediate Guidance", desc: "Get instant answers to university rules and procedures." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-primary p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
              <GraduationCap className="h-64 w-64 absolute -top-12 -left-12 rotate-[-15deg]" />
              <Shield className="h-64 w-64 absolute -bottom-12 -right-12 rotate-[15deg]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to make a difference at ASTU?</h2>
              <p className="text-blue-100 text-lg mb-10">
                Join thousands of students and staff already using the Smart Complaint System to improve university life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 w-full sm:w-auto px-10 py-7 text-lg font-bold shadow-xl" asChild>
                  <Link href="/register">Create Your Account</Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                  <Link href="/login" className="flex items-center">
                    Sign In to Existing <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary mb-6">
                <GraduationCap className="h-8 w-8" />
                <span>ASTU Smart Complaint</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Adama Science and Technology University's official platform for issue tracking and resolution.
                Built with modern technology to provide a seamless experience for the campus community.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-500">
                <li><Link href="/login" className="hover:text-primary transition-colors">Login</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Registration</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">How it Works</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
            <p>© 2026 Adama Science and Technology University. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-primary transition-colors">Facebook</span>
              <span className="cursor-pointer hover:text-primary transition-colors">Twitter</span>
              <span className="cursor-pointer hover:text-primary transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
