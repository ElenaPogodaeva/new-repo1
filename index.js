const baseUrl = 'http://127.0.0.1:3000';

const path = {    //enum
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
}


//[{key: '', value: ''}]
const generateQueryString = (queryParams = []) => queryParams.length 
? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}`
: '';

export const getCars = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`);
  const items = await response.json();
  
  const count = Number(response.headers.get('X-Total-Count'));

  return {
    items, count
  }
}


export const getCar = async (id) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`);
  const car = await response.json();

  return car;
}

export const createCar = async (body) => {
  const response = await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  const car = await response.json();
  
  return car;
}

export const updateCar = async (id, body) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  const car = await response.json();
  
  return car;
}

export const updateParamsCar = async (id, body) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  const car = await response.json();
  
  return car;
}

export const deleteCar = async (id) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'DELETE'
  });
  const car = await response.json();
  
  return car;
}
//[{key: 'name', value: 'Tesla'}, {key: 'color', value: '#6c779f'}]
/*
const main = async () => {
  const cars = await getCars([{key: '_page', value: 1}, {key: '_limit', value: 2}]);
  
  const car = await getCar(2);
  

  const createdCar = await createCar({
    name: '111',
    color: "#e64566",
  });

  const updatedCar = await updateCar(5, {
    name: 'update1',
    color: "#e64566",
  });
  const updatedParamsCar = await updateParamsCar(5, {
    color: '#fff',
  });

  const deletedCar = await deleteCar(20)
  console.log(deletedCar );
}

main(); */