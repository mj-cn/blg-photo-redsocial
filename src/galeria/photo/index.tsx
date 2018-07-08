import * as React from 'react';
import './photo.scss';

export interface IProps {
    like: number,
    comment: number,
    link: string,
    image: string
}

export const Photo = (props: IProps) => {
    return (
        <div className="photo">
            <div>
                <a href={props.link}>
                    <img src={props.image} alt="" />
                </a>
                <a href={props.link}>
                    <div className="overlay">
                        <div>
                            <ul className="list-inline text-center">
                                <li><a href="javascript:void(0)"><i className="fa fa-heart-o"></i></a>{props.like}</li>
                                <li><a href="javascript:void(0)"><i className="fa fa-comment-o"></i></a>{props.comment}</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}