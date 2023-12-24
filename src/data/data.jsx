import { InboxIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { BoltIcon, CheckCircleIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";

const priority = [
  {
    name:'No Priority',
    id: 0,
    icon: <Square3Stack3DIcon className='h-4 w-4'/>
  },
  {
    name:'Low',
    id: 1,
    icon: <InboxIcon className='h-4 w-4'/>
  },
  {
    name: 'Medium',
    id: 2,
    icon: <BoltIcon className='h-4 w-4 text-yellow-500 '/>
  },
  {
    name: 'High',
    id: 3,
    icon: <CheckCircleIcon className='h-4 w-4 text-green-700'/>
  },
  {
    name:'Urgent',
    id: 4,
    icon: <XCircleIcon className='h-4 w-4 text-gray-500'/>
  }
]

const status = [
  {
    name:'Backlog',
    icon: <Square3Stack3DIcon className='h-4 w-4'/>
  },
  {
    name:'Todo',
    icon: <InboxIcon className='h-4 w-4'/>
  },
  {
    name: 'In progress',
    icon: <BoltIcon className='h-4 w-4 text-yellow-500 '/>
  },
  {
    name: 'Done',
    icon: <CheckCircleIcon className='h-4 w-4 text-green-700'/>
  },
  {
    name:'Cancelled',
    icon: <XCircleIcon className='h-4 w-4'/>
  }
]

export {
  priority,status
}