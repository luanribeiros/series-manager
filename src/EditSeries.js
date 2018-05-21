import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Api from './Api'

const statuses = {
  'watched': 'Assisti',
  'watching': 'Assistindo',
  'watch': 'Assistir'
}

class EditSeries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false,
      redirect: false,
      series: {}
    }

    this.saveSeries = this.saveSeries.bind(this)
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    Api.loadSeriesById(this.props.match.params.id)
      .then((res) => {
        this.setState({ series: res.data })
        this.refs.name.value = this.state.series.name
        this.refs.genre.value = this.state.series.genre
        this.refs.comments.value = this.state.series.comments
        this.refs.status.value = this.state.series.status
      })
    Api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }

  saveSeries() { 
    const NewSeries = {
      id: this.props.match.params.id,
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    }
    Object.freeze(NewSeries)
    Api.updateSeries(NewSeries)
      .then((res) => {
        this.setState({
          redirect: '/series/'+this.refs.genre.value
        })
      })
  }

  render () {
    return (
      <section className="intro-section">
        { this.state.redirect && 
          <Redirect to={this.state.redirect} /> 
        } 
        <h1> Editar  série </h1>
        <form>
          <label for="name">Nome: </label>
          <input type="text" ref='name' className="form-control" /><br />
          
          <label>Status</label>
          <select ref='status'>
            {
              Object
                .keys(statuses)
                .map( key => <option key={key} value={key}> {statuses[key] }</option>)
            }
          </select><br />
          
          <label>Gênero</label>
          <select ref='genre'>
            {
              this.state.genres
                .map( key => <option key={key} value={key}> {key}</option>)
            }
          </select><br />

          <label for="area">Comentários: </label>
          <textarea type="textarea" id="area" ref='comments' className="form-control">
          </textarea><br />
          <button type="button" onClick={this.saveSeries}> Salvar </button>
        </form>
      </section>
    )

  }
}

export default EditSeries