import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import styles from '@/styles/pdfviewr.module.css';

const PdfViewer = () => {
  const pdfUrl = 'https://cdn.jsdelivr.net/gh/NebyX1/programa-de-gobierno-basta-ya-2025-2030/Programa%20de%20Gobierno%20del%20BASTA%20YA!.pdf';

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <EmbedPDF
          mode="inline"
          className={styles.embedpdf}
          documentURL={pdfUrl}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
