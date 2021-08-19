import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../store/store";
import {ArticleState} from "../../../store/article/articleSlice";
import {useEffect} from "react";
import {getArticleThunk} from "../../../store/article/getArticle.thunk";
import {useParams} from "react-router";

export const useArticleManageLoad = () => {
    const dispatch = useDispatch()
    const { articleId } = useParams<{articleId: string}>()

    const articleState = useSelector<Store>(state => state.article) as ArticleState

    useEffect( () => {
        dispatch(getArticleThunk(+articleId))

    }, [])
    return {article: articleState.article}
}