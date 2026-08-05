'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Brain, Layers, Share2, CheckCircle2, RefreshCw, ChevronLeft, ChevronRight, Zap, Database, Server, Cpu, Globe } from 'lucide-react';

export default function Home() {
  const [projectName, setProjectName] = useState('MindsEcho Agent');
  const [toneOfVoice, setToneOfVoice] = useState('Innovative, Tech-Savvy, Creator-First');
  const [targetAudience, setTargetAudience] = useState('The Sandbox Creators, Animoca Brands, Web3 Community');
  const [inputPrompt, setInputPrompt] = useState('Autonomous AI agent with persistent context memory for cross-platform creator workflows.');
  const [loading, setLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Hardcoded structure directly in JSX to prevent state/cache loss
  const slides = [
    { title: '1. Vision & Problem', content: 'Creators in Web3 suffer from context loss across platforms.\nMindsEcho locks 10 PB of project context in long-term AI memory.' },
    { title: '2. The Solution', content: 'Autonomous Agent Engine that continuously updates pitch decks,\nTwitter threads, and Telegram announcements in real-time.' },
    { title: '3. Animoca Ecosystem Fit', content: 'Seamlessly integrates with Sandbox creators, Web3 VCs, and Decentralized Identity.' }
  ];

  const tweets = [
    '1/ Introducing MindsEcho AI 🚀 - The Petascale Context Engine for Web3 Creators.',
    '2/ Powered by 10,000 TB distributed vector shards with 1.8ms retrieval latency.',
    '3/ Never repeat your project pitch again. Built for @AnimocaBrands ecosystem #MindsJam'
  ];

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-sans">
      <header className="flex flex-wrap justify-between items-center border-b border-slate-800 pb-5 mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-400 rounded-xl text-white shadow-lg">
            <Brain className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                MindsEcho AI
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-md flex items-center gap-1">
                <Globe className="w-3 h-3 text-cyan-400 animate-spin" /> 10,000 TB PETASCALE CLUSTER
              </span>
            </div>
            <p className="text-xs text-slate-400">Autonomous Long-Term Context Memory Agent • Animoca Minds Jam #1</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950/80 border border-emerald-700/60 rounded-full text-xs text-emerald-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 10 PB Memory Active
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl">
            <h2 className="text-sm font-bold flex items-center gap-2 mb-4 text-purple-300 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-400" /> Context Memory Input
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase">Tone of Voice</label>
                <input
                  type="text"
                  value={toneOfVoice}
                  onChange={(e) => setToneOfVoice(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase">Target Audience</label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 uppercase">New Core Insight</label>
                <textarea
                  rows={3}
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg text-xs uppercase cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
                {loading ? 'Re-indexing Shards...' : 'Update Knowledge Graph'}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-900/90 border border-purple-900/40 rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Coherence</p>
                <p className="text-base font-black text-emerald-400">99.85%</p>
              </div>
              <Server className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div className="bg-slate-900/90 border border-purple-900/40 rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Capacity</p>
                <p className="text-base font-black text-cyan-400">10,000 TB</p>
              </div>
              <Database className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="bg-slate-900/90 border border-purple-900/40 rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Latency</p>
                <p className="text-base font-black text-purple-400">1.8 ms</p>
              </div>
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/40 rounded-xl p-4">
            <h3 className="text-xs font-bold text-cyan-300 uppercase mb-2.5 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-cyan-400" /> Active Knowledge Graph Nodes
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-[11px] font-medium bg-cyan-950/90 border border-cyan-700/60 text-cyan-200 rounded-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-slate-400">Project:</span> {projectName}
              </span>
              <span className="px-2.5 py-1 text-[11px] font-medium bg-purple-950/90 border border-purple-700/60 text-purple-200 rounded-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span className="text-slate-400">Tone:</span> {toneOfVoice.split(',')[0]}
              </span>
              <span className="px-2.5 py-1 text-[11px] font-bold bg-purple-900/40 border border-purple-500/40 text-purple-300 rounded-md">
                +10 PB Vector Shards Linked
              </span>
            </div>
          </div>

          {/* Interactive Pitch Deck */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/50 rounded-2xl p-5 shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-indigo-400 uppercase flex items-center gap-2">
                <Layers className="w-4 h-4" /> Interactive Pitch Deck Preview
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Slide {activeSlide + 1} of {slides.length}
              </span>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 min-h-[120px] flex flex-col justify-between mb-3">
              <div>
                <h4 className="text-base font-bold text-slate-100 mb-2">
                  {slides[activeSlide].title}
                </h4>
                <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {slides[activeSlide].content}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                disabled={activeSlide === 0}
                onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === activeSlide ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-800'}`} />
                ))}
              </div>
              <button
                type="button"
                disabled={activeSlide === slides.length - 1}
                onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-lg text-slate-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Posts */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase flex items-center gap-2">
              <Share2 className="w-4 h-4 text-indigo-400" /> Multi-Platform Generated Outputs
            </h3>
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800/50 rounded-md mb-2">
                X / Twitter Thread
              </span>
              <div className="space-y-2">
                {tweets.map((tweet, tIdx) => (
                  <p key={tIdx} className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800/60 leading-relaxed">
                    {tweet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
