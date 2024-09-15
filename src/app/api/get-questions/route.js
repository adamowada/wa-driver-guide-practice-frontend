// app/api/get-questions/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

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