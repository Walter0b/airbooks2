'use client'

import React, { useMemo, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ChartProps {
    categories: string[]
    seriesData: { name: string; data: number[] }[]
}

const LineChart: React.FC<ChartProps> = ({ categories, seriesData }) => {
    const [isZoomEnabled, setIsZoomEnabled] = useState(false)

    // Enable zoom only when the Ctrl key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey || event.metaKey) {
            setIsZoomEnabled(true)
        }
    }

    const handleKeyUp = () => {
        setIsZoomEnabled(false)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    const chartOptions: ApexOptions = useMemo(
        () => ({
            chart: {
                type: 'line',
                height: 350,
                zoom: {
                    enabled: isZoomEnabled,
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
            tooltip: {
                shared: true,
                intersect: false,
            },
        }),
        [categories, isZoomEnabled]
    )

    const series = useMemo(() => seriesData, [seriesData])

    return (
        <Chart
            options={chartOptions}
            series={series}
            type="line"
            height={350}
        />
    )
}

export default LineChart
