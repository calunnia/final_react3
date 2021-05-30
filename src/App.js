import './App.css'
import React,{useState,useEffect} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Team from './components/Team/Team.jsx'

const App = () => {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [search, setSearch] = useState('')

useEffect(() => {
  setLoading(true)
  setData([])
     
     fetch(`/api/teams`)
       .then((resopnse) => (resopnse.json()))
       .then((responseAdat)=>(setData(responseAdat)))
       .catch(error=>{
                       console.log('error=',error );
                       setData(null)
       })
       .finally( () => {
                         console.log('fetch end');
                         setLoading(false)
       })
     
  return () => {
   // cleanup
  }
}, [])

  return (
    <div className="App">
      <h1>NBM -stadium</h1>
      <input type="text" placeholder="Search..."  onChange={ (ev) => ( setSearch(ev.target.value) )}/>
      {loading && <Loading/>}
      {data === null
                    ? <p> Uppss something happend</p>
                    : data.map((team, i )=>( <Team team={team} key={i.toString()} search={search}/> ))}
    </div>
  )
}

export default App
