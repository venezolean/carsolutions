export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cars: {
        Row: {
          id: string
          brand: string
          model: string
          year: number
          price: number
          images: string[]
          engine: string
          transmission: string
          fuel_type: string
          power: string
          mileage: number | null
          description: string
          condition: string
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          brand: string
          model: string
          year: number
          price: number
          images: string[]
          engine: string
          transmission: string
          fuel_type: string
          power: string
          mileage?: number | null
          description: string
          condition: string
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          brand?: string
          model?: string
          year?: number
          price?: number
          images?: string[]
          engine?: string
          transmission?: string
          fuel_type?: string
          power?: string
          mileage?: number | null
          description?: string
          condition?: string
          category?: string | null
          created_at?: string
        }
      }
      sellers: {
        Row: {
          id: string
          name: string
          photo: string
          phone: string
          email: string
          specialization: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          photo: string
          phone: string
          email: string
          specialization: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          photo?: string
          phone?: string
          email?: string
          specialization?: string
          created_at?: string
        }
      }
      carousel_slides: {
        Row: {
          id: string
          image: string
          title: string
          subtitle: string
          order: number
          created_at: string
        }
        Insert: {
          id?: string
          image: string
          title: string
          subtitle: string
          order: number
          created_at?: string
        }
        Update: {
          id?: string
          image?: string
          title?: string
          subtitle?: string
          order?: number
          created_at?: string
        }
      }
      config: {
        Row: {
          id: string
          key: string
          value: Json
          created_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          created_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          created_at?: string
        }
      }
    }
  }
}