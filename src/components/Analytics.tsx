"use client";

import { BarChartComponent } from '@/components/Analytics/BarChart.tsx';
import { LineChartComponent } from '@/components/Analytics/LineChart.tsx';
import { Event, TimeRange } from "@/types/analytics";
import { useState } from "react";
import { RadialChartComponent } from './Analytics/RadialChart';

interface AnalyticsProps {
  events?: Event[];
}

export function AnalyticsComponent({ events = [] }: AnalyticsProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");

  return (
    <div className="p-8 space-y-8">
      <LineChartComponent
        data={[]}
        className="h-[300px]"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <BarChartComponent />
        <RadialChartComponent />
      </div>
    </div>
  );
}