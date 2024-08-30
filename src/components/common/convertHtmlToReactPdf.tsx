import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Parser } from 'html-to-react';  // Correctly import the Parser class

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  paragraph: { marginBottom: 4 },
  // Additional styles as needed
});

// Correctly create a new Parser instance
const htmlToReactParser = new Parser();

// Function to convert HTML to React-PDF elements
const convertHtmlToReactPdf = (htmlString: string) => {
  // Ensure the input is a valid string; handle null, undefined, and non-string types
  if (!htmlString || typeof htmlString !== 'string') {
    return <Text>Error: Invalid content</Text>;
  }

  // Define processing instructions for different HTML tags
  const processingInstructions = [
    {
      shouldProcessNode: (node) => node.name === 'strong',
      processNode: (node, children, index) => (
        <Text key={index} style={styles.bold}>{children}</Text>
      ),
    },
    {
      shouldProcessNode: (node) => node.name === 'em',
      processNode: (node, children, index) => (
        <Text key={index} style={styles.italic}>{children}</Text>
      ),
    },
    {
      shouldProcessNode: (node) => node.name === 'p',
      processNode: (node, children, index) => (
        <Text key={index} style={styles.paragraph}>{children}</Text>
      ),
    },
    // Add more processing instructions as needed
  ];

  const reactElements = htmlToReactParser.parseWithInstructions(htmlString, () => true, processingInstructions);

  return reactElements;
};

export default convertHtmlToReactPdf;
