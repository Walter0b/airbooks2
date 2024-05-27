import { TableDataType } from '@/utils/models/interface/table'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    isOpen: boolean
    data: TableDataType
}

const initialState: ModalState = {
    isOpen: false,
    data: {
        id: 0,
    },
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
            // console.log("🚀 ~ action.payload.data:", action.payload.data)
            state.isOpen = true
        },
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
            state.data = {
                id: 0,
            }
        },
    },
})

export const { openModal, closeModal, openModalWithData } = modalSlice.actions
export default modalSlice.reducer
