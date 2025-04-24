import { createClient } from 'npm:@supabase/supabase-js@2.39.8'
import { Configuration, OpenAIApi } from 'npm:openai@3.3.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    })
    const openai = new OpenAIApi(configuration)

    const { message, history } = await req.json()

    // Prepare conversation history
    const messages: Message[] = [
      {
        role: 'system',
        content: `Eres un asistente virtual de una concesionaria de autos llamada AutoMax. 
        Debes ser amable, profesional y ayudar a los clientes con información sobre:
        - Vehículos nuevos y usados
        - Planes de ahorro
        - Financiación
        - Servicios post-venta
        - Turnos para test drive
        
        Mantén las respuestas concisas y relevantes. Si no estás seguro de algo, sugiere que el cliente se contacte con un asesor.`
      },
      ...history,
      { role: 'user', content: message }
    ]

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 200
    })

    const response = completion.data.choices[0].message?.content || 
      'Lo siento, no pude procesar tu mensaje. Por favor, intenta nuevamente.'

    return new Response(
      JSON.stringify({ response }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  }
})