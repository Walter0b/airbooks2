// app/page.tsx
'use client'
import AreaChart from '@/components/charts/areaChart';
import BarChart from '@/components/charts/barChart';
import DonutChart from '@/components/charts/donutChart';
import LineChart from '@/components/charts/lineChart';
import DateRangePicker from '@/components/ui/dateRangePicker';
import SummaryCard from '@/components/ui/summaryCard';
import { areaChartData, expensesData, incomeData, profitLossData, summaryData } from '@/utils/mock/data/page/dashboard';
import React from 'react'

const HomePage = () => {
   

    return (
        <div className="text-black/80 p-6 overflow-auto size-full">
            {/* Date Range Picker */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Today's Reports</h2>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Export</button>
            </div>

            <DateRangePicker />

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-6">
                {summaryData.map((card, index) => (
                    <SummaryCard
                        key={index}
                        title={card.title}
                        value={card.value}
                        subValue={card.subValue}
                        color={card.color}
                    />
                ))}
            </div>

            {/* Customers and Suppliers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-gray-500 text-sm font-medium">Customers</h3>
                    <p className="text-2xl font-semibold">XOF 28,945,123.1</p>
                    <p className="text-xs text-gray-400">Current: XOF 11,426,016.22</p>
                    <p className="text-xs text-orange-500">Overdue: XOF 11,426,016.22</p>
                    <p className="text-xs text-green-500">Unused Credit: XOF 11,426,016.22</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-gray-500 text-sm font-medium">Suppliers</h3>
                    <p className="text-2xl font-semibold">XOF 28,945,123.1</p>
                    <p className="text-xs text-gray-400">Current: XOF 11,426,016.22</p>
                    <p className="text-xs text-orange-500">Overdue: XOF 11,426,016.22</p>
                    <p className="text-xs text-green-500">Unused Credit: XOF 11,426,016.22</p>
                </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full">
                    <AreaChart categories={areaChartData.categories} seriesData={areaChartData.values} />
                </div>
                <div className="w-full">
                    <LineChart categories={incomeData.categories} seriesData={incomeData.values} />
                </div>
            </div>

            {/* Donut Chart (Expenses) and Bar Chart (Profit & Loss) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <DonutChart labels={expensesData.labels} seriesData={expensesData.values} />
                <BarChart categories={profitLossData.categories} seriesData={profitLossData.values} />
            </div>
        </div>
    );
}

export default HomePage
