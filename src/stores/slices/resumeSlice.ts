import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Project {
  projectName: string;
  description: string;
  technologies: string[];
}

interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface ResumeState {
  name: string;
  title: string;
  address: string;
  number: string;
  email: string;
  summary: string;
  experience: Experience[];
  skills: string;
  projects: Project[];
  education: Education[];
  achievements: string;
  customFields: string[];
  template: string;
}

const initialState: ResumeState = {
  name: '',
  title: '',
  address: '',
  number: '',
  email: '',
  summary: '',
  experience: [],  // Correctly initialized as an array
  skills: '',
  projects: [],  // Correctly initialized as an array
  education: [],  // Correctly initialized as an array
  achievements: '',
  customFields: [],
  template: 'template1',
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updateResume: (state, action: PayloadAction<Partial<ResumeState>>) => {
      Object.assign(state, action.payload);
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experience.push(action.payload);
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.education.push(action.payload);
    },
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
    },
  },
});

export const { updateResume, addExperience, addProject, addEducation, setTemplate } = resumeSlice.actions;
export default resumeSlice.reducer;
