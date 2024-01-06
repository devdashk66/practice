"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(false);

  const showName = () => {
    setName(!name);
  };
  return (
    <>
      <main>
        <p className="text-4xl">My name is {name && "Dev"}</p>
        <button className="px-2 py-2 bg-slate-600 mt-6" onClick={showName}>
          {!name ? "Click to show" : "Click to hide"}
        </button>
      </main>
    </>
  );
}
