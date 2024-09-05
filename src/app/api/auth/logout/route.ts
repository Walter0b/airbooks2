import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = cookies()

    // Clear session cookie
    cookieStore.set('sessionToken', '', { expires: new Date(0) })

    return NextResponse.json({ message: 'Logged out' })
}
