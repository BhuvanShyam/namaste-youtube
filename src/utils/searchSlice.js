import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // Directly mutating the state using Immer
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer; // Ensure to export the reducer

/**Cache!!
 * where are those people who tell data structure is not important?
 * tc to search in array is O(n)
 * tc to serach in map is O(1) --> faster
 * new Map();
 *
 */
