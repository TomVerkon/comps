import React from 'react';
import Accordion from '../components/Accordion';


const AccordionPage = () => {
  const items = [
    {
      id: '123',
      label: 'This is the label for item 1',
      content: 'This is content number 1. This is content number 1. This is content number 1. This is content number 1. This is content number 1.'
    },
    {
      id: '234',
      label: 'This is the label for item 2',
      content: 'This is content number 2. This is content number 2. This is content number 2. This is content number 2. This is content number 2.'
    },
    {
      id: '345',
      label: 'This is the label for item 3',
      content: 'This is content number 3. This is content number 3. This is content number 3. This is content number 3. This is content number 3.'
    }
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
