import React from 'react';
import { Shield, Wallet, ChevronDown, Activity, Globe, Lock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-white/5 bg-[#0B0E11] px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
            <Shield className="text-black" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">ARCIUM<span className="text-emerald-500">DEX</span></span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="text-white hover:text-emerald-400 transition-colors">Trade</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Pools</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Stats</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Docs</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 bg-black/40 rounded-full border border-white/5 text-[10px] font-mono text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            NETWORK: ARCIUM MAINNET
          </div>
          <div className="w-px h-3 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <Lock size={10} className="text-emerald-500" />
            CONFIDENTIAL MODE: ON
          </div>
        </div>

        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-emerald-500/10">
          <Wallet size={16} />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
