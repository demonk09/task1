import {useEffect,useState} from 'react'
import axios from 'axios'

function Int() {
  let[da,setData]=useState([])
  let[sf,setSf]=useState("")
  useEffect(()=>{
    axios.get("https://api.github.com/users/facebook/repos").then((res)=>{
      setData(res.data)
      // console.log(JSON.stringify(res.data));
      // console.log(res.data.id)
    })
  },[])
  let fun=(e)=>{
    setSf(e.target.value)
    let reg=new RegExp(e.target.value)
    setData(da.filter((item)=>reg.test(item["name"])))
    console.log(da.filter((item)=>reg.test(item["name"])));
  }

  let fun1=(fn)=>{
    for (let i =   0; i <  da.length-1; i++ ) {
      for (let j = i+1; j < da.length; j++) {
        if (da[i][fn]>da[j][fn]) {
            let t=da[i]
            da[i]=da[j]
            da[j]=t
        }
      } 
      
    }
    setData([...da])
  }

  return (
    <div>
      <input  id="" onChange={fun} value={sf} />
    <table border={1}>
      <tr>
        <th onClick={()=>fun1('id')}>ID</th>
        <th onClick={()=>fun1('node_id')}>node_ID</th>
        <th onClick={()=>fun1('name')}>name</th>
        <th onClick={()=>fun1('full_name')}>Full_name</th>
      </tr>

   
 
      {
        da.map((item)=>{
          return(
          <tr>
            <td>{item.id}</td>
            <td>{item.node_id}</td>
            <td>{item.name}</td>
            <td>{item.full_name}</td>
          </tr>
          )
        })
      }
       </table>
    </div>
  )
}
export default Int