import React from "react";
import "./styles.css";
import { useState } from "react";

const categories = {
  Football: [
    { name: "Messi", rating: "5/5" },
    { name: "Ronaldo", rating: "4.2/5" },
    { name: "Neymar", rating: "4/5" }
  ],

  Movies: [
    {
      name: "Interstellar",
      rating: "4.8/5"
    },
    {
      name: "Harry Potter Series",
      rating: "4/5"
    },
    {
      name: "A Beautiful Mind",
      rating: "4/5"
    }
  ],
  Series: [
    {
      name: "Sherlock",
      rating: "5/5"
    },
    {
      name: "Sacred games",
      rating: "4/5"
    },
    {
      name: "Big Bang Theory",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [activeCategory, setActive] = useState("Football");
  function categoryClickHandler(category) {
    setActive(category);
  }
  return (
    <div className="App">
      <h1>My Rating</h1>
      <p>These are some of my ratings</p>
      <div>
        {Object.keys(categories).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "yellow",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {categories[activeCategory].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid yellow",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item.name} </div>
              <div style={{ fontSize: "smaller" }}> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
