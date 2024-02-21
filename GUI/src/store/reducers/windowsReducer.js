/**
 * 窗口数据store
 */

import { createSlice } from "@reduxjs/toolkit";

const windowsSlice = createSlice({
    name: "windows",
    initialState: {
        clientWidth: window.innerWidth,
        clientHeight: window.innerHeight
    },
    reducers: {
        resize: (state) => {
            // 窗口缩放
            state.clientWidth = window.innerWidth;
            state.clientHeight = window.innerHeight;
        }
    }
})

export const { resize } = windowsSlice.actions;
export default windowsSlice.reducer;