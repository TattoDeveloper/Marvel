import { ComicsEntity } from './comics.entity';
import { SeriesEntity } from './series.entity';
export interface CharacterEntity{
  id: string
  name: string
  description: string
  comics: Array<ComicsEntity>
  series: Array<SeriesEntity>
}