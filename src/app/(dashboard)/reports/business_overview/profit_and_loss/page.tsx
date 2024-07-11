'use client';
import React, { useEffect } from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';
import 'stimulsoft-reports-js/Css/stimulsoft.viewer.office2013.whiteblue.css'; // Import the required CSS
import { Test_report_json } from '@/static/test/test_report'; // Adjust the import if needed


export default function DynamicPage() {
    useEffect(() => {
        console.log('Loading Viewer view');

        // Initialize the viewer and report objects
        const viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);
        const report = new Stimulsoft.Report.StiReport();

        console.log('Load report from url');
        report.loadDocument(Test_report_json); // Load the report data
        viewer.report = report;

        console.log('Rendering the viewer to selected element');
        viewer.renderHtml('viewer'); // Render the viewer to the specified HTML element
    }, []);

    return (
        <div className='w-full'>
            <div id="viewer" className="App w-full"></div>
        </div>
    );
};


