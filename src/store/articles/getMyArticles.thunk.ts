import {articleService} from "../../api/articles/article.service";


export const getMyArticlesThunk = () => {
    return async () => {
        const getArticle = await articleService.getMyArticle()
    }
}