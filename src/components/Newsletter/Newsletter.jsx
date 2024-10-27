import { useState, useEffect } from "react";
import {
  getUserEmail,
  setUserEmail,
  removeUserEmail,
} from "../../utilities/LocalStorage";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const storedEmail = getUserEmail();
    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
    }
  }, []);

  // Handle subscribe/login
  const handleSubscribe = (e) => {
    e.preventDefault();
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    removeUserEmail();
    setEmail("");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col space-y-5 justify-center items-center mx-auto md:h-[20rem] rounded-3xl w-[95%] md:w-[90%] py-4 text-center bg-gradient-to-tr from-blue-100 to-yellow-100">
      {isLoggedIn ? (
        <div className="p-4">
          <div className="relative p-3">
            <h2 className="video-text rounded-xl p-3">Welcome back,</h2>
            <span className="text-xl font-bold">{email}</span>
            <video autoPlay muted loop className="video-background rounded-xl">
              <source src="./videos/video.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4 p-4">
          <div className="p-3 md:p-0">
            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border px-[20px] py-[10px] mr-4 rounded-xl w-full md:min-w-[350px]"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn inline-block bg-gradient-to-r from-yellow-400 to-pink-300 text-black rounded-xl px-6 py-2 font-medium hover:from-pink-300 hover:to-yellow-400"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
