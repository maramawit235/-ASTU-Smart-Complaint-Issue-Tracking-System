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
