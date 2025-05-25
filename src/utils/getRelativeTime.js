export const getRelativeTime = (date) => {
  const now = new Date().toLocaleString();
  const diff = Math.floor((Date.parse(now) - Date.parse(date)) / 1000);
  if (diff < 60) return `${diff}s`;
  else if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  else if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  else return `${Math.floor(diff / 86400)}d`;
};
