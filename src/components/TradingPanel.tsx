import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Info } from 'lucide-react';

export default function TradingPanel() {
  const [side, setSide] = useState<'long' | 'short'>('long');
  const [leverage, setLeverage] = useState(10);
  const [amount, setAmount] = useState('');

  return (
    <div className="w-full bg-[#0B0E11] p-4 rounded-xl border border-white/5 flex flex-col gap-4">
      <div className="flex p-1 bg-black/40 rounded-lg">
        <button
          onClick={() => setSide('long')}
          className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${
            side === 'long' 
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          Long
        </button>
        <button
          onClick={() => setSide('short')}
          className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all ${
            side === 'short' 
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' 
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          Short
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs text-gray-500 uppercase font-bold tracking-wider">
          <span>Order Type</span>
          <Settings size={14} className="cursor-pointer hover:text-gray-300" />
        </div>
        <select className="bg-black/40 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-emerald-500/50">
          <option>Market</option>
          <option>Limit</option>
          <option>Trigger</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs text-gray-500 uppercase font-bold tracking-wider">
          <span>Amount</span>
          <span className="text-emerald-500/80">Max: 1,240.50 USDC</span>
        </div>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 pr-16 text-white focus:outline-none focus:border-emerald-500/50"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">USDC</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-xs text-gray-500 uppercase font-bold tracking-wider">
          <span>Leverage</span>
          <span className="text-white">{leverage}x</span>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          value={leverage}
          onChange={(e) => setLeverage(parseInt(e.target.value))}
          className="w-full accent-emerald-500 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-600 font-mono">
          <span>1x</span>
          <span>10x</span>
          <span>25x</span>
          <span>50x</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-black/20 rounded-lg border border-white/5 flex flex-col gap-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-500">Entry Price</span>
          <span className="text-gray-300">$64,231.50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Liq. Price</span>
          <span className="text-rose-400">$58,120.40</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fees</span>
          <span className="text-gray-300">0.05 USDC</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-bold text-lg mt-2 transition-all shadow-xl ${
          side === 'long' 
            ? 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/20' 
            : 'bg-rose-500 hover:bg-rose-400 shadow-rose-500/20'
        }`}
      >
        {side === 'long' ? 'Buy / Long' : 'Sell / Short'}
      </motion.button>

      <div className="flex items-center gap-2 justify-center text-[10px] text-gray-600 mt-2 uppercase tracking-widest font-bold">
        <Info size={10} />
        Confidential Execution via Arcium
      </div>
    </div>
  );
}
