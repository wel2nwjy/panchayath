import React,{useState} from 'react'
import ReactJsAlert from "reactjs-alert";

const SuccessfulAlert = (props) => {
     let concatText = props.text
     let type = props.type
    const [status, setStatus] = useState(true);
    const [action,setaction] =useState(1)



    let alertClose=()=>{
        props.clicked(false)
        setStatus(false)
    }
   
    switch (type) {
      case 1:
           setaction("added");
           break
      case 2:
           setaction("updated");
           break
      case 3:
           setaction("deleted");
           break 
      default:
          const defaultval="";
          return defaultval;               
    }


  return (
    <div>
        <ReactJsAlert
          status={status} // true or false
          type="success" // success, warning, error, info
          title="Successful"
          quotes={true}
          quote={` ${concatText} has been successfully ${action} `}
          Close={alertClose}
        />
    </div>
  )
}

export default SuccessfulAlert