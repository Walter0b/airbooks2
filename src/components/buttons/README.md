# Buttons Component

The `Buttons` component is a customizable button component that can include a dropdown menu. It supports various configurations, including custom styles and event handlers.

## Props

| Prop                | Type                                      | Default Value                                                                                                                    | Description                                                       |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `children`          | `React.ReactNode`                         | -                                                                                                                                | The content to be displayed inside the button.                    |
| `arrowClassName`    | `string`                                  | `'group-hover/button:!fill-cyan-550 fill-gray-500 ml-1 mt-[7px]'`                                                                | Custom class name for the arrow icon.                             |
| `hasDropdownIcon`   | `boolean`                                 | `false`                                                                                                                          | If `true`, an arrow icon will be displayed indicating a dropdown. |
| `onClick`           | `(() => void) \| undefined`               | -                                                                                                                                | Click handler for the button.                                     |
| `className`         | `string`                                  | `'w-full mt-1 items-start justify-between hover:text-cyan-550 gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-500 text-lg'` | Custom class name for the button.                                 |
| `setSelectedOption` | `((option: string) => void) \| undefined` | -                                                                                                                                | Function to handle the selection of an option from the dropdown.  |
| `dropdownOptions`   | `DropdownItemType[] \| undefined`         | -                                                                                                                                | Array of options to be displayed in the dropdown.                 |
| `dropdownClassName` | `string`                                  | -                                                                                                                                | Custom class name for the dropdown container.                     |
| `dropdownText`      | `string`                                  | -                                                                                                                                | Custom text to be displayed in the dropdown options.              |
| `dropdownTitles`    | `string`                                  | -                                                                                                                                | Custom titles to be displayed in the dropdown options.            |

## Usage

```jsx
import Buttons from './Buttons';
import { DropdownItemType } from '@/utils/models/interface/table';

const dropdownOptions: DropdownItemType[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
];

<Buttons
    onClick={() => console.log('Button clicked')}
    hasDropdownIcon={true}
    dropdownOptions={dropdownOptions}
    setSelectedOption={(option) => console.log('Selected option:', option)}
>
    Click Me
</Buttons>


## Notes

- The component uses a `useCallback` hook to handle button clicks and dropdown toggle for performance optimization.
- Clicking outside the dropdown will close it, achieved using the `useEffect` hook.

```

### `Lookup` Component

````markdown
# Lookup Component

The `Lookup` component is an input field with a dropdown for selecting options. It allows filtering options based on user input and handles selection events.

## Props

| Prop                         | Type                                              | Default Value                                                                                                                    | Description                                                      |
| ---------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `required`                   | `boolean`                                         | `false`                                                                                                                          | If `true`, the input field will be marked as required.           |
| `value`                      | `string \| undefined`                             | -                                                                                                                                | The initial value of the input field.                            |
| `lookupOptions`              | `[]`                                              | -                                                                                                                                | **Deprecated.** Please use `options` instead.                    |
| `containerClassName`         | `string`                                          | `'w-full mt-1 items-start justify-between hover:text-cyan-550 gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-500 text-lg'` | Custom class name for the input container.                       |
| `handleSelectOption`         | `((selectedOption: string) => void) \| undefined` | -                                                                                                                                | Function to handle the selection of an option from the dropdown. |
| `options`                    | `DropdownItemType[] \| undefined`                 | -                                                                                                                                | Array of options to be displayed in the dropdown.                |
| `dropdownContainerClassName` | `string`                                          | -                                                                                                                                | Custom class name for the dropdown container.                    |
| `dropdownWidth`              | `number \| string \| undefined`                   | -                                                                                                                                | Width of the dropdown container.                                 |

## Usage

```jsx
import { Lookup } from './Lookup';
import { DropdownItemType } from '@/utils/models/interface/table';

const options: DropdownItemType[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
];

<Lookup
    handleSelectOption={(selectedOption) => console.log('Selected option:', selectedOption)}
    options={options}
    dropdownWidth="200px"
/>
```
````

## Notes

-   The component uses a `useState` hook to manage the open/close state of the dropdown.
-   Clicking outside the dropdown will close it, achieved using the `useEffect` hook.
-   The `usePeroxideState` hook is used for managing the selected option state.
