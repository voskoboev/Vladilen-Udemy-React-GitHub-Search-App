import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'
import Repos from '../components/Repos'

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    //eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading</p>
  }

  const {
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">
        To Home
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={login}
                style={{ width: '150px' }}
              />
              <h1>
                {login}
              </h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>
                    Bio
                  </h3>
                  <p>
                    {bio}
                  </p>
                </>
              }
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Open profile
              </a>
              <ul>
                {
                  company && <li>
                    <strong>
                      Company:
                    </strong>
                    {company}
                  </li>
                }
                {
                  blog && <li>
                    <strong>
                      Site:
                    </strong>
                    {blog}
                  </li>
                }
              </ul>
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-secondary">Following: {following}</div>
              <div className="badge badge-info">Repos: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

export default Profile
