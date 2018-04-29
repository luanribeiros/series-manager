import React, { Component } from 'react'

const statuses = {
  'watched': 'Assistindo',
  'watching': 'Assistindo',
  'watch': 'Assistir'
}

class NewSeries extends Component {
  render () {
    return (
      <section className="intro-section"> 
        <h1> Nova série </h1>
        <form>
          <label for="name">Nome: </label>
          <input type="text" id="name" className="form-control" /><br />
          <label>Status</label>
          <select>
            {
              Object
                .keys(statuses)
                .map( key => <option value={key}> {statuses[key]}</option>)
            }
          </select>
          <label for="area">Comentários: </label>
          <textarea type="textarea" id="area" className="form-control">
          </textarea><br />
        </form>
      </section>
    )

  }
}

export default NewSeries