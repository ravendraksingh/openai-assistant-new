export async function GET () {
    return Response.json({ status: 'ok' });
}

export async function POST (request) {
    return Response.json({ status: 'ok from POST' });   
}