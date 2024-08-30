// src/components/templates/ResumeTemplate1.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
import convertHtmlToReactPdf from '../common/convertHtmlToReactPdf';
import { title } from 'process';
Font.register({
  family: 'Roboto',
  fonts: [
    // { src: "https://github.com/openmaptiles/fonts/blob/master/roboto/Roboto-Regular.ttf" },
  ],
});
const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    padding: 30,
    // fontFamily:'Roboto'
  },
  section: {
    marginBottom: 15,
    paddingBottom: 5,
    borderBottom: '1px solid #eaeaea',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    textAlign:'center'
  },
  title:{
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 3,
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
  },
  link: {
    fontSize: 11,
    color: '#0077cc',
    marginBottom: 5,
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

interface ResumeProps {
  resumeData: {
    name: string;
    title: string;
    address: string;
    number: string;
    email: string;
    summary: string;
  };
}

const ResumeTemplate1: React.FC<ResumeProps> = ({ resumeData }) => (
  <Document>
  <Page style={styles.page}>
    {/* Header Section */}
    <View style={styles.section}>
      <Text style={styles.header}>Sanket Gaikwad</Text>
      <Text style={styles.text}>Pune, India | (+91) 9921410715 | gaikwadsanketn@gmail.com | <Link src="https://www.linkedin.com/in/sanket9921/" style={styles.link}>LinkedIn</Link> |
      <Link src="https://github.com/sanket9921" style={styles.link}> GitHub</Link> </Text>
      
    </View>

    {/* Objective Section */}
    <View style={styles.section}>
      <Text style={styles.title}>OBJECTIVE</Text>
      <Text style={styles.text}>
        Results-driven Full Stack Developer with hands-on experience in building and enhancing automation frameworks, implementing CI/CD pipelines, and developing high-performance web applications...
      </Text>
    </View>

    {/* Skills Section */}
    <View style={styles.section}>
      <Text style={styles.title}>SKILLS</Text>
      <Text style={styles.text}>Language: Java, Python, JavaScript, C, C++, C#</Text>
      <Text style={styles.text}>Frameworks and Technology: Next.js, React.js, Node.js, Spring Boot, Express.js</Text>
      {/* Add all other skills here */}
    </View>

    {/* Experience Section */}
    <View style={styles.section}>
      <Text style={styles.title}>EXPERIENCE</Text>
      <Text style={styles.subHeader}>Freelance Web Developer</Text>
      <Text style={styles.text}>
        • Developed and deployed websites using Next.js and React.js, 
      </Text>
      <Text>
      • enhancing performance and scalability...
      </Text>
      {/* Add all other experiences here */}
    </View>

    {/* Education Section */}
    <View style={styles.section}>
      <Text style={styles.title}>EDUCATION</Text>
      <Text style={styles.subHeader}>PG Diploma in Advanced Computing | CDAC</Text>
      <Text style={styles.text}>Pune | 2023 - 2024</Text>
      <Text style={styles.subHeader}>B.E. in Computer Engineering | SVPM College of Engineering, Pune</Text>
      <Text style={styles.text}>2018 - 2022</Text>
    </View>

    {/* Achievements Section */}
    <View style={styles.section}>
      <Text style={styles.title}>ACHIEVEMENTS</Text>
      <Text style={styles.text}>Top position in PG diploma course.</Text>
      <Text style={styles.text}>Chess tournament winner, second in state running competition.</Text>
    </View>
  </Page>
</Document>
);

export default ResumeTemplate1;
