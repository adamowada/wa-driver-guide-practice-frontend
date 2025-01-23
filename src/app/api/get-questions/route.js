export const fetchCache = 'force-no-store';

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  try {
    const response = await axios.get(
      `https://wa-driver-guide-practice-api.vercel.app/api/get-questions?timestamp=${Date.now()}`
    );

    const res = NextResponse.json(response.data);
    res.headers.set('Cache-Control', 'no-store');

    return res;
  } catch (error) {
    console.error('Error fetching questions:', error);

    const errorResponse = NextResponse.json(
      { error: 'Error fetching questions' },
      { status: 500 }
    );
    errorResponse.headers.set('Cache-Control', 'no-store');

    return errorResponse;
  }
}
