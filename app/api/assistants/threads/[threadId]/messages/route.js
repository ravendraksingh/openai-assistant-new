import { openai } from "@/app/openai";
// console.log("openai", openai);

// Send a new message to a thread
export async function POST (request) {
  const assistantId = process.env.OPENAI_ASSISTANT_ID;
  const { content } = await request.json();
  console.log(request.url);
  const tokens = request.url.split('/');
  const threadId = tokens[6];
  
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}
