import {useDispatch, useSelector} from "react-redux";
import {getMyArticlesThunk} from "../../../store/articles/getMyArticles.thunk";
import {useEffect, useState} from "react";
import {PaginationParams} from "../../../api/shared/paginationParams.model";
import {Store} from "../../../store/store";
import {ArticlesState} from "../../../store/articles/articlesSlice";


export const useMyArticleLoad = () => {
    const dispatch = useDispatch()
    const [paginationParams, setPaginationParams] = useState<PaginationParams>({
        take: 1000,
        skip: 0
    })
    const articleState = useSelector<Store>(state => state.articles) as ArticlesState

    useEffect(() => {
        dispatch(getMyArticlesThunk(paginationParams))
    }, [paginationParams]);
    const pageCount = Math.ceil(articleState.count / articleState.take)

    return {
        paginationParams, pageCount, setPaginationParams, articles: articleState.articles
    }
}

