import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = Array.from({ length: 40 }, (_, i) => ({
  time: `${10 + Math.floor(i / 4)}:${(i % 4) * 15}`,
  price: 64000 + Math.random() * 2000 - 1000,
}));

export default function PriceChart({ symbol }: { symbol: string }) {
  return (
    <div className="h-full w-full bg-[#0B0E11] p-4 rounded-xl border border-white/5 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white">{symbol}/USDC</h2>
          <span className="text-emerald-400 font-mono">$64,231.50</span>
          <span className="text-emerald-400 text-sm font-mono">+2.45%</span>
        </div>
        <div className="flex gap-2">
          {['1m', '5m', '15m', '1h', '4h', '1D'].map((tf) => (
            <button 
              key={tf} 
              className={`px-2 py-1 text-xs rounded ${tf === '15m' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#4b5563" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
            />
            <YAxis 
              domain={['auto', 'auto']} 
              stroke="#4b5563" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              orientation="right"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
              itemStyle={{ color: '#10b981' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#10b981" 
              fillOpacity={1} 
              fill="url(#colorPrice)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
