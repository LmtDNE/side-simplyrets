const API_URL = 'https://api.simplyrets.com/properties';

export const fetchProperties = async () => {
  const username = process.env.REACT_APP_SIMPLY_RETS_API_USERNAME;
  const password = process.env.REACT_APP_SIMPLY_RETS_API_PASSWORD;

  const response = await fetch(API_URL, {
    headers: new Headers({
      Authorization: `Basic ${btoa(username + ':' + password)}`,
    }),
  });
  if (!response.ok) throw new Error('Failed to fetch properties');
  return response.json();
};
