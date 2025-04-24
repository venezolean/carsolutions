/*
  # Add consultation types to contact_requests table

  1. Changes
    - Add consultation_type column to contact_requests table
    - Add sub_type column to contact_requests table
*/

ALTER TABLE contact_requests 
ADD COLUMN IF NOT EXISTS consultation_type text,
ADD COLUMN IF NOT EXISTS sub_type text;