import { useDevContext } from '@/states/context/useDevContext';
import React, { useState, useRef, useEffect, useCallback } from 'react';

const DevLog: React.FC = () => {
    const { devLogs, clearDevLogs } = useDevContext();
    const [position, setPosition] = useState({ x: 630, y: 0 });
    const [size, setSize] = useState({ width: 300, height: 200 });
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);

    const logRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback(() => {
        setIsDragging(true);
        if (logRef.current) logRef.current.style.cursor = 'grabbing';
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging && !isResizing) return;

        if (isDragging) {
            setPosition(prev => ({
                x: prev.x + e.movementX,
                y: prev.y + e.movementY
            }));
        }

        if (isResizing) {
            setSize(prev => ({
                width: prev.width + e.movementX,
                height: prev.height + e.movementY
            }));
        }
    }, [isDragging, isResizing]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        setIsResizing(false);
        if (logRef.current) logRef.current.style.cursor = 'grab';
    }, []);

    const handleResizeMouseDown = useCallback((e: React.MouseEvent) => {
        setIsResizing(true);
        e.stopPropagation();
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
    ref={logRef}
    onMouseDown={handleMouseDown}
    className="absolute bg-yellow-300 text-black p-4 z-50 rounded-lg top-0 shadow-lg font-comic-sans cursor-grab"
    style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        transform: `translate(${position.x}px, ${position.y}px)`,
    }}
>
    <h3 className="text-lg font-bold">Developer Logs</h3>
    <button
        onClick={clearDevLogs}
        className="mt-2 bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition-colors"
    >
        Clear Logs
    </button>
    <code className="mt-2 max-h-64 overflow-y-auto block text-xs break-words">
        {devLogs.length ? (
            <ul className="list-disc pl-5">
                {devLogs.map((log, index) => (
                    <li key={index} className="mt-1 leading-loose break-words">
                        {log}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No logs available</p>
        )}
    </code>

    {/* Resizing handle */}
    <div
        onMouseDown={handleResizeMouseDown}
        className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-500 cursor-nwse-resize"
    />
</div>

    );
};

export default DevLog;