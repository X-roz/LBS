import axios from 'axios'

const TUseFetch = async (api,data)=>{

    let res = await axios.get(api,{params:{ email : data}})

    return res;

}

export default TUseFetch;