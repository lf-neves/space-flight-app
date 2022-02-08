import React, { useMemo } from "react";
import { useInfiniteQuery } from 'react-query';
import { getArticlesByPage } from "@/services/articles";

import { useSelector } from "react-redux";
import { getSearch, getSort } from "@/store/search";
import { compareDates } from "@/utils"

import { Button } from "@mui/material";
import { ArticleCard, ArticleCardSkeleton } from "@/components/Article";

export const ArticlesList: React.FunctionComponent = () => {

    const search = useSelector(getSearch);
    const sortCriterion = useSelector(getSort)

    const { data, isLoading, fetchNextPage, refetch, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
        'articles',
        ({ pageParam = 1 }) => getArticlesByPage(pageParam),
        {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
        }
    )

    const memoizedPages = useMemo(() => {
        return data?.pages.map((page) => {
            const filteredArticles = search ? page.result.filter((article) => article.title.includes(search)) : page.result;
            return filteredArticles.sort((a, b) => compareDates(a.publishedAt, b.publishedAt, sortCriterion));
        })
    }, [search, sortCriterion, data?.pages]);

    if (isLoading) return <ArticleCardSkeleton />

    return (
        <div data-test='ListContainer' style={{ display: 'block', justifyContent: 'center', textAlign: 'center' }}>
            {memoizedPages?.map((page) => {
                return page.map((article, index) => (<ArticleCard refetch={refetch} data-test="ArticleCard" key={article.id} article={article} index={index} />))
            })}

            {isFetchingNextPage ? <ArticleCardSkeleton /> :
                <Button
                    variant="outlined"
                    sx={{ marginY: 10 }}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    color="warning"
                >
                    {hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
                </Button>
            }
        </div>
    );

}