import { useState } from "react";
import "./NewsletterForm.scss";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmitNewsletter = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        alert("Subscription successful!");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmitNewsletter} className="newsletter">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
