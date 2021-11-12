import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

const articleService = ()=> {
    return axiosWithAuth()
    .get('http://localhost:5000/api/articles')
    .then(resp=>{
       return(resp)
    })
    .catch(err =>{
        console.log(err)
    })
}


export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.