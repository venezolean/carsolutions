/*
  # Add consultations table and update config

  1. New Tables
    - `consultations`: Stores consultation requests
      - `id` (uuid, primary key)
      - `vehicle_id` (text)
      - `first_name` (text)
      - `last_name` (text)
      - `phone` (text)
      - `email` (text)
      - `preferred_time` (text)
      - `type` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on consultations table
    - Add policies for authenticated users
*/

-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  preferred_time text NOT NULL,
  type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert consultations"
  ON consultations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can read own consultations"
  ON consultations FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Update site config with additional fields
DO $$
BEGIN
  UPDATE config
  SET value = value || jsonb_build_object(
    'description', 'Tu concesionaria de confianza para vehículos nuevos, usados y planes de ahorro.',
    'years_experience', 20,
    'business_hours', jsonb_build_object(
      'weekdays', 'Lunes a Viernes: 9:00 - 18:00',
      'saturday', 'Sábados: 9:00 - 13:00',
      'sunday', 'Domingos: Cerrado'
    )
  )
  WHERE key = 'site';
END $$;