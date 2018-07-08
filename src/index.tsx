import * as  React from 'react';
import './index.scss';
import { Galeria } from './galeria'

export function PhotoRedSocial() {
    return (
        <div className={`container-fluid photoRedSocial text-center`}>
            <h2 className="text-uppercase">Follow@ <a href="javascript:void(0)">Instagram</a></h2>
            <Galeria />
        </div>
    )
}