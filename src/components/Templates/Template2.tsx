// src/components/templates/ResumeTemplate1.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color:'#000'
  },
  text: {
    fontSize: 11,
    color:'#fff'
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

const Template2: React.FC<ResumeProps> = ({ resumeData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.title}>Name: {resumeData?.name || 'N/A'}</Text>
        <Text style={styles.text}>Title: {resumeData?.title || 'N/A'}</Text>
        <Text style={styles.text}>Address: {resumeData?.address || 'N/A'}</Text>
        <Text style={styles.text}>Number: {resumeData?.number || 'N/A'}</Text>
        <Text style={styles.text}>Email: {resumeData?.email || 'N/A'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.text}>{resumeData?.summary || 'N/A'}</Text>
      </View>
      {/* Add other sections as needed */}
    </Page>
  </Document>
);

export default Template2;
