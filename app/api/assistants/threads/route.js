import { openai } from "@/app/openai";

console.log('openai', openai);

export async function POST () {
    // return Response.json({ status: 'ok from: ' + req.url });
    const thread = await openai.beta.threads.create();
    return Response.json({ threadId: thread.id });
}