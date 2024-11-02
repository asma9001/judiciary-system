// ViewPdf.js
import React, { useRef } from "react";
import  PdfPreviewModel  from "../components/Petition/PdfPreviewModel";
import { ExecutorPreviewModel } from "../components/OathExecutor/ExecutorPreviewModel";
import { AffidavitPreviewModel } from "../components/Affidavit/AffidavitPreviewModel";
import html2pdf from "html2pdf.js";

const ViewPdf = () => {
  const pdfRef = useRef(); // Create a ref to capture the component to be printed as PDF

  const handleDownloadPDF = () => {
    const element = pdfRef.current; // Get the current element
    const options = {
      margin: 0.5,
   

      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "px", format: [450, 703], orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save(); // Convert to PDF
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      <div ref={pdfRef}>
       
        <PdfPreviewModel />
        <ExecutorPreviewModel />
        <AffidavitPreviewModel />
      </div>
    </div>
  );
};

export default ViewPdf;
