import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://superbase.voyanero.com'
const supabaseAnonKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc1NDY2NDg0MCwiZXhwIjo0OTEwMzM4NDQwLCJyb2xlIjoiYW5vbiJ9.8eGew97HBhfKFe_8AlatMZtWM28f20INxx9Ez51pm90'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

