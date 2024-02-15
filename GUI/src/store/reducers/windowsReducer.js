/**
 * 窗口数据store
 */

import { createSlice } from "@reduxjs/toolkit";

const windowsSlice = createSlice({
    name: "windows",
    initialState: {
        clientWidth: 0,
        clientHeight: 0
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