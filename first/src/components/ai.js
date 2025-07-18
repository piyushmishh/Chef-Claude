import { InferenceClient } from "@huggingface/inference";

const hf = new InferenceClient({
  accessToken: import.meta.env.VITE_HF_ACCESS_TOKEN,
});

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients...
`;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const prompt = `${SYSTEM_PROMPT}\nUser: I have ${ingredientsString}. Please give me a recipe.\nAssistant:`;

  try {
    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: prompt,
      parameters: {
        max_new_tokens: 512,
        temperature: 0.7,
        top_p: 1.0,
        top_k: 50,
      },
    });

    return response.generated_text || "Sorry, there was an error generating your recipe.";
  } catch (err) {
    console.error("Mistral API Error:", err);  // NOT err.message
    return "Sorry, there was an error generating your recipe.";
  }
}
