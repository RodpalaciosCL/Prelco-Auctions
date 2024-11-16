export interface AuctionItem {
  id: string;
  title: string;
  currentBid: number;
  startingBid: number;
  imageUrl: string;
  endTime: string;
  bids: number;
  category: string;
  condition: string;
  description: string;
  status: 'active' | 'ended';
  endDate?: string;
  winningBid?: number;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  condition: string;
  status: string;
}