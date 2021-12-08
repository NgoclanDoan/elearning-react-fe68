import { UpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      {isVisible && (
        <div onClick={scrollToTop}>
          <div className="py-2 px-2 rounded-md  bg-gray-800 cursor-pointer">
            <UpOutlined
              className="text-4xl text-white"
              style={{ lineHeight: "0.5rem" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
