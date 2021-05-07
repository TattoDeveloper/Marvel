import { getData } from './../../../services/user/hero.service';

export const CharacterViewModel =  async( id: string) => {
     const data = await getData(id)
     if(data.code === 200){
       const result = data.data.results[0]
       return{
           id: result.id,
           name: result.name,
           description: result.description,
           comics: result.comics.items.map( (comic: any) =>{
             return {
              name: comic.name
            }
           }),
           series: result.series.items.map( (serie: any) =>{
            return {
             name: serie.name
           }
          }),
       }
     }

     return {}
     
}