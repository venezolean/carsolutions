/*
  # Update site configuration

  1. Changes
    - Add new fields to site configuration:
      - description
      - years_experience
      - business_hours (weekdays, saturday, sunday)

  Note: The consultations table and its policies are already created in a previous migration
*/

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