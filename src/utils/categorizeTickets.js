import mapUserIdToName from "./mapIdToUsername";
import mapPriorityToIcon from "./mapPriorityToIcon";
import mapStatusToIcon from "./mapStatusToIcon";

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

const users =  [
  {
      id: "usr-1",
      name: "Anoop sharma",
      available: false
  },
  {
      id: "usr-2",
      name: "Yogesh",
      available: true
  },
  {
      id: "usr-3",
      name: "Shankar Kumar",
      available: true
  },
  {
      id: "usr-4",
      name: "Ramesh",
      available: true
  },
  {
      id: "usr-5",
      name: "Suresh",
      available: true
  }
]

// Function to categorize tickets
// export function categorizeTickets(tickets) {
//   const categorized = {
//       byPriority: {},
//       byStatus: {},
//       byUser: {}
//   };

//   // Categorize by Priority, Status, and User
//   tickets.forEach(ticket => {
//       // By Priority
//       if (!categorized.byPriority[ticket.priority]) {
//           categorized.byPriority[ticket.priority] = [];
//       }
//       categorized.byPriority[ticket.priority].push(ticket);

//       // By Status
//       if (!categorized.byStatus[ticket.status]) {
//           categorized.byStatus[ticket.status] = [];
//       }
//       categorized.byStatus[ticket.status].push(ticket);

//       // By User
//       if (!categorized.byUser[ticket.userId]) {
//           categorized.byUser[ticket.userId] = [];
//       }
//       categorized.byUser[ticket.userId].push(ticket);
//   });

//   return categorized;
// }

// // Example usage
// const categorizedTickets = categorizeTickets(tickets);

// // Accessing the categorized data
// console.log('Tickets by Priority:', categorizedTickets.byPriority);
// console.log('Tickets by Status:', categorizedTickets.byStatus);
// console.log('Tickets by User:', categorizedTickets.byUser);

// Function to categorize and order the tickets
function categorizeAndOrderTickets(tickets,users, category, order) {
    const categorizedTickets = {};
  
    // Categorize tickets based on the specified category (status, user, or priority)
    tickets.forEach(ticket => {
      const key = ticket[category];
      if (!categorizedTickets[key]) {
        categorizedTickets[key] = [];
      }
      category === 'priority'
      ?  categorizedTickets[key].push({
        ...ticket,
        userName: mapUserIdToName(ticket.userId,users),
        status: mapStatusToIcon(ticket.status)
      }): category === 'status'
      ? categorizedTickets[key].push({
        ...ticket,
        userName: mapUserIdToName(ticket.userId,users),
        priority: mapPriorityToIcon(ticket.priority)
      })
      : categorizedTickets[key].push({
        ...ticket,
        status: mapStatusToIcon(ticket.status),
        priority: mapPriorityToIcon(ticket.priority)
      })
      
    });
  
    // Order tickets within each category based on the specified order (priority or title)
    for (const key in categorizedTickets) {
      categorizedTickets[key].sort((a, b) => {
        if (order === 'priority') {
          return b.priority - a.priority;
        } else if (order === 'title') {
          return a.title.localeCompare(b.title);
        }
      });
    }
  
    return categorizedTickets;
  }
  
  // Example: Categorize and order tickets based on user and priority
  const categorizedAndOrderedTickets = categorizeAndOrderTickets(tickets, 'priority', 'title');
  
  console.log(categorizedAndOrderedTickets);

	// Define the order in which you want the fields to appear
	// const fieldOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
	
	// // Arrange the object into a grid in the specified order
	// const arrangedGrid = fieldOrder.map(fieldName => categorizedAndOrderedTickets[fieldName]);
	
	// console.log(arrangedGrid);

  export default categorizeAndOrderTickets

  // (
  //   category === 'priority' 
  //   ? (
  //     Object.keys(categorizedTickets).map(priority => {
  //       return categorizedTickets[priority].map(ticket => {
  //         return {
  //           ...ticket,
  //           userName: mapUserIdToName(ticket.userId,users),
  //           status: mapStatusToIcon(ticket.status)
  //         };
  //       });
  //     })
  //   ) : category === 'status'
  //   ? (
  //     Object.keys(categorizedTickets).map(status => {
  //       return categorizedTickets[status].map(ticket => {
  //         return {
  //           ...ticket,
  //           userName: mapUserIdToName(ticket.userId,users),
  //           priority: mapPriorityToIcon(ticket.priority)
  //         };
  //       });
  //     })
  //   )  
  //   : (
  //     Object.keys(categorizedTickets).map(user => {
  //       return categorizedTickets[user].map(ticket => {
  //         return {
  //           ...ticket,
  //           status: mapStatusToIcon(ticket.status),
  //           priority: mapPriorityToIcon(ticket.priority)
  //         };
  //       });
  //     })
  //   )
  // )