import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TravelersDataType } from '@/utils/models/interface/table';

interface ModalState {
    isOpen: boolean;
    data?: TravelersDataType;
}

const initialState: ModalState = {
    isOpen: false,
    data: undefined,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<TravelersDataType>) => {
            state.isOpen = true;
            state.data = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.data = undefined;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;