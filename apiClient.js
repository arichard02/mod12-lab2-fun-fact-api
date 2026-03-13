import axios from 'axios'

const jsonClient = axios.create({
  baseURL: "https://uselessfacts.jsph.pl",
});


jsonClient.interceptors.request.use(Logger =>{

  console.log(`Requesting: ${Logger.method}  ${Logger.url}`)
  return Logger;
})

export default jsonClient;