import React from 'react'
import Card from './Card'
import img1 from '../assets/tales.png'
import img2 from '../assets/anaximandro.png'
import img3 from '../assets/anaximenes.png'
import img4 from '../assets/pitagoras.png'
import img5 from '../assets/heraclito.png'
import img6 from '../assets/parmenides.png'
import img7 from '../assets/empedocles.png'
import img8 from '../assets/anacxagoras.png'
import img9 from '../assets/democrito.png'

const cards = [
    {
        id: 1,
        title: 'Tales de Mileto',
        image: img1,
        url:'https://es.wikipedia.org/wiki/Tales_de_Mileto'
    },
    {
        id: 2,
        title: 'Anaxímandro',
        image: img2,
        url:'https://es.wikipedia.org/wiki/Anaximandro'
    },
    {
        id: 3,
        title: 'Anaxímenes',
        image: img3,
        url:'https://es.wikipedia.org/wiki/Anax%C3%ADmenes'
    },
    {
        id: 4,
        title: 'Pitágoras',
        image: img4,
        url:'https://es.wikipedia.org/wiki/Pit%C3%A1goras'
    },
    {
        id: 5,
        title: 'Heráclito',
        image: img5,
        url:'https://es.wikipedia.org/wiki/Her%C3%A1clito'
    },
    {
        id: 6,
        title: 'Parménides',
        image: img6,
        url:'https://es.wikipedia.org/wiki/Parm%C3%A9nides_de_Elea'
    },
    {
        id: 7,
        title: 'Empédocles',
        image: img7,
        url:'https://es.wikipedia.org/wiki/Emp%C3%A9docles'
    },
    {
        id: 8,
        title: 'Anaxágoras',
        image: img8,
        url:'https://es.wikipedia.org/wiki/Anax%C3%A1goras'
    },
    {
        id: 9,
        title: 'Demócrito',
        image: img9,
        url:'https://es.wikipedia.org/wiki/Dem%C3%B3crito'
    }
]

function Cards() {
    return (
        <div className='conteiner d-flex justify-content-center align-items-center h100'>
            <div className='row'>
                {
                    cards.map((card) => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} imagSourse={card.image} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards