import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = ev => {
    if (ev.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('enter users data!')
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
