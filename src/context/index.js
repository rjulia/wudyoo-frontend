import axios from 'axios';
const { LOCAL_URI } = process.env;
console.log(LOCAL_URI)
export const getRestaurants = () => axios.get(`http://localhost:1337/restaurants`).then(({data}) => {
  return data
})

const useRestaurants = () => {

}


export default useRestaurants
