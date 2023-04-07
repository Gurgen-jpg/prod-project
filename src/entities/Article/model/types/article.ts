import { User } from "entities/User";

export enum ArticleSortField {
    VIEWS = "views",
    TITLE = "title",
    CREATED_AT = "createdAt",
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG'
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: 1022,
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
