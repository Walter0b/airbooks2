'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface AreaChartProps {
    categories: string[];
    seriesData: { name: string; data: number[] }[];
}

const AreaChart: React.FC<AreaChartProps> = ({ categories, seriesData }) => {
    const [isZoomEnabled, setIsZoomEnabled] = useState(false);

    // Enable zoom only when the Ctrl key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey || event.metaKey) {
            setIsZoomEnabled(true);
        }
    };

    const handleKeyUp = () => {
        setIsZoomEnabled(false);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const chartOptions: ApexOptions = useMemo(
        () => ({
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: isZoomEnabled, // Zoom is enabled only when Ctrl is pressed
                },
            },
            xaxis: {
                categories,
            },
            stroke: {
                curve: 'smooth',
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                },
            },
        }),
        [categories, isZoomEnabled]
    );

    const series = useMemo(() => seriesData, [seriesData]);

    return <Chart options={chartOptions} series={series} type="area" height={350} />;
};

export default AreaChart;


