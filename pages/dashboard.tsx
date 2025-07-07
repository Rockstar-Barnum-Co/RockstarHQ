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
          Automating preservation, economic empowerment, and smart solutions across borders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Cards for Main Systems */}
          <a
            href="/finance"
            className="bg-slate-800/70 rounded-2xl shadow-lg p-6 hover:scale-105 transition border border-gold-400"
          >
            <h2 className="text-2xl font-bold mb-2">Financial Ops</h2>
            <p className="text-slate-300">
              Stripe, Chase, and global accounts: real-time reporting, revenue streams, compliance.
            </p>
          </a>
          <a
            href="/projects"
            className="bg-slate-800/70 rounded-2xl shadow-lg p-6 hover:scale-105 transition border border-blue-400"
          >
            <h2 className="text-2xl font-bold mb-2">Projects & Work Orders</h2>
            <p className="text-slate-300">
              Manage Preservation STARZ, Phoenecia Online, Smart City, and outreach projects.
            </p>
          </a>
          <a
            href="/admin"
            className="bg-slate-800/70 rounded-2xl shadow-lg p-6 hover:scale-105 transition border border-green-400"
          >
            <h2 className="text-2xl font-bold mb-2">Admin & Automation</h2>
            <p className="text-slate-300">
              System automation, API integrations, alerts, bulk execution, and team onboarding.
            </p>
          </a>
        </div>
      </section>
      <footer className="fixed bottom-0 w-full p-4 text-center text-slate-500 border-t border-slate-800 bg-black/70">
        &copy; {new Date().getFullYear()} Rockstar Barnum & Co. | All Rights Reserved.
      </footer>
    </main>
  );
}
