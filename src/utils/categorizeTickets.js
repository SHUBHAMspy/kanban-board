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
        statusIcon: mapStatusToIcon(ticket.status),

      })): category === 'status'
      ? (categorizedTickets[key].push({
        ...ticket,
        user: mapUserIdToName(ticket.userId,users),
        priorityIcon: mapPriorityToIcon(ticket.priority),
   
      }))
      : categorizedTickets[key].push({
        ...ticket,
        statusIcon: mapStatusToIcon(ticket.status),
        priorityIcon: mapPriorityToIcon(ticket.priority)
      })
      
    });
  
    // Order tickets within each category based on the specified order (priority or title)
    for (const key in categorizedTickets) {
      categorizedTickets[key].sort((a, b) => {
        if (order === 'priority') {
          return b.priority - a.priority;
          // if (b.priority !== a.priority) {
          // } else {
          //   // If priorities are equal, sort by title ascending
          //   return a.title.localeCompare(b.title);
          // }
        } else if (order === 'title') {
          return a.title.localeCompare(b.title);
        }
      });
    }
  
    return categorizedTickets;
  }
  
  // Example: Categorize and order tickets based on user and priority
  // const categorizedAndOrderedTickets = categorizeAndOrderTickets(tickets,users, 'priority', 'priority');
  
  // console.log(categorizedAndOrderedTickets);


  export default categorizeAndOrderTickets
