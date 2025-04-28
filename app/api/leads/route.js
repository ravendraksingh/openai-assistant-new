import axios from "axios";

export async function POST(request) {
  const body = await request.json();
//   console.log({ request });
  console.log(body);
  // the rest of your code
//   console.log('lead capture url:' + process.env.LEADCAPTURE_URL);

    // fetch("https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture", {
    //         method: "POST",
    //         headers: {
    //             "x-LSQ-AccessKey": "u$r9c1f7af8960e7073346269ab0530deee",
    //             "x-LSQ-SecretKey": "8b369c16b204012efc2c3d8e90031904f9a18618",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(body)
    // })
    // .then((res) => res.json())
    // .then((result) => console.log(result))
    // .catch((err) => console.log(err));

    try {
        const res = await fetch("https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture", {
            method: "POST",
            headers: {
                "x-LSQ-AccessKey": "u$r9c1f7af8960e7073346269ab0530deee",
                "x-LSQ-SecretKey": "8b369c16b204012efc2c3d8e90031904f9a18618",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        console.log(res);

        if (!res.ok) {
            throw new Error(`LSQ api response status: ${res.status}`);
        }
        const data = await res.json();
        console.log({data});
        return Response.json(data);
    } catch (err) {
        console.log(err);
    }


//   fetch(
//     "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Leads.GetByEmailaddress?emailaddress=john10@mail.com",
//     {
//       headers: {
//         "x-LSQ-AccessKey": "u$r9c1f7af8960e7073346269ab0530deee",
//         "x-LSQ-SecretKey": "8b369c16b204012efc2c3d8e90031904f9a18618",
//       },
//     }).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err));


    // fetch("https://dummyjson.com/products/1").then((res) => res.json()).then((data) => console.log(data))
    // .catch((err) => console.log(err));

  // return new Response(JSON.stringify(body), {
  //     status: 200,
  //     headers: { "content-type": "application/json" },
  // });
  
//   return Response.json({
//     data: "ok",
//   });
}
