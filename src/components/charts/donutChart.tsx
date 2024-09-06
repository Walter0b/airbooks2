'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DonutChartProps {
  labels: string[];
  seriesData: number[];
}

const DonutChart: React.FC<DonutChartProps> = ({ labels, seriesData }) => {
  const chartOptions: ApexOptions = useMemo(
    () => ({
      chart: {
        type: 'donut',
      },
      labels: labels,
      colors: ['#008FFB', '#00E396'],
    }),
    [labels]
  );

  return <Chart options={chartOptions} series={seriesData} type="donut" height={350} />;
};

export default DonutChart;
