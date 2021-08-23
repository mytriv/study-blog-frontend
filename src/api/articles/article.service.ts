import axios, { AxiosResponse } from "axios";
import { Article } from "./models/article.model";
import { PaginatedRes } from "../shared/paginatedRes.model";
import { PaginationParams } from "../shared/paginationParams.model";

class ArticleService {
  getMyArticles(
    pagination: PaginationParams
  ): Promise<AxiosResponse<PaginatedRes<Article>>> {
    return axios.get("/api/v1/articles/my-articles", {
      params: {
        ...pagination,
      },
    });
  }

  getMyArticle(id: number): Promise<AxiosResponse<Article>> {
    return axios.get(`/api/v1/articles/my/${id}`, {});
  }

  createMyArticle({
    title,
    description,
    content,
    mainImageUrl,
  }: Omit<Article, "id">): Promise<AxiosResponse<Article>> {
    return axios.post(`/api/v1/articles`, {
      title,
      description,
      content,
      mainImageUrl,
    });
  }

  updateMyArticle({
    title,
    description,
    content,
    mainImageUrl,
    id,
  }: Article): Promise<AxiosResponse<Article>> {
    return axios.put(`/api/v1/articles/${id}`, {
      title,
      description,
      content,
      mainImageUrl,
      status: "Draft",
    });
  }
}

export const articleService = new ArticleService();
