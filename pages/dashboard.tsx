import React from "react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans">
      <header className="flex items-center justify-between p-6 border-b border-slate-800 shadow">
        <div className="flex items-center gap-4">
          <img
            src="/rockstarbarnum-logo.png"
            alt="Rockstar Barnum & Co."
            className="h-10 w-10 rounded-full border border-gold-400 shadow-xl"
          />
          <span className="text-2xl font-bold tracking-tight">Rockstar Barnum & Co. HQ</span>
        </div>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-gold-400 transition">Home</a>
          <a href="/about" className="hover:text-gold-400 transition">About</a>
          <a href="/projects" className="hover:text-gold-400 transition">Projects</a>
          <a href="/contact" className="hover:text-gold-400 transition">Contact</a>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
          Welcome to the Rockstar Barnum & Co. Dashboard
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-10 text-slate-300">
          Mission control for global operations, project management, and financial oversight.<br />
          Automating
