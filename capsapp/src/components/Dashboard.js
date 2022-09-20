import React from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Name:'',
        Age:0,
        DOB:'',
        Gender:'',
        Files: null
      };
      this.id=""
    }
    
    componentDidMount(){
      this.id="00000002"
      const docref=doc(db,"Patients", this.id)
      getDoc(docref).then((doc) =>{
        console.log(doc.data(), doc.id)
        const dc=doc.data()
        this.setState({Name:dc.Name})
        this.setState({Age:dc.Age})
        this.setState({DOB:dc.DOB})
        this.setState({Gender:dc.Gender})
        const fls= []
        db.collection("Patients/"+doc.id+"/Files").get().then( subsnapshot =>{
          subsnapshot.forEach( fl => {
            const fdat = fl.data()
            fls.push(fdat)
          })
          this.setState({ Files: fls})
        })
      })
      console.log(this.state.Files)
    }
    
    render(){
      return (
        <div>
          <h1>Patient Details</h1>
            <div>
                <h3>Patient Name  : {this.state.Name}</h3>
                <h3>Age           : {this.state.Age}</h3>
                <h3>Gender        : {this.state.Gender}</h3>
                <h3>Date Of Birth : {this.state.DOB}</h3>
            </div>
          <h1>Patient Files</h1>
          {
            this.state.Files && this.state.Files.map( fl => {
              return(
                <div>
                  <p key={JSON.stringify(fl)}>{fl.FileDesc} - {fl.Hash}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
}

export default Dashboard