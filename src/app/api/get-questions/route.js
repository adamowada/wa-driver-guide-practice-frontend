import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  try {
    const response = await axios.get(
      'https://wa-driver-guide-practice-api.vercel.app/api/get-questions'
    );

    // Create the NextResponse object and set the Cache-Control header
    const res = NextResponse.json(response.data);
    res.headers.set('Cache-Control', 'no-store');

    return res;
  } catch (error) {
    console.error('Error fetching questions:', error);

    // Create the NextResponse object for the error case and set the Cache-Control header
    const errorResponse = NextResponse.json(
      { error: 'Error fetching questions' },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-store');

    return errorResponse;
  }
}
