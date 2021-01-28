import { IncomingMessage, ServerResponse } from 'http';

const filters = (request: IncomingMessage, response: ServerResponse): void => {
  const availableFilters = {
    price: {
      type: 'slider',
      values: 'number',
      min: 10,
      max: 10000,
      label: 'Price',
    },
    categories: {
      type: 'checkbox',
      label: 'Categories',
      options: [
        { id: 1, label: 'Mens Fashion' },
        { id: 2, label: 'Accessories' },
        { id: 3, label: 'Watches' },
        { id: 4, label: 'Gadgets' },
        { id: 5, label: 'Smart Watches' },
      ],
    },
    colors: {
      type: 'button',
      label: 'Colors',
      options: [
        {
          id: 1,
          label: 'Red',
          showLabel: false,
          styles: { backgroundColor: 'red', color: 'white' },
        },
        {
          id: 2,
          label: 'Blue',
          showLabel: false,
          styles: { backgroundColor: 'blue', color: 'white' },
        },
        {
          id: 3,
          label: 'Black',
          showLabel: false,
          styles: { backgroundColor: 'black', color: 'white' },
        },
      ],
    },
    size: {
      type: 'button',
      label: 'Size',
      options: [
        { id: 1, label: 'M', showLabel: true },
        { id: 2, label: 'L', showLabel: true },
        { id: 3, label: 'XL', showLabel: true },
      ],
    },
  };

  if (request.method === 'GET') {
    response.statusCode = 200;
  } else {
    response.statusCode = 401;
  }
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(availableFilters));
  response.end();
};

export default filters;
