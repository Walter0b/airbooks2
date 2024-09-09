'use client'
import { Test_report_json } from '@/static/test/test_report';
import React, { useEffect } from 'react';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';


const Page: React.FC = () => {
    //    console.log("🚀 ~ reportData:",  Test_report_json);
    // useEffect(() => {
    // //    console.log('Loading Viewer view');

    //     const viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);
    //     const report = new Stimulsoft.Report.StiReport();

    // //    console.log('Load report from url');
    //     report.loadDocument(Test_report_json);
    //     viewer.report = report;

    // //    console.log('Rendering the viewer to selected element');
    //     viewer.renderHtml('viewer');
    // }, []);

    return (
        <div className='bg-black'>
            {/* <div id="viewer" className="App"></div> */}
        </div>
    );
};

export default Page;
