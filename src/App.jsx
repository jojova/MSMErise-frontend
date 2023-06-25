import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth, Dashboard } from "@/layouts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
