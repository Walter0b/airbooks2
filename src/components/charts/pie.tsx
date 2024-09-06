"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import the ApexChart to disable SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Define the props for the ChartComponent
interface ChartProps {
    categories: string[];
    seriesData: number[];
}

const ChartComponent: React.FC<ChartProps> = ({ categories, seriesData }) => {
    const chartOptions: ApexOptions = useMemo(
        () => ({
            chart: {
                type: "line",
                height: 350,
            },
            xaxis: {
                categories,
            },
            stroke: {
                curve: "smooth",
            },
            dataLabels: {
                enabled: false,
            },
        }),
        [categories]
    );

    const series = useMemo(
        () => [
            {
                name: "Data Series",
                data: seriesData,
            },
        ],
        [seriesData]
    );

    return (
        <Chart
            options={chartOptions}  // No space between the equals sign and the curly braces
            series={series}
            type="line"
            height={350}
        />
    );
};

export default ChartComponent;
