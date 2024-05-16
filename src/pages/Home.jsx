/*eslint-disable */
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Newsletter from "../components/Newsletter/Newsletter";
import Plan from "../components/Plans/Plan";
import Reason from "../components/Reason/Reason";
import Start from "../components/Start/Start";
import Work from "../components/Work/Work";

const Home = () => {
  useEffect(() => {
    const loadChatScript = () => {
      const chatScript = document.createElement("script");
      chatScript.async = true;
      chatScript.src = "http://code.jivosite.com/widget/6bYZcBc1CG";

      document.body.appendChild(chatScript);
    };

    // Load chat script on mount
    loadChatScript();

    // Cleanup function to remove script on component unmount
    return () => {
      const existingScript = document.querySelector(
        `script[src="${CHAT_SCRIPT_URL}"]`
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Start />
      <Work />
      <Reason />
      <Plan />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
