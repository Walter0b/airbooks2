// errorHandler.ts
export function handleError(error: unknown, context: string): void {
    console.error(`Error in ${context}:`, error)

    // Additional logging logic could go here
    // For example, sending the error to an external logging service
    // e.g. Sentry, LogRocket, etc.
}
