import React, { Component } from 'react';
import styles from '../styles/formStyles.module.css'
import { useForm } from 'react-hook-form';

class Form extends Component {
    constructor(props) {
        super(props);
    }
    state = {
  
        emailValue:'',
        nameValue:'',
        numberValue:'',
        dayValue:'Monday',
        timeValue:'5 pm',
        yesOrNo:'',
        emailError:0,
        nameError:0,
        numberError:0,


      }
      validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}
  numberValue=(e)=>{
   var z=/^$/
  }
      submitDetails=(e)=>{
          e.preventDefault()
          var x=this.validMail(this.state.emailValue)
        if(x===false){
            this.setState({emailError:1})
        }else{
            this.setState({emailError:0})
        }
        var y=this.state.numberValue.length<=9?true:false 
    if(y===true){
        this.setState({numberError:1})
    }else{
        this.setState({numberError:0})

    }
    if(x===true && y===false){
        alert("thank you for submitting the form")
        this.setState({emailValue:'',nameValue:'',numberValue:''})
    }
    }
    render() { 
        return (
            <div className={styles.mainContainer}> 
          
            <div className={styles.container}>
                <div className={styles.text}>Join 1000 people who took the free introduction in the last week</div>
                <form onSubmit={this.submitDetails} className={styles.inputContainer}>
             <div >
             <div className={styles.label}>Name *</div>
              <input type="text" required className={styles.inputStyles} value={this.state.nameValue}  onChange={
                  (e)=>{
                     this.setState({nameValue:e.target.value})
                  }
              } ></input>
             </div>
             <div >
             <div className={styles.label}>Email *</div>
              <input type="text"  required className={styles.inputStyles} value={this.state.emailValue} onChange={
                  (e)=>{
                     this.setState({emailValue:e.target.value})
                  }
              } ></input>
             {this.state.emailError===1? <div style={{color:"red"}} >please enter valid email address</div>:""}
             </div>
             <div >
             <div className={styles.label}>Phone Number *</div>
              <input type="text" required className={styles.inputStyles} value={this.state.numberValue} onChange={
                  (e)=>{
                     this.setState({numberValue:e.target.value})
                  }
              } ></input>
             {this.state.numberError===1? <div style={{color:"red"}} >please enter valid phone number</div>:""}
     
             </div>
             <div >
             <div className={styles.label}>Select Day</div>
              <select className={styles.inputStyles}>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
              </select>
             </div>
             <div >
             <div className={styles.label}>Select Time</div>
              <select className={styles.inputStyles}>
                  <option>5 pm</option>
                  <option>7 pm</option>
                  <option>9 pm</option>
              </select>
             </div>
             <div>
                 <div  className={styles.label}>Have you learnt Sudarshan Kriya *</div>
                 <input type="radio" name="option" value="yes"></input>
                 <label>Yes</label>
        <input type="radio" name="option" value="no" ></input>
        <lavel>No</lavel>
             </div>
            <input type="submit" value="Submit" className={styles.inputButton}></input>
        
            </form>
            </div>
             </div> 
          
          );
    }
}
 
export default Form;