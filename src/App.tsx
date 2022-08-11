import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useState } from "react";
import { Tweet } from "./pages/types";
import { TheTweet } from "./pages/TheTweet";


function App() {

  const [tweets, setTweets] = useState<Tweet[]>([])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home setTweets={setTweets} />} />
        <Route path="/tweet" element={<TheTweet />} />
      </Routes>
    </div>
  );
}

export default App;
