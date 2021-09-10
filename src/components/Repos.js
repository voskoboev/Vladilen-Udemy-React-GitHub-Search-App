import React from 'react'

const Repos = ({ repos }) => (
  <>
  <h2>
    List of repos:
  </h2>
    {repos.map(repo => (
      <div className="card mb-3" key={repo.id}>
        <div className="card-body">
          <h5>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
          </h5>
        </div>
      </div>
    ))}
  </>
)

export default Repos
