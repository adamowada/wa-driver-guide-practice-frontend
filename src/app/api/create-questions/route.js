// app/api/create-questions/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const response = await axios.post(
      'https://wa-driver-guide-practice-api.vercel.app/api/create-questions'
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
