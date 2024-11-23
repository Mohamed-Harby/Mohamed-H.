import React from 'react'

import "./WorkingOn.scss"

const WorkingOn = () => {
  return (
    <div>
      <h2>What I'm doing these days ?</h2>
      <p>
        <ul>
          <li>
            <p>
              Practicing Coding Problems on codeforces rated 1300 to refresh my problem solving skills with not easy to solve problems. 🧠
              <br />
              <a href='https://codeforces.com/problemset?tags=1300-1300' target="_blank" >
              see problems
              </a>
            </p>
          </li>
          <li>
            <p>
              developing backend for online educational platform using spring framework and mysql. 👨‍💻
              <br />
              <a href='https://github.com/Mohamed-Harby/guillotine-cutting-ga' target="_blank" >
              see repository
              </a>
            </p>
          </li>
          <li>
            <p>
              solving the <a href='https://en.wikipedia.org/wiki/Guillotine_cutting' target="_blank" >guillotine cutting problem</a> using optimization techniques.
              Currently utilizing genetic algorithms to get a good performance program.🤯
            </p>
          </li>
        </ul>
      </p>
    </div>
  )
}

export default WorkingOn