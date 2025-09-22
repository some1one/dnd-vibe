import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  initialized: boolean;
  theme: 'light' | 'dark' | 'system';
}

const initialState: AppState = {
  initialized: false,
  theme: 'system'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialized(state: AppState, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
    setTheme(state: AppState, action: PayloadAction<AppState['theme']>) {
      state.theme = action.payload;
    }
  }
});

export const { setInitialized, setTheme } = appSlice.actions;
export default appSlice.reducer;
