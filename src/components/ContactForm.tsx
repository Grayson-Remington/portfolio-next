import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    const response = await fetch("https://formspree.io/f/xdovzzdw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (response.ok) {
      alert("Your message was sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      id="contactform"
      className="mx-auto flex flex-col bg-transparent pb-10"
    >
      <div className="flex items-center justify-center">
        <form
          onSubmit={() => handleSubmit}
          className="flex w-full max-w-2xl flex-col items-center px-10 md:w-9/12"
        >
          <div className="mb-7 text-3xl">Contact Me</div>
          <input
            className="w-full rounded-md border-2 p-2 focus:outline-none"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="my-2 w-full rounded-md border-2 p-2 focus:outline-none"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows={3}
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 w-full rounded-md  border-2 p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-block w-max rounded-md bg-blue-200 px-8 py-3 text-center text-base font-medium text-blue-700 shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
