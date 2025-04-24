/*
  # Initial Schema Setup

  1. New Tables
    - `cars`: Stores car information
      - `id` (uuid, primary key)
      - `brand` (text)
      - `model` (text) 
      - `year` (integer)
      - `price` (numeric)
      - `images` (text[])
      - `engine` (text)
      - `transmission` (text)
      - `fuel_type` (text)
      - `power` (text)
      - `mileage` (integer)
      - `description` (text)
      - `condition` (text)
      - `category` (text)
      - `created_at` (timestamp with time zone)

    - `sellers`: Stores seller information
      - `id` (uuid, primary key)
      - `name` (text)
      - `photo` (text)
      - `phone` (text)
      - `email` (text)
      - `specialization` (text)
      - `created_at` (timestamp with time zone)

    - `carousel_slides`: Stores homepage carousel information
      - `id` (uuid, primary key)
      - `image` (text)
      - `title` (text)
      - `subtitle` (text)
      - `order` (integer)
      - `created_at` (timestamp with time zone)

    - `config`: Stores site configuration
      - `id` (uuid, primary key)
      - `key` (text, unique)
      - `value` (jsonb)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  price numeric NOT NULL,
  images text[] NOT NULL,
  engine text NOT NULL,
  transmission text NOT NULL,
  fuel_type text NOT NULL,
  power text NOT NULL,
  mileage integer,
  description text NOT NULL,
  condition text NOT NULL,
  category text,
  created_at timestamptz DEFAULT now()
);

-- Create sellers table
CREATE TABLE IF NOT EXISTS sellers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  photo text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  specialization text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create carousel_slides table
CREATE TABLE IF NOT EXISTS carousel_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image text NOT NULL,
  title text NOT NULL,
  subtitle text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create config table
CREATE TABLE IF NOT EXISTS config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE sellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE carousel_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE config ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read cars"
  ON cars FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read sellers"
  ON sellers FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read carousel_slides"
  ON carousel_slides FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can read config"
  ON config FOR SELECT
  TO public
  USING (true);

-- Insert initial config data
INSERT INTO config (key, value) VALUES
('site', '{
  "name": "AutoMax",
  "phone": "+54 11 2345-6789",
  "email": "info@automax.com",
  "address": "Av. Principal 1234",
  "city": "Buenos Aires",
  "country": "Argentina",
  "whatsapp": "+5491112345678",
  "social": {
    "facebook": "https://facebook.com/automax",
    "instagram": "https://instagram.com/automax",
    "twitter": "https://twitter.com/automax",
    "linkedin": "https://linkedin.com/company/automax"
  }
}'::jsonb);