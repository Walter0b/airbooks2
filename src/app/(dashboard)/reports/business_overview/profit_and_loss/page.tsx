'use client'

import { useEffect, useRef } from 'react'
import * as Stimulsoft from 'stimulsoft-reports-js'

export default function ReportViewer() {
    const viewerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const loadReport = async () => {
            // Load necessary scripts and styles
            await Promise.all([
                loadScript('/api/report/reports.js'),
                loadScript('/api/report/viewer.js'),
                loadStyle('/api/report/viewer.css'),
            ])

            const response = await fetch('/api/report')
            const reportJson = await response.text()

            const report = new Stimulsoft.Report.StiReport()
            report.loadDocumentFromJson(reportJson)

            const options = new Stimulsoft.Viewer.StiViewerOptions()
            options.appearance.fullScreenMode = true

            const viewer = new Stimulsoft.Viewer.StiViewer(
                options,
                'StiViewer',
                false
            )
            viewer.report = report
            viewer.renderHtml('viewer')
        }

        loadReport()
    }, [])

    return (
        <div
            id="viewer"
            ref={viewerRef}
            style={{ width: '100%', height: '100vh' }}
        />
    )
}

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = reject
        document.head.appendChild(script)
    })
}

function loadStyle(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.onload = () => resolve()
        link.onerror = reject
        document.head.appendChild(link)
    })
}
