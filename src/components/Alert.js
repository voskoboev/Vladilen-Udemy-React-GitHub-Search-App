import React from 'react'

const Alert = ({ alert }) => {
  return (
    <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
      {alert.text}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
