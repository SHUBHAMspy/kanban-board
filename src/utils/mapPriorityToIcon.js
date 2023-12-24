import { priorityData } from "../data/data";

function mapPriorityToIcon(priority) {
  const priorityInfo = priorityData.find((p) => p.id === priority);
  return priorityInfo ? priorityInfo.icon : null;
}

export default mapPriorityToIcon