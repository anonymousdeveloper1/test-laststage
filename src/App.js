// src/App.js

import React, { useState } from "react";
import ReportTable from "./components/ReportTable";
import { reportData1, reportData2, reportData3 } from "./components/Data";

function App() {
  const [selectedReport, setSelectedReport] = useState(reportData1);

  const handleReportChange = (event) => {
    const selectedReportId = event.target.value;
    if (selectedReportId === "report1") {
      setSelectedReport(reportData1);
    } else if (selectedReportId === "report2") {
      setSelectedReport(reportData2);
    }
    // ... добавьте обработчики для других отчетов ...
    else if (selectedReportId === "report3") {
      setSelectedReport(reportData3);
    }
  };

  return (
    <div>
      <h1>Report App</h1>
      <select onChange={handleReportChange}>
        <option value="report1">Report 1</option>
        <option value="report2">Report 2</option>
        <option value="report3">Report 3</option>
        {/* ... добавьте другие отчеты ... */}
      </select>
      <ReportTable reportData={selectedReport} />
    </div>
  );
}

export default App;
