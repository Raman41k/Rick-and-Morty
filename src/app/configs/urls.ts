import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  episodes: `${API}/episode`,
  epidose: (id:number) => `${API}/episode/${id}`,
  getById: (id:number) => `${API}/character/${id}`
}

export {
  urls
}
