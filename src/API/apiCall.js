export const apiCall = async (endPoint, method, param) => {
  const response = await fetch(endPoint, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });

  const result = await response.json();
  return result;
};
