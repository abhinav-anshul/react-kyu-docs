"use client"
import Image from "next/image"
import { Inter } from "next/font/google"
import { Toaster, toast } from "react-kyu"
import Highlight from "react-highlight"
import "highlight.js/styles/base16/grayscale-light.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <div style={{ fontSize: "12rem", textAlign: "center" }}>Kyū</div>
      <div className="text-center text-gray-400">A super tiny React Toast library</div>
      <br />
      <Toaster theme="light" />
      <div className="text-center">
        Create a{" "}
        <button
          onClick={() => toast("Well, Hello There!")}
          className="bg-slate-950 text-white px-4 rounded-md"
        >
          Toast
        </button>
      </div>
      <br />
      <div className="py-1 font-medium">Installation</div>
      <input
        className="bg-slate-100"
        style={{
          width: "100%",
          border: "1px solid gray",
          borderRadius: "8px",
          outline: "none",
          padding: "0.5rem 1rem",
        }}
        value="npm i react-kyu"
        type="text"
      />
      <br />
      <br />
      <div className="py-1 font-medium">Usage</div>
      <div className="py-4">Add {"<Toaster />"} to any React component. Create a Toast using `toast` API</div>
      
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{backgroundColor : "#f7f7f7", width : "fit-content", padding : "0.2rem 1rem"}}>index.jsx</div>
        {/* @ts-ignore */}
        <Highlight language="js">
{`import React from "react"
import ReactDOM from "react-dom/client" 
import { Toaster, toast } from "react-kyu"
const root = ReactDOM.createRoot(document.getElementById("root")) 
          
root.render(
<main>
  <Toaster />
  <button onClick={() => toast("toasted")}>Click</button>
</main>)`}
        </Highlight>
      </div>

    </main>
  )
}
