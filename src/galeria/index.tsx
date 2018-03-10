import * as React from 'react';
import './galeria.css';
import { galeria } from './galeria.css';
import { Photo } from './photo';

export class Galeria extends React.Component {
    render() {
        return (
            <div className={galeria}>
                <div>
                    <ul>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                        <li><Photo /></li>
                    </ul>
                </div>
            </div>
        )
    }
}