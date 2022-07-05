import axios from "axios"
function authModule() {
    // const authOrigins = ["http://localhost:5000/api", "http://localhost:3000"];
    const authOrigins =["/people","/download","/user"]  //mention all the routes
    let token = '';
    
    this.setToken = (value) => {
        
        token = value
    }

    this.get = (inputUrl,inputValues) => {

        if(inputValues){
            
            if (token && authOrigins.some(v=>inputUrl.includes(v))) {
                return axios.get(inputUrl, { headers: {"authorization" : `Bearer ${token}`} },inputValues);
            }else{
                return axios.get(inputUrl,inputValues)
            }
        }else{
            if (token && authOrigins.some(v=>inputUrl.includes(v))) {
                return axios.get(inputUrl, { headers: {"authorization" : `Bearer ${token}`} });
            }else{
                return axios.get(inputUrl)
            } 
        }           

    }

    this.get = (inputUrl) => {

        if (token && authOrigins.some(v=>inputUrl.includes(v))) {
            return axios.get(inputUrl, { headers: {"authorization" : `Bearer ${token}`} });
        }else{
            return axios.get(inputUrl)
        }         

    }

    this.post = (inputUrl,inputValues) => {
        if (token && authOrigins.includes(inputUrl)) {
            return axios.post(inputUrl, { headers: {"authorization" : `Bearer ${token}`} },inputValues);
        }
        return axios.post(inputUrl,inputValues)   
    }
}

const auth = new authModule();

export default auth;