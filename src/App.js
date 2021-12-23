import React, {Component} from 'react';
import styles from './AppStyles.module.css';
import Body from './Components/Body';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department : "",
      rating: "",
      items: []
    }
  }
  getValue = (event) => {
    this.setState(  { [event.target.name]: event.target.value }  )
  }
  showValue = (event) => {
        event.preventDefault();
        const tempObj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating
        }
        const tempArr = this.state.items;
        tempArr.push(tempObj)
        this.setState(
            {
                name: "",
                department:"",
                rating: "",
                items: [...tempArr]
            }
        )
  }
  render() {
console.log(this.state.items);
    return(
      <div>
           <Header/>

          <div className={styles.formBox}>
              <form>
                  <label className={styles.inputLabel}>Name:</label>
                  <input className={styles.inputField} type="text" name="name" value={this.state.name} onChange={ this.getValue } />
                  <br/>
                  <label className={styles.inputLabel}>Department:</label>
                  <input className={styles.inputField} type="text" name="department" value={this.state.department} onChange={ this.getValue } />
                  <br/>
                  <label className={styles.inputLabel}>Rating:</label>
                  <input className={styles.inputField} type="number" name="rating" value={this.state.rating}  onChange={  this.getValue }/>
                  <br/>
                  <button className={styles.submitBtn} onClick={ this.showValue }>Submit</button>
              </form>
          </div>



          <div className={styles.displayBox}>
              {   this.state.items.map((value, index)=>{
                  return(
                      <Body  name={value.name} dept={value.department} rating={value.rating}/>
                  )
              })  }
          </div>


      </div>
    )
  }
}

export default App;






////////
// doubt:
// { [event.target.name]: event.target.value }
