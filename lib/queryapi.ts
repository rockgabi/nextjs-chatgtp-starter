import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = openai.createCompletion({
    prompt,
    temperature: 0.9,
    top_p: 1,
    max_tokens: 500,
    model
  }).then((res: any) => {
    return res.data.choices[0].text;
  })
  .catch(e => console.log(e));

  return res;
}

export default query;
