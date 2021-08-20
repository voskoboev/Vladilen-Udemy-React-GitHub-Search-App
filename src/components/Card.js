import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ user }) => {

  console.log('user', user)

  return (
    <div className="card p-3">
      <img className="card-img-top"
        src={user.avatar_url}
        alt={user.login}
      />
      <div className="card-body">
        <h5 className="card-title">
          {user.login}
        </h5>
      </div>
      <Link
        to={'/profile/' + user.login}
        className="btn btn-primary"
      >
        Open
      </Link>
    </div>
  )
}


export default Card
