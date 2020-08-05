import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
            <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/5831946?s=460&u=ff530a944803789c0ea612dc841d1aa46ec0b7c8&v=4" alt="pessoa 1"/>
                    <div>
                        <strong>Pessoa Primeira</strong>
                        <span>Química</span>
                    </div>
                </header>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br/><br/>    
                    Fugit nam, ad pariatur laboriosam maiores, officia dolores, minus modi voluptatum nesciunt vitae excepturi quia vero sapiente asperiores nostrum. Temporibus, veritatis perferendis.
                </p>

                <footer>
                    <p>
                       Preço/hora
                       <strong>R$ 100,00</strong>
                    </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Ícone do whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>

            </article>
    )
}

export default TeacherItem