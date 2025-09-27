import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Database table name for auto-pay
const TABLE_NAME = 'autopay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      amount,
      durationUnit,
      durationValue,
      frequency,
      totalDuration,
      startDate,
      recipientAddress,
      ethAddress,
      totalPayments,
      totalAmount,
      endDate,
      nextPayment
    } = body;
    
    // Generate unique ID for the auto-pay
    const autoPayId = `autopay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Insert auto-pay data into Supabase
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([{
        id: autoPayId,
        amount: parseFloat(amount),
        duration_unit: durationUnit,
        duration_value: parseInt(durationValue),
        frequency,
        total_duration: parseInt(totalDuration),
        start_date: startDate,
        recipient_address: recipientAddress,
        eth_address: ethAddress,
        total_payments: totalPayments,
        total_amount: totalAmount,
        end_date: endDate,
        next_payment: nextPayment,
        status: 'active',
        created_at: new Date().toISOString()
      }])
      .select();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ 
        error: 'Failed to store auto-pay data',
        details: error.message 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      success: true, 
      id: autoPayId,
      data: data[0],
      message: 'Auto-pay created successfully' 
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Failed to create auto-pay',
      details: error instanceof Error ? error.message : 'Unknown error'
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
    
    // Fetch auto-pay data from Supabase
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', id)
      .single();
    
    if (error || !data) {
      return NextResponse.json({ error: 'Auto-pay not found' }, { status: 404 });
    }
    
    // Transform database column names back to frontend format
    const autoPayData = {
      id: data.id,
      amount: data.amount,
      durationUnit: data.duration_unit,
      durationValue: data.duration_value,
      frequency: data.frequency,
      totalDuration: data.total_duration,
      startDate: data.start_date,
      recipientAddress: data.recipient_address,
      ethAddress: data.eth_address,
      totalPayments: data.total_payments,
      totalAmount: data.total_amount,
      endDate: data.end_date,
      nextPayment: data.next_payment,
      status: data.status,
      createdAt: data.created_at
    };
    
    return NextResponse.json({ 
      success: true, 
      data: autoPayData 
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Failed to retrieve auto-pay data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}