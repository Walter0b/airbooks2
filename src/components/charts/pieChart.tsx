
"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface PieChartProps {
    labels: string[];
    seriesData: number[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, seriesData }) => {
    const chartOptions: ApexOptions = useMemo(
        () => ({
            labels,
            chart: {
                type: "pie",
                height: 350,
            },
            dataLabels: {
                enabled: true,
            },
        }),
        [labels]
    );

    return <Chart options={chartOptions} series={seriesData} type="pie" height={350} />;
};

export default PieChart;
