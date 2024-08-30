import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ResumeState {
  name: string;
  title: string;
  address: string;
  number: string;
  email: string;
  socialProfiles: { [key: string]: string };
  summary: string;
  experience: string;
  skills: string;
  projects: string;
  education: string;
  achievements: string;
}

const initialState: ResumeState = {
  name: '',
  title: '',
  address: '',
  number: '',
  email: '',
  socialProfiles: {},
  summary: '',
  experience: '',
  skills: '',
  projects: '',
  education: '',
  achievements: '',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<Partial<ResumeState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateResume } = resumeSlice.actions;
export default resumeSlice.reducer;
