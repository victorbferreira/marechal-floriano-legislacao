// Serverless function - Vercel backend
// Esconde a API key do Claude

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query, leis } = req.body;

  if (!query || !leis) {
    return res.status(400).json({ error: 'Missing query or leis' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        messages: [{
          role: 'user',
          content: `Você é um assistente especializado em legislação municipal de Marechal Floriano/ES.

Analise esta pergunta do usuário: "${query}"

Base de dados disponível (${leis.length} leis):
${JSON.stringify(leis, null, 2)}

Sua tarefa:
1. Identifique as leis mais relevantes para a pergunta (máximo 10)
2. Retorne APENAS um array JSON com os IDs das leis, no formato: ["100/1994", "200/2005", ...]
3. Ordene por relevância (mais relevante primeiro)

Responda APENAS com o array JSON, sem explicações adicionais.`
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    const leiIds = JSON.parse(data.content[0].text);

    return res.status(200).json({ leiIds });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
