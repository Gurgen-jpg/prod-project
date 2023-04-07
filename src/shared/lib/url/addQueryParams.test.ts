import { getQueryParams } from "shared/lib/url/addQueryParams";

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params)
            .toBe('?test=value');
    });
    test('test with multi param', () => {
        const params = getQueryParams({
            test: "value",
            second: "second",
        });
        expect(params)
            .toBe('?test=value&second=second');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: "value",
            second: undefined,
        });
        expect(params)
            .toBe('?test=value');
    });
});
