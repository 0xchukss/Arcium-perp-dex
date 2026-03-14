import React from 'react';
import Navbar from './components/Navbar';
import PriceChart from './components/PriceChart';
import TradingPanel from './components/TradingPanel';
import PositionsTable from './components/PositionsTable';
import { Activity, BarChart3, Clock, Zap, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="max-w-[1800px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Market Stats Bar */}
        <div className="lg:col-span-12 flex flex-wrap gap-6 p-4 bg-[#0B0E11] rounded-xl border border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest flex items-center gap-1">
              <Activity size={10} /> 24h Volume
            </span>
            <span className="text-sm font-bold text-white">$1,245,678,901.40</span>
          </div>
          <div className="w-px h-8 bg-white/5 hidden sm:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest flex items-center gap-1">
              <Zap size={10} /> Funding Rate
            </span>
            <span className="text-sm font-bold text-emerald-400">0.0100% / 1h</span>
          </div>
          <div className="w-px h-8 bg-white/5 hidden sm:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest flex items-center gap-1">
              <BarChart3 size={10} /> Open Interest
            </span>
            <span className="text-sm font-bold text-white">$452.1M</span>
          </div>
          <div className="w-px h-8 bg-white/5 hidden sm:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest flex items-center gap-1">
              <ShieldCheck size={10} className="text-emerald-500" /> Confidentiality Score
            </span>
            <span className="text-sm font-bold text-emerald-500">99.9%</span>
          </div>
        </div>

        {/* Left Column: Chart & Positions */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          <div className="h-[500px]">
            <PriceChart symbol="BTC" />
          </div>
          <PositionsTable />
        </div>

        {/* Right Column: Trading Panel */}
        <div className="lg:col-span-3">
          <div className="sticky top-24">
            <TradingPanel />
            
            {/* Recent Trades / Orderbook Mock */}
            <div className="mt-6 bg-[#0B0E11] rounded-xl border border-white/5 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Recent Trades</h3>
                <Clock size={12} className="text-gray-600" />
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { price: 64231.5, size: 0.05, time: '12:45:01', side: 'buy' },
                  { price: 64230.2, size: 1.2, time: '12:44:58', side: 'sell' },
                  { price: 64232.1, size: 0.45, time: '12:44:55', side: 'buy' },
                  { price: 64231.8, size: 0.1, time: '12:44:52', side: 'buy' },
                  { price: 64229.5, size: 2.5, time: '12:44:49', side: 'sell' },
                ].map((trade, i) => (
                  <div key={i} className="flex justify-between text-[10px] font-mono">
                    <span className={trade.side === 'buy' ? 'text-emerald-400' : 'text-rose-400'}>
                      ${trade.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500">{trade.size} BTC</span>
                    <span className="text-gray-600">{trade.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-10 border-t border-white/5 bg-[#0B0E11] px-6 flex items-center justify-between text-[10px] font-mono text-gray-600">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            RPC: STABLE
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            LATENCY: 12ms
          </div>
        </div>
        <div className="flex gap-4">
          <span>v1.0.4-beta</span>
          <span className="text-emerald-500/50">POWERED BY ARCIUM</span>
        </div>
      </footer>
    </div>
  );
}
