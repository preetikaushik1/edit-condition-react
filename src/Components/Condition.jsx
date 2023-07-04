
import React from 'react'

class Condition extends React.Component {

constructor(props) {
    super(props)
    this.state = {

        text : "" ,
        inputText : "" ,
        status : "edit"
    }

    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.textChange = this.textChange.bind(this)
}

textChange = (event) => {

    this.setState({
        inputText : event.target.value
    })
}

save = () => {
    this.setState({
        status : "view",
        text : this.state.inputText
    })
}

edit = () => {
    this.setState({
        status: 'edit'
    })
}

render(){

    if (this.state.status === 'view'){
        return(
            <>
             <div className='outerbox'>
                 <h1>My today's status</h1>
                 <h2>{this.state.text}</h2>
                 <button onClick={this.edit} className='btn2'>Edit</button>
                 </div>
            </>
        )
    } else{
        return(
            <>
            <div className='outerbox'>
            <h1>Show your today's  status</h1>
            <input type='text' value={this.state.inputText} onChange={this.textChange}  className='input'/>
            <button onClick={this.save} className='btn'>Save</button>
            </div>
       </>
        )
    }
}

}

export default Condition