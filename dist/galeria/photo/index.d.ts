/// <reference types="react" />
import './photo.scss';
export interface IProps {
    like: number;
    comment: number;
    link: string;
    image: string;
}
export declare const Photo: (props: IProps) => JSX.Element;
