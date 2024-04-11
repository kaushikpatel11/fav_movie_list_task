import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/signIn";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <div className="w-screen flex flex-col gap-5 container mx-auto ">
          <h1 className="text-3xl font-bold text-center">
            Welcome to the movie list!!!
          </h1>
          <Home />
        </div>
      ) : (
        <SignIn setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;
