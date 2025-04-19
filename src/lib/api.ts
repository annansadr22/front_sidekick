import { PaperConfig, GeneratedPaper } from "@/types/paper";

export async function generatePaperFromAPI(config: PaperConfig): Promise<GeneratedPaper> {
  const user_id = localStorage.getItem("user_id");

  const response = await fetch("https://ai-research-sidekick.onrender.com/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...config, user_id: parseInt(user_id!) }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate paper from backend");
  }

  const data = await response.json();
  return data as GeneratedPaper;
}