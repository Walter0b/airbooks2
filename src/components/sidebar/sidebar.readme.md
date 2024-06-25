# Sidebar Component Documentation

## Overview

The `Sidebar` component is a versatile and compact navigation sidebar used in your application. It can be toggled between a compact and expanded state and includes navigation items that can open modals.

### Importing Sidebar

```tsx
import Sidebar from '@/components/Sidebar'
```

## Context-Dependent Usage

The `Sidebar` component does not rely on any external context for its data and configuration.

## Subcomponents

The `Sidebar` component includes several subcomponents that are used internally and are not designed to be used independently.

### VerticalArrowIcon

A button used to toggle the sidebar between compact and expanded states.

### NavOption

Handles the rendering of fixed navigation options at the top of the sidebar.

### SideBarItems

Renders the navigation items within the sidebar.

## Detailed Description

### Sidebar Component

The main container for the sidebar navigation. It includes the `NavOption` component at the top, followed by the `SideBarItems`, and a `VerticalArrowIcon` at the bottom for toggling the sidebar.

#### Props

- `navigation`: An array of navigation items of type `SidebarItemType`.

### Example Usage

```tsx
import Sidebar from '@/components/Sidebar'
import { SidebarItemType } from '@/utils/models/interface/table'

const navigationData: SidebarItemType[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon,
    },
    {
        label: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
    },
    // more items...
]

const App = () => <Sidebar navigation={navigationData} />

export default App
```

### VerticalArrowIcon Component

A simple button that toggles the sidebar between compact and expanded states.

#### Props

- `isOpen`: A boolean indicating whether the sidebar is in compact state.
- `setIsOpen`: A function to toggle the compact state of the sidebar.

### Example Usage

```tsx
import VerticalArrowIcon from '@/components/Sidebar/VerticalArrowIcon'

const [isCompact, setIsCompact] = useState(false)

return <VerticalArrowIcon isOpen={isCompact} setIsOpen={setIsCompact} />
```

### NavOption Component

Renders fixed navigation options at the top of the sidebar, such as links to the core and report sections.

### Example Usage

```tsx
import NavOption from '@/components/Sidebar/NavOption'

return <NavOption />
```

### SideBarItems Component

Renders the list of navigation items within the sidebar.

#### Props

- `navigation`: An array of navigation items of type `SidebarItemType`.
- `isCompact`: A boolean indicating whether the sidebar is in compact state.

### Example Usage

```tsx
import SideBarItems from '@/components/Sidebar/SideBarItems'
import { SidebarItemType } from '@/utils/models/interface/table'

const navigationData: SidebarItemType[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon,
    },
    {
        label: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
    },
    // more items...
]

return <SideBarItems navigation={navigationData} isCompact={false} />
```

## Redux Integration

The `Sidebar` component uses Redux for state management, particularly for opening and closing modals triggered by sidebar navigation items.

### Example Redux Slice

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableDataType } from '@/utils/models/interface/table'

interface ModalState {
    isOpen: boolean
    data: TableDataType
}

const initialState: ModalState = {
    isOpen: false,
    data: { id: 0 },
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalWithData: (
            state,
            action: PayloadAction<{ data: TableDataType }>
        ) => {
            state.data = action.payload.data
            state.isOpen = true
        },
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
            state.data = { id: 0 }
        },
    },
})

export const { openModal, closeModal, openModalWithData } = modalSlice.actions
export default modalSlice.reducer
```

### Example Redux Store Setup

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
