import React, { useState } from 'react';
import { Position } from '../types';
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';

const mockPositions: Position[] = [
  {
    id: '1',
    symbol: 'BTC',
    side: 'long',
    size: 0.25,
    leverage: 10,
    entryPrice: 63200.50,
    markPrice: 64231.50,
    pnl: 257.75,
    pnlPercentage: 1.63
  },
  {
    id: '2',
    symbol: 'ETH',
    side: 'short',
    size: 4.2,
    leverage: 5,
    entryPrice: 3450.20,
    markPrice: 3412.80,
    pnl: 157.08,
    pnlPercentage: 1.08
  }
];

export default function PositionsTable() {
  const [activeTab, setActiveTab] = useState<'positions' | 'orders' | 'history'>('positions');

  return (
    <div className="bg-[#0B0E11] rounded-xl border border-white/5 overflow-hidden flex flex-col">
      <div className="flex border-b border-white/5 px-4">
        {['positions', 'orders', 'history'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all relative ${
              activeTab === tab ? 'text-emerald-500' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
            )}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-gray-500 uppercase font-bold tracking-tighter border-b border-white/5 bg-black/20">
              <th className="px-6 py-3">Market</th>
              <th className="px-6 py-3">Size</th>
              <th className="px-6 py-3">Entry/Mark</th>
              <th className="px-6 py-3">Liq. Price</th>
              <th className="px-6 py-3">PnL</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mockPositions.map((pos) => (
              <tr key={pos.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{pos.symbol}/USDC</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                      pos.side === 'long' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                    }`}>
                      {pos.leverage}x {pos.side}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {pos.size} {pos.symbol}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-gray-300">${pos.entryPrice.toLocaleString()}</span>
                    <span className="text-gray-500 text-[10px]">${pos.markPrice.toLocaleString()}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-rose-400 font-mono">
                  ${(pos.entryPrice * 0.92).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className={pos.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                      {pos.pnl >= 0 ? '+' : ''}{pos.pnl.toFixed(2)} USDC
                    </span>
                    <span className={`text-[10px] ${pos.pnl >= 0 ? 'text-emerald-500/60' : 'text-rose-500/60'}`}>
                      ({pos.pnlPercentage.toFixed(2)}%)
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink size={14} />
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1 rounded font-bold transition-all">
                      Close
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
