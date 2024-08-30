// src/hooks/useTemplate.ts

import { useState } from 'react';

export const useTemplate = () => {
  const [template, setTemplate] = useState<string>('TemplateOne');

  const changeTemplate = (newTemplate: string) => {
    setTemplate(newTemplate);
  };

  return { template, changeTemplate };
};
