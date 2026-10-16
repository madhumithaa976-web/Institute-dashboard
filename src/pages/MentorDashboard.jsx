import { useState } from "react";
import TaskCard from "../components/TaskCard";
import SummaryCards from "../components/SummaryCards";

function MentorDashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Student Project Review",
      description: "Review student React project.",
      dueDate: "20-09-2026",
      status: "Pending"
    },
    {
      id: 2,
      title: "HTML Training",
      description: "Conduct HTML training session.",
      dueDate: "21-09-2026",
      status: "In Progress"
    },
    {
      id: 3,
      title: "JavaScript Assessment",
      description: "Evaluate JavaScript assignment.",
      dueDate: "24-09-2026",
      status: "Completed"
    }
  ]);

  const handleStatusChange = (id, newStatus) => {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>Mentor Dashboard</h1>
          <p>Welcome Mentor 👋</p>
        </div>

        <button
          className="logout-button"
          onClick={() => window.location.reload()}
        >
          Logout
        </button>
      </header>

      <SummaryCards tasks={tasks} />

      <section className="tasks-section">

        <h2>Assigned Tasks</h2>

        <div className="task-grid">

          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default MentorDashboard;