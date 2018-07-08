import * as React from 'react';
import './galeria.scss';
import { Photo, IProps } from './photo';
import { getPhoto } from './service.galeria';


export class Galeria extends React.Component<{}, { listaFoto: Array<IProps> }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            listaFoto: []
        }
    }

    async componentDidMount() {
        let lista = await getPhoto();
        this.setState({ listaFoto: lista });
    }

    render() {
        return (
            <div className="galeria">
                <div>
                    <ul>
                        {
                            this.state.listaFoto.map((foto, index) => {
                                return (
                                    <li key={index}>
                                        <Photo {...foto} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}