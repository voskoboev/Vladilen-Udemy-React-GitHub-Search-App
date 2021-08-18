import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => (
  <div className="card p-3">
    <img className="card-img-top"
      src={''}
      alt={''}
    />
    <div className="card-body">
      <h5 className="card-title">
        React js
      </h5>
    </div>
    <Link
      to={'/profile/'}
      className="btn btn-primary"
    >
      Open
    </Link>
  </div>
)

export default Card
