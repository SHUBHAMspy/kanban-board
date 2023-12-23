const initialTicketState = {
  display: {
    grouping: 'status',
    ordering: 'priority'
  } || JSON.parse(localStorage.getItem('display')),
  tickets: [],
  users: [],

}

export default initialTicketState