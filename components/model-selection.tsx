'use client'

import useSWR from 'swr';
import Select from 'react-select'
import { useEffect } from 'react';


const fetchModels = () => fetch('/api/engines').then((res) => res.json());

function ModelSelection() {

  const { data: models, isLoading } = useSWR('models', fetchModels);

  const { data: model, mutate: setModel } = useSWR('model', null, { fallbackData: 'text-davinci-003' });

  console.log('Model ', model);

  return <Select 
    instanceId="model-select"
    options={models?.options}
    onChange={(e: any) => setModel(e.value)}
    isSearchable
    isLoading={isLoading}
    defaultValue={model}
    placeholder={model}
    className="mb-2 text-black"
  ></Select>
}

export default ModelSelection;
