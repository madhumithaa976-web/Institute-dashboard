function SummaryCards({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <div className="summary-container">

      <div className="summary-card total">
        <h3>Total Tasks</h3>
        <p>{totalTasks}</p>
      </div>

      <div className="summary-card completed">
        <h3>Completed Tasks</h3>
        <p>{completedTasks}</p>
      </div>

      <div className="summary-card pending">
        <h3>Pending Tasks</h3>
        <p>{pendingTasks}</p>
      </div>

    </div>
  );
}

export default SummaryCards;