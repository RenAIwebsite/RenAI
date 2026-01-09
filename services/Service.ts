
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the RenAI AI Assistant. Professional, persuasive, and data-driven.
Goal: Help clients understand why RenAI is the choice for property management (Property OS).
Founder: Rachel Lim.
Award: Nanyang Superb Brand Award 2023.
Target: Gov, Corp, University.
`;

export const getAssistantResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    return "抱歉，由于网络波动，我暂时无法回应。请直接联系我们的顾问团队！";
  }
};
