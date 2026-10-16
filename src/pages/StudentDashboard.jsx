import { useState } from "react";
import TaskCard from "../components/TaskCard";
import SummaryCards from "../components/SummaryCards";

function StudentDashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "HTML Assignment",
      description: "Create a webpage using HTML tags.",
      dueDate: "20-09-2026",
      status: "Completed"
    },
    {
      id: 2,
      title: "CSS Assignment",
      description: "Create a responsive webpage using CSS.",
      dueDate: "22-09-2026",
      status: "In Progress"
    },
    {
      id: 3,
      title: "JavaScript Task",
      description: "Create a JavaScript form validation.",
      dueDate: "25-09-2026",
      status: "Pending"
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
          <h1>Student Dashboard</h1>
          <p>Welcome Student 👋</p>
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

        <h2>My Tasks</h2>

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

export default StudentDashboard;