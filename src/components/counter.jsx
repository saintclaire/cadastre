import React,{ Component } from 'react';

class Counter  extends Component {
    state = {  
        count:1,
        tags: ['tag1','tag2','tag3']
           } ;

           renderTags(){

           return (
   <>
            <span className={this.getClasse()}>{this.state.count}</span>
            <button className='btn btn-sm' onClick={this.handleIncrements}>incremental</button>
            </>
           );


            
           }
    handleIncrements=()=> {
        this.setState( {count: this.state.count + 1});

    }

    render() { 
    
      return (
      <>
      {this.state.tags.length === 0 && "Please create a new tag"}
      {this.renderTags()}
      </>);
    }
    getClasse() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount(){
        const {count}= this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;