export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "07f620e8c2msh2a489b6a3aa2b2bp102205jsnb000948569b1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
