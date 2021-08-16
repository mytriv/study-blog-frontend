import {Base} from "../../shared/base.model"

export interface Article extends Base {
    title: string
    description: string
    content: string
    mainImageUrl: string
}