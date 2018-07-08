import * as React from 'react';
import './galeria.scss';
import { IProps } from './photo';
export declare class Galeria extends React.Component<{}, {
    listaFoto: Array<IProps>;
}> {
    constructor(props: {});
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
