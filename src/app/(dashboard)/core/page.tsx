// app/page.tsx

import ChartComponent from '@/components/charts/pie'
import React from 'react'

const HomePage = () => {
    // Example data
    const data = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [30, 50, 45, 60, 70, 55],
    }

    return (
        <div>
            <h1>ApexCharts in Next.js 14 App Directory</h1>
            <ChartComponent
                categories={data.categories}
                seriesData={data.values}
            />
        </div>
    )
}

export default HomePage
