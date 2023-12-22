
export const tickets = [
  {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: [
          "Feature request"
      ],
      userId: "usr-1",
      status: "Todo",
      priority: 4
  },
  {
      id: "CAM-2",
      title: "Add Multi-Language Support - Enable multi-language support within the application.",
      tag: [
          "Feature Request"
      ],
      userId: "usr-2",
      status: "In progress",
      priority: 3
  },
  {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: [
          "Feature Request"
      ],
      userId: "usr-2",
      status: "In progress",
      priority: 1
  },
  {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: [
          "Feature Request"
      ],
      userId: "usr-1",
      status: "In progress",
      priority: 3
  },
  {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: [
          "Feature Request"
      ],
      userId: "usr-5",
      status: "In progress",
      priority: 0
  },
  {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: [
          "Feature Request"
      ],
      userId: "usr-2",
      status: "Todo",
      priority: 1
  },
  {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: [
          "Feature Request"
      ],
      userId: "usr-1",
      status: "Backlog",
      priority: 2
  },
  {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: [
          "Feature Request"
      ],
      userId: "usr-3",
      status: "In progress",
      priority: 3
  },
  {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: [
          "Feature Request"
      ],
      userId: "usr-5",
      status: "Todo",
      priority: 2
  },
  {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: [
          "Feature Request"
      ],
      userId: "usr-4",
      status: "Backlog",
      priority: 1
  }
]

// Function to categorize tickets
export function categorizeTickets(tickets) {
  const categorized = {
      byPriority: {},
      byStatus: {},
      byUser: {}
  };

  // Categorize by Priority, Status, and User
  tickets.forEach(ticket => {
      // By Priority
      if (!categorized.byPriority[ticket.priority]) {
          categorized.byPriority[ticket.priority] = [];
      }
      categorized.byPriority[ticket.priority].push(ticket);

      // By Status
      if (!categorized.byStatus[ticket.status]) {
          categorized.byStatus[ticket.status] = [];
      }
      categorized.byStatus[ticket.status].push(ticket);

      // By User
      if (!categorized.byUser[ticket.userId]) {
          categorized.byUser[ticket.userId] = [];
      }
      categorized.byUser[ticket.userId].push(ticket);
  });

  return categorized;
}

// Example usage
const categorizedTickets = categorizeTickets(tickets);

// Accessing the categorized data
console.log('Tickets by Priority:', categorizedTickets.byPriority);
console.log('Tickets by Status:', categorizedTickets.byStatus);
console.log('Tickets by User:', categorizedTickets.byUser);