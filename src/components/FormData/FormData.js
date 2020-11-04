import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class FormData extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            salary:'',
            password:'',
            gender:'',
            address:'',
            isEditable:false
        }
    }
    changeEditmode=()=>{
        this.setState({
            isEditable: !this.state.isEditable
        })
    }
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangePassword =(e)=> {
        this.setState({ password: e.target.value })
    }

    onChangeSalary=(e)=>{
        this.setState({
            salary:e.target.value
        })
    }
    onChangeAddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    onChangeGender=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
            phone: this.state.phone,
            salary:this.state.salary,
            address:this.state.address
        })
    }

    
    updateValue=()=>{
        this.setState({
            isEditable: false,
            value: this.refs.textName.value
        })
    }



    render() {
        return (

            this.state.isEditable ?

            <div class="mt-5">
                <Button variant="danger"  onClick={this.changeEditmode}>Cancel</Button>{' '}
                <Button  variant="primary" onClick={this.updateValue}>Save</Button>
            <div class="mt-5">

            <div class="form-group row ">
                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-8">
                <input type="text" id="inputName" class="form-control ml-4" ref="textName" value={this.state.name} onChange={this.onChangeName} />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                <input type="email" id="inputEmail" class="form-control ml-4" ref="textName" value={this.state.email} onChange={this.onChangeEmail} />
                </div>
            </div>

            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-8">
                <input type="password" class="form-control ml-4" id="inputPassword" ref="textName" value={this.state.password} placeholder="Password" onChange={this.onChangePassword}/>
                </div>
            </div>

            <div class="form-group row">
                <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                <div class="col-sm-8">
                <input type="tel" id="inputPhone" class="form-control ml-4" ref="textName" value={this.state.phone} onChange={this.onChangePhone} />
                </div>
            </div>


            <div class="form-group row">
                <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" ref="textName" id="inputAddress" class="form-control ml-4" value={this.state.address} onChage={this.onChangeAddress}  />
                </div>
            </div>


            <div class="form-group row">
                <label for="inputSalary" class="col-sm-2 col-form-label">Salary</label>
                <div class="col-sm-8">
                <input type="tel" id="inputSalary" class="form-control ml-4" ref="textName" value={this.state.salary} onChange={this.onChangeSalary} placeholder="INR" />
                </div>
             </div>

            <div class="form-group row">
                <label for="gender"  class="col-sm-2 col-form-label">Gender</label>
                <div class="col-sm-8">
                    <select class="form-control ml-4" id="gender" ref="textName" value={this.state.gender} onChange={this.onChangeGender}>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                </div>
            </div>
            </div>
            </div> :
            <div class="container mt-5">
            <div class="row">
            <div class="col-xs-6">
                <form onSubmit={this.onSubmit} >

                    <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text" id="inputName" class="form-control ml-4" required value={this.state.name} onChange={this.onChangeName} />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email" id="inputEmail" required class="form-control ml-4" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                    </div>

                   
                    <div class="form-group row">
                        <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                        <input type="tel" id="inputPhone" class="form-control ml-4" required value={this.state.phone} onChange={this.onChangePhone} />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="inputaddr" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                        <input type="text" id="inputaddr" class="form-control ml-4" required value={this.state.address} onChange={this.onChangeAddress}  />
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control ml-4" required id="inputPassword" placeholder="Password" onChange={this.onChangePassword}/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-10">
                        <select class="form-control ml-4" id="gender" required value={this.state.gender} onChange={this.onChangeGender}>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                    </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputSalary" class="col-sm-2 col-form-label">Salary</label>
                        <div class="col-sm-10">
                        <input type="tel" id="inputSalary" class="form-control ml-4" required value={this.state.salary} onChange={this.onChangeSalary} placeholder="INR" />
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <button type="submit" onClick={this.changeEditmode} className="btn btn-primary btn-block">Edit</button>
                </form>
                </div>
                </div>
            </div> 
        )
    }
}
