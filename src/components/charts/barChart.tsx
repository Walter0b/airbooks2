'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartProps {
  categories: string[];
  seriesData: { name: string; data: number[] }[];
}

const BarChart: React.FC<BarChartProps> = ({ categories, seriesData }) => {
  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      colors: ['#00E396', '#FF4560'],
    }),
    [categories]
  );

  return <Chart options={chartOptions} series={seriesData} type="bar" height={350} />;
};

export default BarChart;
