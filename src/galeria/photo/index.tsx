import * as React from 'react';
import './photo.css';
import { photo, overlay } from './photo.css';


export const Photo = () => {
    return (
        <div className={photo}>
            <div>
                <a href="">
                    <img src="http://demo.shapedtheme.com/kotha-pro-html/assets/images/ft-insta-8.jpg" alt="" />
                </a>
                <div className={overlay}>
                    <div>
                        <ul className="list-inline text-center">
                            <li><a href=""><i className="fa fa-heart-o"></i></a> 325</li>
                            <li><a href=""><i className="fa fa-comment-o"></i></a> 20</li>
                        </ul>
                    </div>
                </div>
                <a href="" className="insta-link"></a>
            </div>
        </div>
    )
}