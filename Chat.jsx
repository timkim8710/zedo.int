export default function Chat() {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto">
        {/* Messages appear here */}
      </div>
      <input className="border p-2" placeholder="Type a message..." />
    </div>
  );
}
