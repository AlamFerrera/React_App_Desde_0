import React, {Component, Fragment} from 'react';
import Card from '../components/Card/card';

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=5de6b078';
class List extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            termino: "",
            error : ""
        }
    }
   async componentDidMount() {
      // const res = await fetch('../../assets/data.json')
       const res = await fetch(`${API}&s=batman`);
       const resJson = await res.json();

       this.setState({
           data: resJson.Search
       });
   }

   async handleSubmit(e){
       e.preventDefault();

       //Si se envia el formulario vacio
       if(this.state.termino == ''){
           return this.setState({
               error: "Debe ingresar un nombre valido"
           });
       }

       //Consulta a la API en caso de haber algun valor
       const res = await fetch(`${API}&s=${this.state.termino}`);
       const datos = await res.json();

       //Valida si encuentra lo buscado
       if(!datos.Search){
        return this.setState({
            error: "No se encontraron resultados que coincidan"
        });
       }

       //Si encuentra resultados los renderiza
       this.setState({
            data: datos.Search,
            error: '',
            termino: ''
       });
   }

   render(){
      return(
        <Fragment>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" className="form-control rounded" placeholder="Buscar" 
                        onChange={e => this.setState({termino: e.target.value})}
                        value={this.state.termino}
                        autoFocus />
                    </form>
                    <p className="text-danger">{this.state.error ? this.state.error : ''}</p>
                </div>
            </div>
            <div className="row">
            {
                this.state.data.map(movie => {
                return <Card movie={movie}/>
            })
            }
        </div>
        </Fragment>
      );
   }
}

export default List;