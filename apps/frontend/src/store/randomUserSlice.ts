import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomUserDetails } from '@randomuser/shared/types';

interface RandomUserState {
  randomUsers: RandomUserDetails[];
  dbUsers: RandomUserDetails[];
  previewUser: RandomUserDetails | null;
  error: string | null;
}

const initialState: RandomUserState = {
  randomUsers: [],
  dbUsers: [],
  previewUser: null,
  error: null,
};

const randomUserSlice = createSlice({
  name: 'randomUser',
  initialState,
  reducers: {
    setRandomUsers: (state, action: PayloadAction<RandomUserDetails[]>) => {
      state.randomUsers = action.payload;
    },
    updateRandomUsers: (state, action: PayloadAction<RandomUserDetails>) => {
      state.randomUsers = state.randomUsers.map((user) => {
        if (user.login.uuid === action.payload.login.uuid) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
    setDbUsers: (state, action: PayloadAction<RandomUserDetails[]>) => {
      state.dbUsers = action.payload;
    },
    setPreviewUser: (state, action: PayloadAction<RandomUserDetails>) => {
      state.previewUser = action.payload;
    },
    clearUsers: (state) => {
      state.randomUsers = [];
      state.previewUser = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// export const selectRandomUsers = (state: RootState) => state.randomUser.randomUsers;
// export const selectPreviewUser = (state: RootState) => state.randomUser.previewUser;
// export const selectDbUsers = (state: RootState) => state.randomUser.dbUsers;

export const {
  setRandomUsers,
  setError,
  clearUsers,
  setPreviewUser,
  setDbUsers,
  updateRandomUsers,
} = randomUserSlice.actions;
export default randomUserSlice.reducer;
