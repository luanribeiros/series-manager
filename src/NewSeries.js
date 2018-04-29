import React, { Component } from 'react'

import Api from './Api'

const statuses = {
  'watched': 'Assistindo',
  'watching': 'Assistindo',
  'watch': 'Assistir'
}

class NewSeries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    Api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }

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
          </select><br />
          
          <label>Gênero</label>
          <select>
            {
              Object
                .keys(statuses)
                .map( key => <option value={key}> {statuses[key]}</option>)
            }
          </select><br />

          <label for="area">Comentários: </label>
          <textarea type="textarea" id="area" className="form-control">
          </textarea><br />
        </form>
      </section>
    )

  }
}

export default NewSeries