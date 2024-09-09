export const incomeData = {
    categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    values: [
        {
            name: 'Loyal Customers',
            data: [320, 270, 230, 250, 300, 320, 310, 290, 260, 250, 240, 230],
        },
        {
            name: 'New Customers',
            data: [400, 300, 200, 150, 350, 370, 390, 410, 420, 380, 370, 360],
        },
        {
            name: 'Unique Customers',
            data: [200, 240, 290, 270, 250, 260, 280, 290, 300, 290, 270, 260],
        },
    ],
}

export const areaChartData = {
    categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    values: [
        {
            name: 'Product A',
            data: [100, 200, 150, 300, 350, 250, 400, 380, 300, 420, 410, 390],
        },
        {
            name: 'Product B',
            data: [80, 120, 90, 150, 180, 130, 200, 230, 220, 250, 240, 220],
        },
    ],
}

// Donut Chart data
export const expensesData = {
    labels: ['Product 1', 'Product 2'],
    values: [55, 45], // Product 1: 55%, Product 2: 45%
}

// Bar Chart data
export const profitLossData = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    values: [
        { name: 'Profit', data: [40, 60, 55, 45, 70, 65, 75, 85, 90] },
        { name: 'Loss', data: [-20, -15, -25, -10, -30, -25, -35, -30, -40] },
    ],
}

// Summary Cards Data
export const summaryData = [
    {
        title: 'Total Sales',
        value: '$100k',
        subValue: '+8% from yesterday',
        color: 'text-red-500',
    },
    {
        title: 'Total Orders',
        value: '300',
        subValue: '+5% from yesterday',
        color: 'text-yellow-500',
    },
    {
        title: 'Products Sold',
        value: '5',
        subValue: '+1.2% from yesterday',
        color: 'text-green-500',
    },
    {
        title: 'New Customers',
        value: '8,000',
        subValue: '0.5% from yesterday',
        color: 'text-purple-500',
    },
    {
        title: 'Refunds Issued',
        value: '$500',
        subValue: '+2% from yesterday',
        color: 'text-blue-500',
    },
    {
        title: 'Total Revenue',
        value: '$1.5M',
        subValue: '+3% from last week',
        color: 'text-teal-500',
    },
]
