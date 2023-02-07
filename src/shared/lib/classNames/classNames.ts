type Mods = Record<string, boolean | string>



//cls - главный класс mods - объект с модами строка - ключ : значение flag (boolean) additional - массив дополнительных классов
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([name]) => name)
    ]
        .join(' ')
}