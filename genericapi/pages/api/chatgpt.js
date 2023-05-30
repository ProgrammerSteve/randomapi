import { Configuration, OpenAIApi } from "openai";

async function callGpt(temperature = 0.2, max_tokens = 150) {
  console.log("Starting ChatGPT");
  const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  let prompt = `What is 1+1?`;
  let question = "";
  try {
    console.log("Inside Try/catch");
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: temperature,
      max_tokens: max_tokens,
    });
    let resp = completion?.data?.choices[0]?.text || "";
    question = JSON.parse(resp.replace("\n", ""));
  } catch (err) {
    console.log;
  }
  return question;
}

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = async (req, res) => {
  let chatResp = await callGpt();
  res.status(200).json(chatResp);
};

export default allowCors(handler);
