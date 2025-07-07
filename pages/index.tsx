import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Rockstar Barnum & Co.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Global operations. Smart Preservation. AI-driven infrastructure. From Bridgeport to Beirut, we're automating the future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/dashboard" className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold">
            Enter Dashboard
          </a>
          <a href="/about" className="px-6 py-3 bg-slate-800 border border-slate-600 rounded-xl hover:bg-slate-700 transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h2 className="text-xl font-bold mb-2">🔥 Smart Preservation</h2>
          <p className="text-slate-300">
            Historical and cultural preservation through edge tech, AAPM kiosks, and AI-guided restoration. Operating across Gaza, Bridgeport, Tyre.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h2 className="text-xl font-bold mb-2">💰 Global Remittance</h2>
          <p className="text-slate-300">
            Secure Stripe-integrated payment infrastructure in conflict zones with local partner rail support and transparent compliance.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h2 className="text-xl font-bold mb-2">🧠 AI Automation</h2>
          <p className="text-slate-300">
            Real-time data, bots, and Firebase/Vercel integrations streamline workflows, outreach, and economic development tools.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Rockstar Barnum & Co. | Built for the diaspora, by the diaspora.
      </footer>
    </main>
  );
}
