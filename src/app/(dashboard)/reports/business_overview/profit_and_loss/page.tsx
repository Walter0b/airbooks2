'use client';
import React, { useEffect } from 'react';
import 'stimulsoft-reports-js/Css/stimulsoft.viewer.office2013.whiteblue.css';
import { Test_report_json } from '@/static/test/test_report'; // Adjust the import if needed

export default function DynamicPage() {
  useEffect(() => {
    const loadStimulsoft = async () => {
      if (typeof window !== 'undefined') { // Ensure window is defined before using it
        console.log('Loading Viewer view');

        // Dynamically import Stimulsoft on the client-side
        const { Stimulsoft } = await import('stimulsoft-reports-js/Scripts/stimulsoft.viewer');

        // Initialize the viewer and report objects
        const viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);
        const report = new Stimulsoft.Report.StiReport();

        console.log('Load report from JSON data');
        report.loadDocument(Test_report_json);
        viewer.report = report;

        console.log('Rendering the viewer to selected element');
        viewer.renderHtml('viewer');
      }
    };

    loadStimulsoft();
  }, []);

  return (
    <div className='w-full'>
      <div id="viewer" className="App w-full"></div>
    </div>
  );
}
