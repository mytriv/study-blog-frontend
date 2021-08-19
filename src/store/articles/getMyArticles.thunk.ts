import { articleService } from "../../api/articles/article.service";
import { articlesSlice } from "./articlesSlice";
import { PaginationParams } from "../../api/shared/paginationParams.model";

export const getMyArticlesThunk = (pagination: PaginationParams) => {
  return async (dispatch: any, getState: any) => {
    const response = await articleService.getMyArticles(pagination);
    dispatch(
      articlesSlice.actions.getArticlesSuccess({
        articles: response.data.entities,
        count: response.data.count,
        skip: response.data.skip,
        take: response.data.take,
      })
    );
  };
};
