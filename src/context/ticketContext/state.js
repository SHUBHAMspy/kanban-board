const initialTicketState = {
  display: JSON.parse(localStorage.getItem('display')) || {
    grouping: 'status',
    ordering: 'priority'
  } ,
  tickets: [],
  users: [],

}

export default initialTicketState