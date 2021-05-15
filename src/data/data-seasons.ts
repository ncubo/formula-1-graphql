import { F1 } from "./data-source";

export class SeasonsData extends F1 {
    constructor(){
        super();
    }

    async getSeasons(){
        //with cache for 60 minutes
        return await this.get('seasons.json?limit=80',{
            cacheOptions: {ttl:60}
        });
    }
}