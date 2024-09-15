// app/api/get-questions/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export const config = {
  runtime: 'nodejs', // Ensure you're using the Node.js runtime
  maxDuration: 60,   // Set the timeout to 60 seconds
};

export async function GET(request) {
  try {
    const response = await axios.get(
      'https://wa-driver-guide-practice-api.vercel.app/api/get-questions'
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Error fetching questions' },
      { status: 500 }
    );
  }
}