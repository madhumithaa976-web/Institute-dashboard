function TaskCard({ task, onStatusChange }) {
  return (
    <div className={`task-card ${task.status.toLowerCase().replace(" ", "-")}`}>

      <div className="task-header">
        <h3>{task.title}</h3>

        <span className="status-badge">
          {task.status}
        </span>
      </div>

      <p className="description">
        {task.description}
      </p>

      <p className="due-date">
        <strong>Due Date:</strong> {task.dueDate}
      </p>

      <label>Change Status</label>

      <select
        value={task.status}
        onChange={(e) =>
          onStatusChange(task.id, e.target.value)
        }
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

    </div>
  );
}

export default TaskCard;