import { NextApiRequest, NextApiResponse } from 'next';
import openai from '../../lib/chatgpt';

type Option = {
  label: string;
  value: string
}

type ModelOptions = {
  options: Option[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ModelOptions>) {

  let modelOptions: any = await openai.listModels().then((res) => res.data.data);
  modelOptions = modelOptions.map((model: any) => {
    return {
      label: model.id,
      value: model.id
    }
  });

  res.status(200).json({ options: modelOptions });

}