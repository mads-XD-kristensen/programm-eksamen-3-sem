import { handleHttpErrors, makeOptions } from "../utils/fetchUtils";
import { jokeURL, hotelsEndpointURL } from "../utils/settings";

function fetchFacade() {


  function jokeFetcher() {
    const fetchData = () => {
      const options = makeOptions("GET", true);
      return fetch(jokeURL, options).then(handleHttpErrors);
    };
    return { fetchData };
  }

  function hotelFetcher() {
    const fetchData = () => {
      const options = makeOptions("GET", true);
      return fetch(hotelsEndpointURL, options).then(handleHttpErrors);
    }
    return { fetchData };
  }

  return {
    jokeFetcher,
    hotelFetcher,
  }

}
const facade = fetchFacade;
export default facade;
