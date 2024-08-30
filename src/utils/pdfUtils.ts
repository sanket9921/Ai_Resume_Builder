// src/utils/pdfUtils.ts

import jsPDF from 'jspdf';

export const exportToPDF = (data: any, template: string) => {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  });

  // Set fonts and sizes
  doc.setFont('helvetica');
  doc.setFontSize(14);

  // Header
  doc.setFontSize(20);
  doc.text(data.name, 10, 20);
  doc.setFontSize(16);
  doc.text(data.title, 10, 30);
  doc.setFontSize(12);
  doc.text(`${data.address} | ${data.email} | ${data.phone}`, 10, 40);

  // Professional Summary
  doc.setFontSize(16);
  doc.text('Professional Summary', 10, 60);
  doc.setFontSize(12);
  doc.text(data.summary, 10, 70);

  // Skills
  doc.setFontSize(16);
  doc.text('Skills', 10, 90);
  data.skills.forEach((skill: string, index: number) => {
    doc.text(`- ${skill}`, 10, 100 + index * 10);
  });

  // Experience
  doc.setFontSize(16);
  doc.text('Experience', 10, 120 + data.skills.length * 10);
  data.experience.forEach((exp: any, index: number) => {
    doc.setFontSize(14);
    doc.text(`${exp.jobTitle} at ${exp.company}`, 10, 130 + index * 20);
    doc.setFontSize(12);
    doc.text(exp.description, 10, 140 + index * 20);
  });

  // Education
  doc.setFontSize(16);
  doc.text('Education', 10, 150 + data.experience.length * 20);
  data.education.forEach((edu: any, index: number) => {
    doc.setFontSize(14);
    doc.text(`${edu.degree} in ${edu.field}`, 10, 160 + index * 20);
    doc.setFontSize(12);
    doc.text(edu.institution, 10, 170 + index * 20);
  });

  // Save PDF
  doc.save('resume.pdf');
};
