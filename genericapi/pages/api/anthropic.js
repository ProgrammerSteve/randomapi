const prompts = [
  {
    question: {
      sentence: "我___三年级",
      choices: {
        a: "是",
        b: "二",
        c: "没关系",
        d: "什么",
      },
      answer: "是",
    },
  },

  {
    question: {
      sentence: "我___一杯咖啡。",
      choices: {
        a: "想喝",
        b: "朋友",
        c: "早上",
        d: "明天",
      },
      answer: "a",
    },
  },
  {
    question: {
      sentence: "他___在图书馆学习。",
      choices: {
        a: "是",
        b: "二",
        c: "没关系",
        d: "什么",
      },
      answer: "a",
    },
  },
  {
    question: {
      sentence: "这是___手机。",
      choices: {
        a: "我",
        b: "一",
        c: "你",
        d: "很",
      },
      answer: "a",
    },
  },
  {
    question: {
      sentence: "我___电影。",
      choices: {
        a: "看",
        b: "在",
        c: "有",
        d: "喜欢",
      },
      answer: "喜欢",
    },
  },
];

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

//   const handler = (req, res) => {
//     const d = new Date()
//     res.end(d.toString())
//   }

const handler = (req, res) => {
  let rand = Math.floor(Math.random() * prompts.length);
  res.status(200).json(prompts[rand]);
};

export default allowCors(handler);
