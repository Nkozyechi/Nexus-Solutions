import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct a system prompt based on the template data so the AI knows who it represents.
const SYSTEM_INSTRUCTION = `
You are the intelligent virtual assistant for ${COMPANY_INFO.name}.
Your goal is to be helpful, professional, and concise.

Company Details:
- Tagline: ${COMPANY_INFO.tagline}
- Description: ${COMPANY_INFO.description}
- Contact: ${COMPANY_INFO.email}, ${COMPANY_INFO.phone}
- Address: ${COMPANY_INFO.address}

Services Offered:
${SERVICES.map(s => `- ${s.title}: ${s.description} (${s.price || 'Contact for pricing'})`).join('\n')}

Guidelines:
- Answer questions about our services, team, and company mission.
- If a user asks about pricing not listed, encourage them to contact us via the contact page.
- Keep responses under 100 words unless detailed explanation is needed.
- Be polite and business-oriented.
`;

export const streamChatResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  userMessage: string
) => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Transform history to API format if needed, but for simple chat, we can just start a chat
    // Note: In a real app, you'd maintain the history object properly.
    // Here we will just send the message with the context for simplicity in this demo structure
    // or use the chat session.
    
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Replay history to set state (simplified for this demo)
    // In a production app, you would persist the chat session object.
    for (const msg of history) {
        if(msg.role === 'user') {
            await chat.sendMessage({ message: msg.text });
        }
        // Note: we can't easily force-feed model responses into the history in this SDK without a workaround,
        // so for this template, we will rely on the context being fresh or just sending the new message 
        // if the session isn't persisted. 
        // Ideally, you'd maintain the `chat` instance in a React Ref.
    }

    const result = await chat.sendMessageStream({ message: userMessage });
    return result;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};