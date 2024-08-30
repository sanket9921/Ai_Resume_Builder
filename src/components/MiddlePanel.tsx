import React, { useState,useMemo } from 'react';
import { useSelector } from 'react-redux';
import { PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import ResumeTemplate1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import { RootState } from '@/stores/store';

import { FaClock, FaRev, FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import { FaClockRotateLeft, FaDownload, FaMinus } from 'react-icons/fa6';



const MiddleSection: React.FC = () => {
  const resumeData = useSelector((state: RootState) => state.resume);
  const selectedTemplate = resumeData.template;

  const [zoom, setZoom] = useState(0.8);

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2)); // Max zoom 2
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom 0.5
  const handleReset = () => setZoom(0.8);

  const renderTemplate = useMemo(() => {
    switch (selectedTemplate) {
      case 'template1':
        return <ResumeTemplate1 resumeData={resumeData} />;
      case 'template2':
        return <Template2 resumeData={resumeData} />;
      default:
        return <ResumeTemplate1 resumeData={resumeData} />;
    }
  }, [resumeData, selectedTemplate]); 

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 sm:p-8" >
      <div
        className="bg-white shadow-lg"
        style={{
          width: '794px',
          height: '1123px', // A4 size in pixels at 96 DPI
          zoom,
        }}
      >
        {/* <div className="resume-preview"> */}
          <PDFViewer width='100%' height='100%' >
          {renderTemplate}
          </PDFViewer>
        {/* </div> */}
      </div>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full text-white space-x-5 bg-[#1e1e1e] p-2 px-3">
        <button onClick={handleZoomIn} className="">
          <FaSearchPlus/>
        </button>
        <button onClick={handleZoomOut} className="">
          <FaSearchMinus/>
        </button>
        <button onClick={handleReset} className="">
          <FaClockRotateLeft/>
        </button>
        <PDFDownloadLink
          document={
            selectedTemplate === 'template1' ? (
              <ResumeTemplate1 resumeData={resumeData} />
            ) : (
              <Template2 resumeData={resumeData} />
            )
          }
          fileName="resume.pdf"
        >
          {({ loading }) => (
            <button className="">
              {loading ? <FaClock/> : <FaDownload/>}
            </button>
          )}
        </PDFDownloadLink>
      </div> */}
    </div>
  );
};

export default MiddleSection;
