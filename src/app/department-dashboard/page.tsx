"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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
import { mockDepartmentTickets, Ticket, TicketStatus, TicketCategory } from "@/lib/data";
import {
    Users,
    AlertTriangle,
    CheckCircle2,
    ListFilter,
    LayoutDashboard,
    Ticket as TicketIcon,
    History,
    Paperclip,
    Send,
    MessageSquare,
    Clock,
    X
} from "lucide-react";

export default function DepartmentDashboard() {
    const [tickets, setTickets] = useState<Ticket[]>(mockDepartmentTickets);
    const [activeTab, setActiveTab] = useState<"dashboard" | "tickets" | "history">("dashboard");
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [statusFilter, setStatusFilter] = useState<TicketStatus | "All">("All");
    const [categoryFilter, setCategoryFilter] = useState<TicketCategory | "All">("All");
    const [newRemark, setNewRemark] = useState("");

    // Stats calculations
    const assignedCount = tickets.filter(t => t.status !== "Resolved").length;
    // Mock logic for priority just for dashboard
    const highPriorityCount = tickets.filter(t => t.category === "Facilities" && t.status !== "Resolved").length;
    const resolvedCount = tickets.filter(t => t.status === "Resolved").length;

    const handleStatusChange = (ticketId: string, newStatus: TicketStatus) => {
        setTickets(prev => prev.map(t =>
            t.id === ticketId ? { ...t, status: newStatus, updatedAt: new Date().toISOString() } : t
        ));
        if (selectedTicket && selectedTicket.id === ticketId) {
            setSelectedTicket(prev => prev ? { ...prev, status: newStatus, updatedAt: new Date().toISOString() } : null);
        }
    };

    const handleAddRemark = () => {
        if (!selectedTicket || !newRemark.trim()) return;

        const remark = {
            id: `RMK-${Date.now()}`,
            authorId: "ME-01",
            authorName: "My Department",
            text: newRemark,
            createdAt: new Date().toISOString()
        };

        setTickets(prev => prev.map(t =>
            t.id === selectedTicket.id
                ? { ...t, remarks: [...(t.remarks || []), remark] }
                : t
        ));

        setSelectedTicket(prev => prev ? { ...prev, remarks: [...(prev.remarks || []), remark] } : null);
        setNewRemark("");
    };

    const getStatusBadgeVariant = (status: TicketStatus) => {
        switch (status) {
            case "Resolved": return "default"; // emerald color logically
            case "In Progress": return "secondary"; // blueish logically
            case "Open": return "destructive"; // redish logically
            default: return "outline";
        }
    };

    const getStatusColor = (status: TicketStatus) => {
        switch (status) {
            case "Resolved": return "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800";
            case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
            case "Open": return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";
            default: return "";
        }
    };

    // Filter tickets based on tab and filters
    const filteredTickets = tickets.filter(t => {
        // Tab filtering
        if (activeTab === "tickets" && t.status === "Resolved") return false;
        if (activeTab === "history" && t.status !== "Resolved") return false;

        // Explicit dropdown filtering
        if (statusFilter !== "All" && t.status !== statusFilter) return false;
        if (categoryFilter !== "All" && t.category !== categoryFilter) return false;

        return true;
    });

    const renderDashboard = () => (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">Department Overview</h1>
                <p className="text-muted-foreground">Manage and track issues assigned to your team.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Tickets</CardTitle>
                        <Users className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{assignedCount}</div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-destructive shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">High Priority</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{highPriorityCount}</div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{resolvedCount}</div>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest complaints routed to your department</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {tickets.slice(0, 3).map(ticket => (
                            <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg bg-card text-card-foreground">
                                <div className="space-y-1">
                                    <p className="font-medium leading-none">{ticket.title}</p>
                                    <p className="text-sm text-muted-foreground">{ticket.id} • {new Date(ticket.createdAt).toLocaleDateString()}</p>
                                </div>
                                <Badge className={getStatusColor(ticket.status)} variant="outline">
                                    {ticket.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const renderTicketList = () => (
        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        {activeTab === "tickets" ? "Assigned Tickets" : "Ticket History"}
                    </h2>
                    <p className="text-muted-foreground">
                        {activeTab === "tickets" ? "Viewing open and in-progress tickets." : "Viewing resolved tickets."}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Select value={categoryFilter} onValueChange={(v: any) => setCategoryFilter(v)}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Categories</SelectItem>
                            <SelectItem value="Facilities">Facilities</SelectItem>
                            <SelectItem value="IT Support">IT Support</SelectItem>
                            <SelectItem value="Academic">Academic</SelectItem>
                            <SelectItem value="Administrative">Administrative</SelectItem>
                        </SelectContent>
                    </Select>

                    {activeTab !== "history" && (
                        <Select value={statusFilter} onValueChange={(v: any) => setStatusFilter(v)}>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Statuses</SelectItem>
                                <SelectItem value="Open">Open</SelectItem>
                                <SelectItem value="In Progress">In Progress</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                </div>
            </div>

            <Card className="shadow-sm border-muted">
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
                        {filteredTickets.length > 0 ? (
                            filteredTickets.map((ticket) => (
                                <TableRow
                                    key={ticket.id}
                                    className="cursor-pointer hover:bg-muted/50 transition-colors"
                                    onClick={() => setSelectedTicket(ticket)}
                                >
                                    <TableCell className="font-medium">{ticket.id}</TableCell>
                                    <TableCell>{ticket.title}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-normal">{ticket.category}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={getStatusColor(ticket.status)}>
                                            {ticket.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right text-muted-foreground">
                                        {new Date(ticket.createdAt).toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                                    No tickets found matching the criteria.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );

    const renderTicketDetail = () => {
        if (!selectedTicket) return null;

        return (
            <Card className="flex flex-col h-full shadow-sm border-muted animate-in slide-in-from-right-8 duration-300">
                <CardHeader className="flex flex-row items-start justify-between border-b bg-muted/20 pb-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">{selectedTicket.id}</span>
                            <Badge variant="outline" className={getStatusColor(selectedTicket.status)}>
                                {selectedTicket.status}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight">{selectedTicket.title}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedTicket(null)} className="h-8 w-8 -mr-2 -mt-2">
                        <X className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-0">
                    <div className="p-6 space-y-6">
                        {/* Status Update */}
                        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-muted/50">
                            <div className="flex-1">
                                <p className="text-sm font-medium">Update Status</p>
                                <p className="text-xs text-muted-foreground">Change the current state of this ticket.</p>
                            </div>
                            <Select
                                value={selectedTicket.status}
                                onValueChange={(v: TicketStatus) => handleStatusChange(selectedTicket.id, v)}
                            >
                                <SelectTrigger className="w-[180px] bg-background">
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Open">Open</SelectItem>
                                    <SelectItem value="In Progress">In Progress</SelectItem>
                                    <SelectItem value="Resolved">Resolved</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Description</h3>
                            <div className="text-sm leading-relaxed p-4 bg-background border rounded-lg shadow-sm">
                                {selectedTicket.description}
                            </div>
                        </div>

                        {/* Attachments */}
                        {selectedTicket.attachmentUrl && (
                            <div>
                                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Attachments</h3>
                                <div className="flex items-center gap-2 p-3 border rounded-lg bg-background w-fit">
                                    <div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
                                        <Paperclip className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium">attachment.png</p>
                                        <p className="text-xs text-muted-foreground">Image file</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="ml-4">View</Button>
                                </div>
                            </div>
                        )}

                        {/* Remarks History */}
                        <div>
                            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Activity & Remarks</h3>
                            <div className="space-y-4">
                                {selectedTicket.remarks && selectedTicket.remarks.length > 0 ? (
                                    selectedTicket.remarks.map(remark => (
                                        <div key={remark.id} className="flex gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <MessageSquare className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="flex-1 bg-muted/30 rounded-lg border p-3">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-medium">{remark.authorName}</span>
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {new Date(remark.createdAt).toLocaleDateString()} {new Date(remark.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                                <p className="text-sm">{remark.text}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground italic">No remarks added yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
                <div className="p-4 border-t bg-muted/10">
                    <h3 className="font-semibold text-sm mb-2">Add Remark</h3>
                    <div className="flex gap-2">
                        <Textarea
                            placeholder="Type your remark or public response here..."
                            className="resize-none min-h-[80px]"
                            value={newRemark}
                            onChange={(e) => setNewRemark(e.target.value)}
                        />
                        <Button className="h-auto shrink-0 px-4" onClick={handleAddRemark}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <div className="min-h-screen bg-background border-t">
            <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="sticky top-6 flex flex-col gap-2">
                        <h2 className="px-4 text-lg font-semibold tracking-tight mb-2">Department Portal</h2>
                        <Button
                            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
                            className={`justify-start gap-3 ${activeTab === "dashboard" ? 'bg-secondary' : 'hover:bg-muted/50'}`}
                            onClick={() => { setActiveTab("dashboard"); setSelectedTicket(null); }}
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Overview
                        </Button>
                        <Button
                            variant={activeTab === "tickets" ? "secondary" : "ghost"}
                            className={`justify-start gap-3 ${activeTab === "tickets" ? 'bg-secondary' : 'hover:bg-muted/50'}`}
                            onClick={() => { setActiveTab("tickets"); setSelectedTicket(null); }}
                        >
                            <TicketIcon className="h-4 w-4" />
                            Assigned Tickets
                            {assignedCount > 0 && (
                                <Badge variant="default" className="ml-auto h-5 px-1.5 min-w-[20px] justify-center text-xs">
                                    {assignedCount}
                                </Badge>
                            )}
                        </Button>
                        <Button
                            variant={activeTab === "history" ? "secondary" : "ghost"}
                            className={`justify-start gap-3 ${activeTab === "history" ? 'bg-secondary' : 'hover:bg-muted/50'}`}
                            onClick={() => { setActiveTab("history"); setSelectedTicket(null); }}
                        >
                            <History className="h-4 w-4" />
                            History Archive
                        </Button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-hidden">
                    <div className="h-full flex flex-col lg:flex-row gap-6">
                        {/* List/Overview Column */}
                        <div className={`flex-1 transition-all duration-300 ${selectedTicket ? 'hidden lg:block lg:w-1/2' : 'w-full'}`}>
                            {activeTab === "dashboard" ? renderDashboard() : renderTicketList()}
                        </div>

                        {/* Detail View Column */}
                        {selectedTicket && (
                            <div className="flex-1 h-[calc(100vh-120px)] lg:h-auto lg:w-1/2 lg:flex-none xl:w-5/12 max-h-[850px]">
                                {renderTicketDetail()}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
