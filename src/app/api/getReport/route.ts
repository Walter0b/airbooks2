import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as Stimulsoft from 'stimulsoft-reports-js';

// Loading fonts
global.window = global;
const fontPath = path.join(process.cwd(), 'public', 'fonts', 'Roboto-Black.ttf');
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile(fontPath);

export async function GET(req: NextRequest) {


    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname === '/api/report') {
        // Serve the report
        const report = new Stimulsoft.Report.StiReport();
        const reportPath = path.join(process.cwd(), 'reports', 'SimpleList.mrt');
        report.loadFile(reportPath);

        await new Promise<void>((resolve) => {
            report.renderAsync(() => {
                resolve();
            });
        });

        const reportJson = report.saveDocumentToJsonString();
        return new NextResponse(reportJson, {
            headers: { 'Content-Type': 'application/json' },
        });
    } else if (pathname === '/api/report/viewer.css') {
        // Serve the CSS file
        const cssPath = path.join(process.cwd(), 'node_modules', 'stimulsoft-reports-js', 'Css', 'stimulsoft.viewer.office2013.whiteblue.css');
        const css = fs.readFileSync(cssPath, 'utf8');
        return new NextResponse(css, {
            headers: { 'Content-Type': 'text/css' },
        });
    } else if (pathname === '/api/report/reports.js') {
        // Serve the reports.js file
        const jsPath = path.join(process.cwd(), 'node_modules', 'stimulsoft-reports-js', 'Scripts', 'stimulsoft.reports.js');
        const js = fs.readFileSync(jsPath, 'utf8');
        return new NextResponse(js, {
            headers: { 'Content-Type': 'text/javascript' },
        });
    } else if (pathname === '/api/report/viewer.js') {
        // Serve the viewer.js file
        const jsPath = path.join(process.cwd(), 'node_modules', 'stimulsoft-reports-js', 'Scripts', 'stimulsoft.viewer.js');
        const js = fs.readFileSync(jsPath, 'utf8');
        return new NextResponse(js, {
            headers: { 'Content-Type': 'text/javascript' },
        });
    } else {
        return new NextResponse('Not Found', { status: 404 });
    }
}