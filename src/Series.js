import React, { Component } from 'react'
import Api from './Api'

const statuses = {
  'watched': 'Assistindo',
  'watching': 'Assistindo',
  'watch': 'Assistir'
}

class Series extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      series: []
    }

    this.renderSeries = this.renderSeries.bind(this)

  }

  componentDidMount() {
    this.setState({ isLoading: true })
    Api.loadSeriesByGenre(this.props.match.params.genre)
      .then((res) => {
        this.setState({
          isLoading: false,
          series: res.data
        })
      })
  }

  deleteSeries(id) {
    Api.deleteSeries(id)
      .then((res) => console.log(res))
  }
  
  renderSeries(series) {
    return (
      <div className="item  col-xs-4 col-lg-4">
        <div className="thumbnail">
          <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
          <div className="caption">
            <h4 className="group inner list-group-item-heading">
              { series.name }</h4>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p className="lead">
                  { series.genre } / {statuses[series.status]}</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a className="btn btn-success" href="">Gerenciar</a>
                <a className="btn btn-success" href="" onClick={ this.deleteSeries(series.id) }>Excluir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
        <section id="intro" className="intro-section">
          <h1> Series {this.props.match.params.genre}</h1>

          <div id="series" className="row list-group">
            { !this.state.isLoading && 
              this.state.series.map(this.renderSeries)
            }
          </div>
        </section>
    )
  }
}

export default Series