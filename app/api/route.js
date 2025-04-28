export async function POST (req) {
    // console.log({req});
    return Response.json({ status: 'ok from: ' + req.url });
}