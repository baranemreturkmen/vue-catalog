import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  'https://zrudthcqnggkyiyrzwof.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpydWR0aGNxbmdna3lpeXJ6d29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNzUwODksImV4cCI6MjA2Njc1MTA4OX0.dmaibOx1tR7ukfpZ-F7BHfKObD3hZyZxiscBkJcmU_4',
)
export default supabaseClient
