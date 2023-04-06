import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchArticlePageNextPage";

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limits: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(4);
        expect(fetchArticlesList)
            .toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limits: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(2);
        expect(fetchArticlesList)
            .not
            .toHaveBeenCalled();
    });
});
