import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = () => {
  const { show } = useContext(AlertContext)
  const [value, setValue] = useState('')

  const onSubmit = ev => {
    if (ev.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('request ', value)
    } else {
      show('enter users data!')
    }
  }

  return (
    <div className="form-gruop mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter user name"
        onKeyPress={onSubmit}
        value={value}
        onChange={ev => setValue(ev.target.value)}
      />
    </div>
  )
}

export default Search
