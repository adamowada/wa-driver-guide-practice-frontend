import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const response = await axios.post(
      'https://wa-driver-guide-practice-api.vercel.app/api/create-questions'
    );

    // Create the NextResponse object and set the Cache-Control header
    const res = NextResponse.json(response.data);
    res.headers.set('Cache-Control', 'no-store');

    return res;
  } catch (error) {
    console.error('Error creating questions:', error);

    // Create the NextResponse object for the error case and set the Cache-Control header
    const errorResponse = NextResponse.json(
      { error: 'Error creating questions' },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-store');

    return errorResponse;
  }
}

