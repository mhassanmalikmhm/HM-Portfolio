import { GoogleGenAI } from "@google/genai";

// Initialize the client. 
// Note: In a production environment, ensure process.env.API_KEY is set.
// If not set, we will catch the error gracefully in the UI.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Hassan Malik's portfolio website. 
Hassan is a BS Computer Science student at IUB (The Islamia University of Bahawalpur) and an Automation Expert.
He specializes in Make.com, n8n, Zapier, and AI Content Pipelines.
He has experience reducing manual effort by 80% through workflow automation.
Your goal is to answer visitor queries about Hassan's skills, experience, and services professionally and concisely.
If asked to hire him, suggest contacting him via the social links in the footer or email.
Keep responses under 100 words unless detailed technical explanation is required.
Always maintain a helpful, high-tech, and professional persona.
`;

export const generateChatResponse = async (history: { role: string; text: string }[], userMessage: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key not configured. Please contact Hassan directly via email.");
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the chat history for the API
    const prompt = `
      History:
      ${history.map(h => `${h.role}: ${h.text}`).join('\n')}
      
      User: ${userMessage}
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("I am currently offline. Please contact Hassan via Email.");
  }
};