import React from 'react'
import Search from '../components/Search'
import Card from '../components/Card'

const Home = () => {
  const cards = new Array(9).fill('').map((_, i) => i)

  return (
    <>
      <Search />
      <div className="row">
        {cards.map((card, index) => {
          return (
            <div className="col-sm-4 mb-4" key={index}>
              <Card />
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Home
