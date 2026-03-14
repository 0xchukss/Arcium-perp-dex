export interface Position {
  id: string;
  symbol: string;
  side: 'long' | 'short';
  size: number;
  leverage: number;
  entryPrice: number;
  markPrice: number;
  pnl: number;
  pnlPercentage: number;
}

export interface Market {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: number;
  fundingRate: number;
}

export type OrderType = 'market' | 'limit';
