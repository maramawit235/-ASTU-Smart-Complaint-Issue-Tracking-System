"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { FileText, CheckCircle2, Clock, Upload, BellRing, Filter } from "lucide-react";
import { mockStudentTickets, TicketStatus, Ticket } from "@/lib/data";
import { format } from "date-fns";

export default function StudentDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [statusFilter, setStatusFilter] = useState<TicketStatus | "All">("All");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form State
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (!category || !title || !description) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);

            // Reset form
            setCategory("");
            setTitle("");
            setDescription("");

            // Return to overview after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
                setActiveTab("overview");
            }, 3000);
        }, 1500);
    };

    const filteredTickets = mockStudentTickets.filter(ticket =>
        statusFilter === "All" ? true : ticket.status === statusFilter
    );

    const openTickets = mockStudentTickets.filter(t => t.status === "Open").length;
    const inProgressTickets = mockStudentTickets.filter(t => t.status === "In Progress").length;
    const resolvedTickets = mockStudentTickets.filter(t => t.status === "Resolved").length;

    const getStatusBadge = (status: TicketStatus) => {
        switch (status) {
            case "Open":
                return <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Open</Badge>;
            case "In Progress":
                return <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">In Progress</Badge>;
            case "Resolved":
                return <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">Resolved</Badge>;
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Student Dashboard</h1>
                    <p className="text-muted-foreground">Welcome back, Abebe. Manage your complaints below.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="relative">
                        <BellRing className="h-4 w-4" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                        </span>
                    </Button>
                    <Button onClick={() => setActiveTab("new")} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Submit New Request
                    </Button>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-slate-100/80 p-1">
                    <TabsTrigger value="overview" className="rounded-md data-[state=active]:shadow-sm">Overview</TabsTrigger>
                    <TabsTrigger value="my-tickets" className="rounded-md data-[state=active]:shadow-sm">My Complaints</TabsTrigger>
                    <TabsTrigger value="new" className="rounded-md data-[state=active]:shadow-sm">New Complaint</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3 mb-2">
                        <Card className="hover:shadow-md transition-all duration-200 border-slate-200/60 hover:-translate-y-0.5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                                <CardTitle className="text-sm font-medium text-slate-600">Open Tickets</CardTitle>
                                <FileText className="h-4 w-4 text-primary" />
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="text-3xl font-bold text-slate-800">{openTickets}</div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-md transition-all duration-200 border-slate-200/60 hover:-translate-y-0.5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                                <CardTitle className="text-sm font-medium text-slate-600">In Progress</CardTitle>
                                <Clock className="h-4 w-4 text-amber-500" />
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="text-3xl font-bold text-slate-800">{inProgressTickets}</div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-md transition-all duration-200 border-slate-200/60 hover:-translate-y-0.5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                                <CardTitle className="text-sm font-medium text-slate-600">Resolved</CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{resolvedTickets}</div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-slate-200/60 shadow-sm">
                        <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
                            <CardTitle className="text-lg">Recent Activity</CardTitle>
                            <CardDescription>Latest updates on your submitted issues.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 text-sm">
                                {mockStudentTickets.slice(0, 2).map(ticket => (
                                    <div key={ticket.id} className="flex items-start gap-4 flex-col sm:flex-row border-b pb-4 last:border-0 last:pb-0">
                                        <div className="bg-muted p-2 rounded-md shrink-0 mt-1">
                                            {ticket.category === "IT Support" && <FileText className="h-4 w-4 text-blue-500" />}
                                            {ticket.category === "Facilities" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                                            {ticket.category !== "IT Support" && ticket.category !== "Facilities" && <CheckCircle2 className="h-4 w-4 text-primary" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{ticket.title}</h4>
                                            <p className="text-muted-foreground mt-1 line-clamp-1">{ticket.description}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                {getStatusBadge(ticket.status)}
                                                <span className="text-xs text-muted-foreground">{format(new Date(ticket.updatedAt), "PPP")}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="my-tickets">
                    <Card className="border-slate-200/60 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-4 bg-slate-50/50 border-b border-slate-100">
                            <div className="space-y-1">
                                <CardTitle>My Complaints</CardTitle>
                                <CardDescription>Track the status of your submitted issues here.</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-muted-foreground" />
                                <Select value={statusFilter} onValueChange={(val: any) => setStatusFilter(val)}>
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue placeholder="Filter Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All Statuses</SelectItem>
                                        <SelectItem value="Open">Open</SelectItem>
                                        <SelectItem value="In Progress">In Progress</SelectItem>
                                        <SelectItem value="Resolved">Resolved</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border overflow-x-auto">
                                <div className="min-w-[600px]">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-muted/50">
                                                <TableHead className="w-[100px]">ID</TableHead>
                                                <TableHead>Title</TableHead>
                                                <TableHead>Category</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Date</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredTickets.map((ticket) => (
                                                <TableRow key={ticket.id}>
                                                    <TableCell className="font-medium">{ticket.id}</TableCell>
                                                    <TableCell>{ticket.title}</TableCell>
                                                    <TableCell>{ticket.category}</TableCell>
                                                    <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                                                    <TableCell className="text-right text-muted-foreground">
                                                        {format(new Date(ticket.createdAt), "MMM d, yyyy")}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            {filteredTickets.length === 0 && (
                                                <TableRow>
                                                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                                        No tickets found.
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="new">
                    <Card className="max-w-2xl mx-auto border-t-4 border-t-primary shadow-lg animate-in fade-in scale-95 duration-300">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-5">
                            <CardTitle className="text-xl">Submit New Complaint</CardTitle>
                            <CardDescription className="text-sm mt-1">
                                Fill out the form below to report an issue or complaint to the respective department.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {showSuccess && (
                                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 mb-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    <p className="text-sm font-medium">Complaint submitted successfully! Redirecting...</p>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="academic">Academic & Grading</SelectItem>
                                        <SelectItem value="facilities">Dormitory & Facilities</SelectItem>
                                        <SelectItem value="it">IT & Campus Network</SelectItem>
                                        <SelectItem value="admin">Registration & Administrative</SelectItem>
                                        <SelectItem value="other">Other / General</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="title">Issue Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Brief summary of the issue"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Detailed Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Please provide as much text as possible to help us resolve the issue."
                                    className="min-h-[120px]"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Attachments (Optional)</Label>
                                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 transition-colors">
                                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                                    <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t p-6">
                            <Button variant="ghost" onClick={() => setActiveTab("overview")} disabled={isSubmitting}>Cancel</Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting || !category || !title || !description}
                                className="relative"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Complaint"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// Simple AlertTriangle fallback for recent activity mapping
const AlertTriangle = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" x2="12" y1="9" y2="13" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
)
