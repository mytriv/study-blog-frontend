import {Article} from "../articles/models/article.model";

export interface PaginatedRes<EntitieType>  {
    count: number;
    skip: number;
    take: number;
    entities: EntitieType[]
}