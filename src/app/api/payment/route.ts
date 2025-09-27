import { NextRequest, NextResponse } from 'next/server';
import { supabase, PaymentData } from '@/lib/supabase';

// Database table name
const TABLE_NAME = 'payments';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...paymentData } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    // Insert payment data into Supabase
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{
        id,
        network: paymentData.network,
        token: paymentData.token,
        org_name: paymentData.orgName,
        amount: paymentData.amount,
        wallet_address: paymentData.walletAddress,
        frequency: paymentData.frequency,
        duration: paymentData.duration,
        description: paymentData.description
      }])
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ 
        error: 'Failed to store payment data' 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      success: true, 
      id,
      message: 'Payment data stored successfully' 
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Failed to store payment data' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    // Fetch payment data from Supabase
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error || !data) {
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }
    
    // Transform database column names back to frontend format
    const paymentData = {
      network: data.network,
      token: data.token,
      orgName: data.org_name,
      amount: data.amount,
      walletAddress: data.wallet_address,
      frequency: data.frequency,
      duration: data.duration,
      description: data.description
    };
    
    return NextResponse.json({ 
      success: true, 
      data: paymentData 
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Failed to retrieve payment data' 
    }, { status: 500 });
  }
}