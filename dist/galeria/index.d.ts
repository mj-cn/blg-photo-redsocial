/// <reference types="react" />
import * as React from 'react';
import './galeria.css';
import { IProps } from './photo';
export declare class Galeria extends React.Component<{}, {
    listaFoto: Array<IProps>;
}> {
    constructor(props: {});
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
