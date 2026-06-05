const notifications = [
  { id: 1, type: "placement", unread: true, timestamp: 100 },
  { id: 2, type: "event", unread: true, timestamp: 200 },
  { id: 3, type: "result", unread: true, timestamp: 150 },
  { id: 4, type: "placement", unread: true, timestamp: 300 },
  { id: 5, type: "event", unread: false, timestamp: 500 }
];

function getPriority(type) {
  if (type === "placement") return 3;
  if (type === "result") return 2;
  return 1;
}

function getTopNotifications(data) {
  return data
    .filter(n => n.unread)
    .sort((a, b) => {
      const priorityDiff =
        getPriority(b.type) - getPriority(a.type);

      if (priorityDiff !== 0)
        return priorityDiff;

      return b.timestamp - a.timestamp;
    })
    .slice(0, 10);
}

console.log("Top Priority Notifications:");
console.log(getTopNotifications(notifications));