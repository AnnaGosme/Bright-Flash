import React, { useState, useEffect } from "react";

export default function FooterQuote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    getQuote();
    const intervalID = setInterval(() => {
      getQuote(quote[Math.floor(Math.random() * quote.length) + 1]);
    }, 60 * 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function getQuote() {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setName(data.name);
      });
  }

  return (
    <div>
      <p>{`${data.quote}- ${data.name}`}</p>
    </div>
  );
}