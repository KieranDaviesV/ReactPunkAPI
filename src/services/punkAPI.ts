import axios from "axios";

class PunkAPI {
  private baseURL: string;
  constructor() {
    this.baseURL = "https://api.punkapi.com/v2/";
  }

  private _get = async (url: string) => {
    return await axios.get(this.baseURL + url);
  };
  public getBeerByPage = async (pageNumber: number) => {
    const url = "beers?page=" + pageNumber;
    try {
        const results = await this._get(url);
        return results.data;        
    } catch (error) {
        console.log({error});
        throw error;
    }
  };
  public getBeerWithPizzaByPage = async(pageNumber:number) =>{
      const url = "beers?page=" + pageNumber + "&food=pizza";
      const results = await this._get(url);
      return results.data;
  }
  public getBeerWithSteakByPage = async(pageNumber:number)=>{
      const url = "beers?page=" + pageNumber + "&food=steak";
      const results = await this._get(url);
      return results.data;
  }
}
export default new PunkAPI();