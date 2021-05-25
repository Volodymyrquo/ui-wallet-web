import React, { FC } from 'react'
import '../../../assets/scss/cards/ultainfinityCards.scss'
import '../../../assets/scss/cards/card.scss'
import { backgroundList } from '../background'

export const UltaifinityCards: FC = () => {

  return (
    <section className="ultaifinity-cards">
      <h2 className="ultaifinity-cards__title">Purchased cards</h2>
      <article className="ultaifinity-cards__inner">
        {backgroundList.map(color => (
          <button
            key={color.background}
            type="button"
            onClick={(e)=>{e.preventDefault()}}
          >
            <div
              className="ultaifinity-cards__card card"
              style={{background: `URL(${color.background})`}}
            > 
            </div>
          </button>
        ))}
      </article>
    </section>
  )
}