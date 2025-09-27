import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type PaymentData = {
  id?: string;
  network: string;
  token: string;
  orgName: string;
  amount: string;
  walletAddress: string;
  frequency: string;
  duration: string;
  description: string;
  created_at?: string;
}