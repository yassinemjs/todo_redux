
import React from 'react'
import {filterActive ,filterComplete} from '../store/actions/actions';
import {connect} from 'react-redux'

const Filter = (showActive,showComplete) => {
   return (
       <div>
       <button onClick='' className="btn">
         Show All
       </button>
       <button onClick={() => showActive()} className="btn">
         Show Active
       </button>
       <button onClick={() => showComplete()} className="btn">
         Show Complete
       </button>
       </div>
   )
}



const mapDispatchToProps = dispatch => ({
    showActive: () => dispatch(filterActive()),
    showComplete : () => dispatch (filterComplete()),
})

export default connect(null, mapDispatchToProps) (Filter );

