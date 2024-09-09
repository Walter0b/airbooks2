## Table Component Documentation

### Overview

The `Table` component in this documentation serves as a standalone component designed to render tabular data with optional features such as checkboxes and pagination. It provides a flexible and reusable interface for displaying structured data in a web application.

### Usage

To use the `Table` component, import it into your React application and render it with the appropriate props:

```tsx
import Table from './Table' // Replace with actual path

const YourComponent = () => {
    // Example data structure for tableData and columns
    const tableData = {
        data: [
            { id: 1, name: 'John Doe', age: 30, city: 'New York' },
            { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
            // Add more rows as needed
        ],
        // Add metadata if applicable
        meta: {
            filter_count: 10, // Example metadata
        },
    }

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'city', label: 'City' },
        // Add more columns as needed
    ]

    return (
        <Table
            tableData={tableData}
            columns={columns}
            hasCheckbox={true} // Optional: Enable checkboxes
        />
    )
}
```

### Props

| Prop          | Type                | Required | Description                                                                                                          |
| ------------- | ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `tableData`   | `TableItemType`     | Yes      | Object containing `data` (array of objects to render as rows) and optional `meta` (metadata like filter count).      |
| `columns`     | `TableColumnType[]` | Yes      | Array of objects defining table columns. Each object requires a `key` (unique identifier) and `label` (header text). |
| `hasCheckbox` | `boolean`           | No       | Enables checkboxes in the table header and rows for selection. Default is `false`.                                   |

### Components

-   **TableHeader**: Renders the table header with column labels and optionally checkboxes for row selection.
-   **TableBody**: Renders the table rows based on `tableData`, including handling row click events and checkbox states.
-   **Pagination**: Optional component for navigating through pages of data. It requires `tableData.meta.filter_count` for total page calculation.

### Features

-   **Checkbox Selection**: Supports selecting individual rows or all rows using checkboxes in the table header.
-   **Pagination**: If provided with `tableData.meta.filter_count`, the component includes pagination controls.
-   **Dynamic Column Rendering**: Columns are rendered dynamically based on the `columns` prop, allowing flexibility in table structure.

### Example

```tsx
import Table from './Table' // Replace with actual path

const YourComponent = () => {
    // Example data structure for tableData and columns
    const tableData = {
        data: [
            { id: 1, name: 'John Doe', age: 30, city: 'New York' },
            { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
            // Add more rows as needed
        ],
        // Add metadata if applicable
        meta: {
            filter_count: 10, // Example metadata
        },
    }

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'city', label: 'City' },
        // Add more columns as needed
    ]

    return (
        <Table
            tableData={tableData}
            columns={columns}
            hasCheckbox={true} // Optional: Enable checkboxes
        />
    )
}
```

### Considerations

-   **Data Structure**: Ensure `tableData` follows the expected structure (`data` array and optional `meta` object).
-   **Performance**: Handle large datasets efficiently, especially when combined with pagination.
-   **Customization**: Extend functionality by modifying or extending components like `TableHeader`, `TableBody`, and `Pagination` as needed.

### Related Components

-   **TableHeader**: Renders table headers with optional checkbox.
-   **TableBody**: Renders table rows with optional checkboxes and handles row click events.
-   **Pagination**: Provides controls for navigating through pages of data.

### Notes

-   This component assumes usage within a React application.
-   Ensure dependencies (`react`, `react-dom`, etc.) are correctly installed for the component to function.
