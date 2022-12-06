import axios from 'axios'

const UseFetch = async (api,data)=>{

    let res = await axios.get(api,{params:{ email : data}})

    return res;

}

export default UseFetch;