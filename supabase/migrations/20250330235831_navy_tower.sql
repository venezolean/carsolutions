/*
  # Add contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `phone` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS
    - Add policy for public inserts
    - Add policy for authenticated reads
*/

-- Create contact_requests table
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can insert contact requests"
  ON contact_requests FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact requests"
  ON contact_requests FOR SELECT
  TO authenticated
  USING (true);