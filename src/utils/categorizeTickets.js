import mapUserIdToName from "./mapIdToUsername";
import mapPriorityToIcon from "./mapPriorityToIcon";
import mapStatusToIcon from "./mapStatusToIcon";


// Function to categorize and order the tickets
function categorizeAndOrderTickets(tickets,users, category, order) {
    const categorizedTickets = {};
  
    // Categorize tickets based on the specified category (status, user, or priority)
    tickets.forEach(ticket => {
      const key = ticket[category];
      if (!categorizedTickets[key]) {
        categorizedTickets[key] = [];
      }
      console.log(key);
      category === 'priority'
      ? (categorizedTickets[key].push({
        ...ticket,
        user: mapUserIdToName(ticket.userId,users),
        status: mapStatusToIcon(ticket.status),
        priority: null
      })): category === 'status'
      ? (categorizedTickets[key].push({
        ...ticket,
        user: mapUserIdToName(ticket.userId,users),
        priority: mapPriorityToIcon(ticket.priority),
        status: null
      }))
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
          if (b.priority !== a.priority) {
            return b.priority - a.priority;
          } else {
            // If priorities are equal, sort by title ascending
            return a.title.localeCompare(b.title);
          }
        } else if (order === 'title') {
          return a.title.localeCompare(b.title);
        }
      });
    }
  
    return categorizedTickets;
  }
  
  // Example: Categorize and order tickets based on user and priority
  // const categorizedAndOrderedTickets = categorizeAndOrderTickets(tickets, 'priority', 'title');
  
  // console.log(categorizedAndOrderedTickets);


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