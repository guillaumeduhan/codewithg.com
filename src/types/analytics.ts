export interface Event {
  city: string;
  country: string;
  created_at: string;
  device: string;
  clicks: number;
  referer: string;
  timeSpent: number;
  pageVisited: string;
}

export type TimeRange = '7d' | '30d' | '1y';

export interface ChartData {
  name: string;
  value: number;
}

export interface TimeSeriesData {
  date: string;
  events: number;
}