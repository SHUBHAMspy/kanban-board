import { InboxIcon, MinusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { BoltIcon, CheckCircleIcon, ExclamationCircleIcon, FireIcon, LightBulbIcon, Square3Stack3DIcon, StarIcon } from "@heroicons/react/24/solid";

const priorityData = [
  {
    name:'No Priority',
    id: 0,
    icon: <MinusIcon className='h-4 w-4'/>
  },
  {
    name:'Low',
    id: 1,
    icon: <LightBulbIcon className='h-4 w-4 text-yellow-200'/>
  },
  {
    name: 'Medium',
    id: 2,
    icon: <StarIcon className='h-4 w-4 text-yellow-500 '/>
  },
  {
    name: 'High',
    id: 3,
    icon: <FireIcon className='h-4 w-4 text-orange-500'/>
  },
  {
    name:'Urgent',
    id: 4,
    icon: <ExclamationCircleIcon className='h-4 w-4 text-red-800'/>
  }
]

const statusData = [
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
  priorityData,statusData
}