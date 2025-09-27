import { NextRequest, NextResponse } from 'next/server';

// Set your 1inch API key here or use an environment variable
const API_KEY = process.env.ONEINCH_API_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const chainId = searchParams.get('chainId');
  if (!chainId) {
    return NextResponse.json({ error: 'Missing chainId' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.1inch.dev/token/v1.4/${chainId}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'accept': 'application/json',
      },
    });
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch tokens' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
