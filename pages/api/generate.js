import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Write a detailed dream vacation with a creative introduction paragraph. Exclude the word introduction. The vacation should contain 8 activities that most tourists don't know about to the destination below and describe the activity in detail and offer specifics about the flight months that cost the least along with the average price and cruise months that cost the least along with the average price. Suggest companies that offer all-inclusive packages to the destination. Include a separate list of popular tourist locations and vacation secrets in bullet points.

Destination: 
Popular tourist locations: Offer the most popular locations that tourists visit
Vacation secrets: Suggest locations that are well-loved by locals for years and that many people don't know about.\n
`;

const generateAction = async (req, res) => {
  // Run first prompt
  // console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.9,
    max_tokens: 100,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
  console.log(res)
};

export default generateAction;;