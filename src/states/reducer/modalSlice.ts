import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    isOpen: boolean;
    data: unknown;
}

const initialState: ModalState = {
    isOpen: false,
    data: undefined
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalWithData: (state, action: PayloadAction<ModalState>) => {
            state.data = action.payload.data;
            state.isOpen = true;
        },
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.data = undefined;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;