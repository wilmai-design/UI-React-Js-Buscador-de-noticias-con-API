import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretinimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sport', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

    // utilizar custom hook
    const [ categoria, SelecNoticias ] = useSelect('general', OPCIONES);

    // submit al form, pasar categoria a applicationCache.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por Categoría</h2>

                    <SelecNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`{$styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;