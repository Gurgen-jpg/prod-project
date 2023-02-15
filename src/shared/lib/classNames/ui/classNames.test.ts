import { classNames } from "shared/lib/classNames";

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
