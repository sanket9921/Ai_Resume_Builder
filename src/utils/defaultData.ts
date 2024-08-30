// src/utils/defaultData.ts

export const generateDefaultData = () => ({
    name: 'John Doe',
    title: 'Software Engineer',
    address: '1234 Elm Street, Some City, ST 56789',
    email: 'john.doe@example.com',
    phone: '+1 (555) 555-5555',
    summary: 'Experienced software engineer with a background in developing scalable web applications.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    experience: [
      {
        jobTitle: 'Software Engineer',
        company: 'Tech Company',
        description: 'Developed and maintained web applications using React and Node.js.',
      },
      {
        jobTitle: 'Frontend Developer',
        company: 'Another Company',
        description: 'Built user interfaces and improved user experience for various web projects.',
      },
    ],
    education: [
      {
        degree: 'B.Sc. Computer Science',
        field: 'Computer Science',
        institution: 'University Name',
        year: '2015',
      },
    ],
  });
  