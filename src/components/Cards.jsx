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
        image: img1
    },
    {
        id: 2,
        title: 'Anaxímandro',
        image: img2
    },
    {
        id: 3,
        title: 'Anaxímenes',
        image: img3
    },
    {
        id: 4,
        title: 'Pitágoras',
        image: img4
    },
    {
        id: 5,
        title: 'Heráclito',
        image: img5
    },
    {
        id: 6,
        title: 'Parménides',
        image: img6
    },
    {
        id: 7,
        title: 'Empédocles',
        image: img7
    },
    {
        id: 8,
        title: 'Anaxágoras',
        image: img8
    },
    {
        id: 9,
        title: 'Demócrito',
        image: img9
    }
]

function Cards() {
    return (
        <div className='conteiner d-flex justify-content-center align-items-center h100'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} imagSourse={card.image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards