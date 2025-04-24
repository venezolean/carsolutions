/*
  # Add vehicle_id to contact_requests table

  1. Changes
    - Add vehicle_id column to contact_requests table
    - Make it nullable since not all contact requests will be about specific vehicles
*/

ALTER TABLE contact_requests 
ADD COLUMN IF NOT EXISTS vehicle_id text;