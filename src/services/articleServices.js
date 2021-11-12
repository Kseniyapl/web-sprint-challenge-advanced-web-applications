import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

const articleService = ()=> {
    return axiosWithAuth()
    .get('http://localhost:5000/api/articles')
    .then(resp=>{
       return(resp.data)
    })
    .catch(err =>{
        console.log(err)
    })
}


export default articleService;

