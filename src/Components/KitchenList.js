import React, { Component } from 'react'
import { connect } from "react-redux";
import { KitchenListFetchAction } from "./../Actions/KitchenAction"
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";



class KitchenList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
             
        }
    }
    
    


    // This method will call getDropDownData function on compoenentDidMount

    componentDidMount = () => {
    this.props.KitchenListFetchAction()
        
    }


    render() {
console.log('okkkkkkkkkkk',this.props)




        if(this.props.pending===true && this.props.data===undefined){
            return    <font color="red">Loading...</font>

        }
        if(this.props.error!==null  && this.props.data===undefined){
        return    <font color="red">{this.props.error}</font>

        }

         const List = this.props.data !==undefined && this.props.data.result.map((x,index) => 
            
            <tr key={index}>
                <td>{x.kitchen_name}</td>
                <td>{x.state}</td>
                <td>{x.city}</td>
                <td>{x.email}</td>
                <td>{x.status}</td>


            </tr> );




        
        return (

            <div className="container">      
                 <div className ="row">
                    <div className ="col-md-12">

            <h3>Total Kitchens : {this.props.data !==undefined && this.props.data.kitchen_count}</h3>
         
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>kitchen</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Status</th>

                    </tr>

                </thead>
                <tbody>{List}</tbody>
            </Table>


            



            
        </div>
            </div>   
                </div>

        )
    }
}





// action call 
const mapStateToProps = (state) => {
    console.log("yes its workin",state)
    
    let { KichenReducers: { pending, error, results } } = state;
     return {
       pending: pending,
       error: error,
       data: results.data
     };
 
   
   };
   
   
   //action dispatch to kitchensignup action 
   const mapDispatchToProps = dispatch => ({
    KitchenListFetchAction: (params) => dispatch(KitchenListFetchAction(params)),
     
   });
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(KitchenList);