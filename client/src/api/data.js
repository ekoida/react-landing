const HOST = "http://localhost:3000/api";

export const getAllProducts = async () => {
  const request = await fetch(`${HOST}/product`);

  return request.json();
};

export const setOrder = async (data) => {
  const request = await fetch(`${HOST}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return request.json();
};