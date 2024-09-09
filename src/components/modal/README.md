# Modal Component Documentation

## Overview

The `Modal` component is a reusable component that displays a modal dialog. This dialog includes a header with a title and a close button, a set of tabs for navigating different sections of the form, and a dynamic form that adapts to the provided configuration. The modal also includes footer buttons for saving or canceling the form.

### Importing Modal

```tsx
import Modal from '@/components/Modal'
```

## Context-Dependent Usage

The `Modal` component relies entirely on context for its data and configuration. This includes the modal title, form data, and any additional settings.

## Subcomponents

The `Modal` component includes several subcomponents that are used internally and are not designed to be used independently.

### CloseButton

A button used to close the modal.

### Tabs

Handles the rendering of tabs within the modal to switch between different sections of the form.

### DynamicForm

Renders the form based on the provided form configuration.

### Fields Components

A set of field components used within `DynamicForm` to render individual form fields.

## Detailed Description

### Modal Component

The main container for the modal dialog. It includes a header, tabs for navigation, a dynamic form, and footer buttons.

#### Usage

The `Modal` component does not accept any props. Instead, it relies on data provided via context.

### Example Usage

```tsx
import Modal from '@/components/Modal'
import { ModalContext } from '@/hooks/context/ModalContext'

const modalData = {
    title: 'User Form',
    InputFields: [
        {
            label: 'Personal Information',
            tabs: [
                { id: 'name', label: 'Name', type: 'input', required: true },
                { id: 'age', label: 'Age', type: 'input' },
            ],
        },
        {
            label: 'Address',
            tabs: [
                {
                    id: 'street',
                    label: 'Street',
                    type: 'input',
                    required: true,
                },
                { id: 'city', label: 'City', type: 'input' },
            ],
        },
    ],
}

const App = () => (
    <ModalContext.Provider value={modalData}>
        <Modal />
    </ModalContext.Provider>
)

export default App
```

### CloseButton Component

A simple button that closes the modal when clicked.

#### Props

-   `onClick`: A function to handle the click event.
-   `color`: A string to set the color of the button.

### Tabs Component

Handles tab navigation within the modal. When a tab is clicked, the corresponding section of the form is displayed.

#### Props

-   `formData`: An array of form data objects used to configure the form.
-   `setFormData`: A function to update the form data.

### DynamicForm Component

Renders the form based on the provided configuration. It uses various field components to render different types of form inputs.

#### Props

-   `items`: An array of form configuration objects.
-   `FieldsValue`: An object that holds the state of the form fields.

### Field Components

A set of components used to render individual form fields within `DynamicForm`.

#### Available Field Components

-   `input`: Renders an input field.
-   `textarea`: Renders a textarea field.
-   `select`: Renders a select dropdown.
-   `lookup`: Renders a lookup dropdown.
-   `space`: Renders a space (empty div).

#### Example Field Configuration

```javascript
const formConfiguration = [
    {
        label: 'Personal Information',
        fields: [
            { id: 'name', label: 'Name', type: 'input', required: true },
            { id: 'age', label: 'Age', type: 'input' },
        ],
    },
    {
        label: 'Address',
        fields: [
            { id: 'street', label: 'Street', type: 'input', required: true },
            { id: 'city', label: 'City', type: 'input' },
        ],
    },
]
```

### Lookup Component

A custom dropdown component that allows for searching and selecting from a list of options.

#### Props

-   `required`: A boolean to indicate if the field is required.
-   `value`: The current value of the lookup field.
-   `lookupOptions`: An array of options for the dropdown.
-   `containerClassName`: A string to set the CSS class for the container.
-   `handleSelectOption`: A function to handle the selection of an option.
-   `options`: An array of options for the dropdown.
-   `dropdownContainerClassName`: A string to set the CSS class for the dropdown container.
-   `dropdownWidth`: A string or number to set the width of the dropdown.

### Example Usage

```jsx
<Lookup
    required={true}
    value={selectedValue}
    options={lookupOptions}
    handleSelectOption={(value) => setSelectedValue(value)}
/>
```

## Context Usage

The `Modal` component utilizes the `ModalContext` to get the input fields configuration and modal title.

### Example Context Setup

```javascript
import React, { createContext } from 'react'

export const ModalContext = createContext({
    title: '',
    InputFields: [],
})

const App = () => {
    const modalData = {
        title: 'Edit Item',
        InputFields: [
            {
                label: 'General',
                tabs: [
                    {
                        id: 'name',
                        label: 'Name',
                        type: 'input',
                        required: true,
                    },
                    {
                        id: 'description',
                        label: 'Description',
                        type: 'textarea',
                    },
                ],
            },
            // other tabs
        ],
    }

    return (
        <ModalContext.Provider value={modalData}>
            <Modal />
        </ModalContext.Provider>
    )
}

export default App
```

## Redux Usage

The `Modal` component uses Redux for state management, particularly for opening and closing the modal and accessing modal data.

### Redux Slice Example

```javascript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableDataType } from '@/utils/models/interface/table';

interface ModalState {
    isOpen: boolean;
    data: TableDataType;
}

const initialState: ModalState = {
    isOpen: false,
    data: { id: 0 },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalWithData: (state, action: PayloadAction<{ data: TableDataType }>) => {
            state.data = action.payload.data;
            state.isOpen = true;
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.data = { id: 0 };
        },
    },
});

export const { openModal, closeModal, openModalWithData } = modalSlice.actions;
export default modalSlice.reducer;
```

### Redux Store Setup

```tsx
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { api } from './reducer/apiSlice'
import modalReducer from './reducer/modalSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware)
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```
