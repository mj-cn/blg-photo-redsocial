import * as  React from 'react';
import './index.css';
import { photoRedSocial } from './index.css';
import { Galeria } from './galeria'

export function PhotoRedSocial() {
    return (
        <div className={`container-fluid ${photoRedSocial} text-center`}>
            <h2 className="text-uppercase">Follow@ <a href="">Instagram</a></h2>
            <Galeria />
        </div>
    )
}