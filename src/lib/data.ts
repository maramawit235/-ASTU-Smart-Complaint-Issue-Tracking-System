export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketCategory = "Academic" | "Facilities" | "IT Support" | "Administrative";

export interface Ticket {
    id: string;
    title: string;
    description: string;
    category: TicketCategory;
    status: TicketStatus;
    createdAt: string;
    updatedAt: string;
    attachmentUrl?: string;
    remarks?: { id: string; authorId: string; authorName: string; text: string; createdAt: string }[];
}

export const mockStudentTickets: Ticket[] = [
    {
        id: "TCK-1042",
        title: "Projector not working in Room 304",
        description: "The ceiling projector in engineering block room 304 won't turn on. Reported before the morning lecture.",
        category: "Facilities",
        status: "Open",
        createdAt: "2026-02-23T08:15:00Z",
        updatedAt: "2026-02-23T08:15:00Z",
    },
    {
        id: "TCK-1038",
        title: "Dormitory Wi-Fi constantly disconnecting",
        description: "The wifi in Block B dormitory drops connection every 10 minutes. It's impossible to do research.",
        category: "IT Support",
        status: "In Progress",
        createdAt: "2026-02-21T14:30:00Z",
        updatedAt: "2026-02-22T09:00:00Z",
    },
    {
        id: "TCK-0985",
        title: "Missing grade for Applied Math II",
        description: "My final grade for Applied Mathematics II is not showing up on the portal despite taking the exam.",
        category: "Academic",
        status: "Resolved",
        createdAt: "2026-02-10T11:20:00Z",
        updatedAt: "2026-02-15T16:45:00Z",
    },
    {
        id: "TCK-0972",
        title: "Cafeteria ID card scanning issue",
        description: "My student ID card is not being recognized by the cafeteria scanners.",
        category: "Administrative",
        status: "Resolved",
        createdAt: "2026-02-05T09:10:00Z",
        updatedAt: "2026-02-06T13:20:00Z",
    }
];

export const mockDepartmentTickets: Ticket[] = [
    {
        id: "TCK-1042",
        title: "Projector not working in Room 304",
        description: "The ceiling projector in engineering block room 304 won't turn on. Reported before the morning lecture. Requires immediate replacement or repair.",
        category: "Facilities",
        status: "Open",
        createdAt: "2026-02-23T08:15:00Z",
        updatedAt: "2026-02-23T08:15:00Z",
        remarks: [
            { id: "RMK-1", authorId: "STF-201", authorName: "Facilities Dept", text: "Checked inventory, we have a spare bulb. Will send technician at 2 PM.", createdAt: "2026-02-23T10:00:00Z" }
        ]
    },
    {
        id: "TCK-1038",
        title: "Dormitory Wi-Fi constantly disconnecting",
        description: "The wifi in Block B dormitory drops connection every 10 minutes. It's impossible to do research.",
        category: "IT Support",
        status: "In Progress",
        createdAt: "2026-02-21T14:30:00Z",
        updatedAt: "2026-02-22T09:00:00Z",
        attachmentUrl: "https://example.com/screenshot.png",
        remarks: [
            { id: "RMK-2", authorId: "IT-105", authorName: "IT Support", text: "Identifying faulty router on the 3rd floor. Restarting core switch.", createdAt: "2026-02-21T15:00:00Z" }
        ]
    },
    {
        id: "TCK-0985",
        title: "Missing grade for Applied Math II",
        description: "My final grade for Applied Mathematics II is not showing up on the portal despite taking the exam.",
        category: "Academic",
        status: "Resolved",
        createdAt: "2026-02-10T11:20:00Z",
        updatedAt: "2026-02-15T16:45:00Z",
        remarks: [
            { id: "RMK-3", authorId: "REG-01", authorName: "Registrar Office", text: "Found the omitted grade sheet. Updated student record.", createdAt: "2026-02-15T16:40:00Z" }
        ]
    },
    {
        id: "TCK-1050",
        title: "Leaking pipe in Chemistry Lab",
        description: "Water is leaking from the ceiling directly above workstation 4 in the main chemistry lab.",
        category: "Facilities",
        status: "Open",
        createdAt: "2026-02-26T09:00:00Z",
        updatedAt: "2026-02-26T09:00:00Z",
        remarks: []
    }
];

export const mockIssueTypeData = [
    { name: 'Facilities', count: 124 },
    { name: 'IT Support', count: 85 },
    { name: 'Academic', count: 64 },
    { name: 'Administrative', count: 32 },
];

export const mockStatusDistributionData = [
    { name: 'Resolved', value: 185, color: '#10b981' }, // emerald-500
    { name: 'In Progress', value: 45, color: '#3b82f6' }, // blue-500
    { name: 'Open', value: 75, color: '#ef4444' }, // red-500
];

export const mockComplaintsOverTimeData = [
    { name: 'Sep', complaints: 45 },
    { name: 'Oct', complaints: 82 },
    { name: 'Nov', complaints: 110 },
    { name: 'Dec', complaints: 60 },
    { name: 'Jan', complaints: 140 },
    { name: 'Feb', complaints: 95 },
];

export interface User {
    id: string;
    name: string;
    email: string;
    role: "Student" | "Department Staff" | "Admin";
    departmentOrGrade: string;
    status: "Active" | "Inactive";
}

export const mockUsers: User[] = [
    { id: "USR-001", name: "Abebe Kebede", email: "abebe.k@stu.astu.edu", role: "Student", departmentOrGrade: "Year 3", status: "Active" },
    { id: "USR-002", name: "Tigist Bekele", email: "tigist.b@astu.edu.et", role: "Department Staff", departmentOrGrade: "IT Services", status: "Active" },
    { id: "USR-003", name: "Dawit Haile", email: "dawit.h@astu.edu.et", role: "Admin", departmentOrGrade: "System Administration", status: "Active" },
    { id: "USR-004", name: "Kidist Tadesse", email: "kidist.t@stu.astu.edu", role: "Student", departmentOrGrade: "Year 1", status: "Inactive" },
    { id: "USR-005", name: "Hassen Yimer", email: "hassen.y@astu.edu.et", role: "Department Staff", departmentOrGrade: "Facilities Services", status: "Active" },
];
