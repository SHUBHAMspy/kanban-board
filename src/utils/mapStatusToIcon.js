import { statusData } from "../data/data";

function mapStatusToIcon(status) {
  const statusInfo = statusData.find((s) => s.name === status);
  return statusInfo ? statusInfo.icon : null;
}

export default mapStatusToIcon