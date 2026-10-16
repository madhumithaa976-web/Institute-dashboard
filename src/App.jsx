import { useState } from "react";

import Login from "./components/Login";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard";

function App() {

  const [role, setRole] = useState(null);

  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  if (role === "Student") {
    return <StudentDashboard />;
  }

  if (role === "Mentor") {
    return <MentorDashboard />;
  }

  return null;
}

export default App;