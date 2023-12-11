import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const workerUrl =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

const App = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pdfUrl = urlParams.get("pdf_url");

  return pdfUrl ? (
    <Worker workerUrl={workerUrl}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  ) : null;
};

export default App;
