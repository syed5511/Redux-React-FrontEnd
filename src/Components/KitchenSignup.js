import React, { Component } from 'react'
import { connect } from "react-redux";
import { KitchenSignupSubmitAction,KitchenStateCityFectchAction} from "./../Actions/KitchenAction"
import { Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

 class KitchenSignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
            selectedstate : '',
            selectedcity:[],
            userInfo : {firstName:'',lastName:'',kitchen_name:'',address:'',state:'',city:'',zipcode:'',
            email:'',password:'',phone_no:'',agreement_policy:''},
            successful:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onHandleChangeProperty = this.onHandleChangeProperty.bind(this);
        //this.handleChangeCity = this.handleChangeCity.bind(this);
    }


    // This is to fetch data STATE & CITY from API 
    
    componentDidMount = async () => {

       this.props.KitchenStateCityFectchAction()
       
    }
     // this method is to onclick submit button ,it will sent data to backend and pass error or success message
    
     handleSubmit=async (e)=> {
        e.preventDefault();

        let {userInfo} =this.state
        this.props.KitchenSignupSubmitAction(userInfo)

        // convert to lower case before sending to backend
        //let temp=this.state.userInfo;
        //temp.firstName=temp.firstName.toLocaleLowerCase();
        //console.log(' data lower case ',temp)

     }

        

       
   

    onHandleChangeProperty = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
        const obj = this.state.userInfo;
        obj[name] = value;
       
        this.setState({ userInfo: obj },function(){
          // console.log(this.state.userInfo)
        });
    }

    
 // this onchange state is for state onchnage handler 
     handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if(name=='state'){
        //console.log("-----------",name,"====>>>",value)
        this.setState({ selectedstate: value});
        this.onHandleChangeProperty(e);
    }
    
};

render (){

    console.log('helloo',this.props,"======",this.props.signup)

    if(this.props.pending===true && this.props.data===undefined){
        return    <font color="red">Loading...</font>

    }
    if(this.props.error!==null  && this.props.data===undefined){
    return    <font color="red">{this.props.error}</font>

    }
    
    
    return (
        <div className="container">      
        <div className ="row">
           <div className ="col-md-6">

        <form  onSubmit={(e) => this.submitHandler(e)}>

      





            {/*}  
                <font color="red">{this.state.errors!=="" && 
                 this.state.errors.map((err,index)=>
                 <p key={index}>{err.msg}</p>)}</font>
    */}

                <font color="green">{this.state.successful}</font>
            



            firstName <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            required
            onChange={(e) => this.onHandleChangeProperty(e)} />
          
            <br></br>

             lastName <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            required
            onChange={(e) => this.onHandleChangeProperty(e)}
            
        /> <br></br>
             kitchen_name <input
            type="text"
            id="kitchen_name"
            name="kitchen_name"
            className="form-control"
            placeholder="Kitchen name"
            required
            onChange={(e) => this.onHandleChangeProperty(e)} />

            {/*
            <font color="red">{this.props.errors!=="" && 
            this.props.errors.map((err,index)=>
            err.param=='kitchen_name' && err.msg
           )}</font>

*/ }

         <br></br>


         Address <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            placeholder="address"
            required
            onChange={(e) => this.onHandleChangeProperty(e)}
        /> <br></br>


         State 
           <select
           name="state"
           id='state'
           value={this.state.selectedstate}
           onChange={this.handleChange}
           
           required>
           <option value=""> Select state</option>
        {this.props.data!==undefined && this.props.data.result.map((stateList,index)=>{
       return <option key={index}>{stateList.state}</option>
        })} 
        </select>




            <br></br>
            City 
             <select
                    id = 'city'
                    name='city'
                    value={this.state.userInfo.city}
                    required
                    onChange={this.onHandleChangeProperty}>
                        <option value=""> Select City</option>
                                <OnChangeSelectCity state={this.state} props={this.props}/>
                     
           </select>

             <br></br>
         
         
         Zipcode <input
            type="text"
            id="zipcode"
            name="zipcode"
            className="form-control"
            placeholder="zipcode"
            required
            onChange={(e) => this.onHandleChangeProperty(e)} />


{/*
            <font color="red">{this.state.errors!=="" && 
                 this.state.errors.map((err,index)=>
                 err.param=='zipcode' && err.msg
                )}</font>
        
*/}
        <br></br>

        Email <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(e) => this.onHandleChangeProperty(e)}
        />
        

        {/* 
        <font color="red">{this.state.errors!=="" && 
                 this.state.errors.map((err,index)=>
                 err.param=='email' && err.msg
                )}</font>

            */}

        <br></br>

        Password <input
            type="text"
            id="password"
            name="password"
            className="form-control"
            placeholder="password"
            required
            onChange={(e) => this.onHandleChangeProperty(e)}/>

        
            <font color="red">{this.props.signup!==undefined && 
                 this.props.signup.data.errors.map((err,index)=>
                 err.param=='password' && err.msg
                )}</font>

                

        <br></br>

        Phone_no <input
            type="text"
            id="phone_no"
            name="phone_no"
            className="form-control"
            placeholder="phone"
            required
            onChange={(e) => this.onHandleChangeProperty(e)} />

                {/* 
            <font color="red">{this.state.errors!=="" && 
                 this.state.errors.map((err,index)=>
                 err.param=='phone' && err.msg
                )}</font>

                    */}
        <br></br>

        agreement_policy <input
            type="checkbox"
            id="agreement_policy"
            name="agreement_policy"
            className="form-control"
            placeholder="agreement_policy"
            required
            onChange={(e) => this.onHandleChangeProperty(e)}
        /><br></br>
         <button type="submit" onClick={this.handleSubmit}>Add</button>

        </form>

        <div> 
        <a href="url">Signin</a>

                    </div>

        </div>
        </div>
        </div>
   
   
    )
}

}

// action call 
const mapStateToProps = (state) => {
    console.log("yes its workin",state)
    
    let { KichenReducers: { pending, error, results,signup } } = state;
   // console.log("---",state)
    return {
       pending: pending,
       error: error,
       data: results.data,
       signup: signup
     };
 
   
   };
   
   
   //action dispatch to kitchensignup action 
const mapDispatchToProps = (dispatch) => ({
    KitchenSignupSubmitAction: (params) => dispatch(KitchenSignupSubmitAction(params)),
    KitchenStateCityFectchAction: (params) => dispatch(KitchenStateCityFectchAction(params)),
     
   });




   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(KitchenSignup)

   const OnChangeSelectCity =(params)=>{

       const options = params.props.data !==undefined && params.props.data.result.
            filter(stateName=>params.state.selectedstate===stateName.state).
                map((lists)=>
                    lists.cityList.
                        map((data,index)=><option key={index}>{data}</option>)
            )
       return options
   }