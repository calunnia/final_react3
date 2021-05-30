import React,{useState} from 'react'

function Player({player, search}) {

const [vote, setVote] = useState('') 
const [loading, setLoading] = useState(false) 
const [data,setData] = useState([])


   
const startPost =(playerId) => {

      
    setLoading(true)
    setData([])
    
    fetch(`/api/vote`,{
                        method:"POST",
                        headers: {  'Authorization' : 'dsadkfjghdfkhd',
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                                },
                        body: JSON.stringify({"id":playerId })
                         }
    )
      .then((resopnse) => (resopnse.json()))
      .then((responseAdat) => { setData(responseAdat);
                                 setVote(!vote);               
      })
      .catch(error=>{
                      console.log('error=',error );
                      setData(null)
      })
      .finally( () => {
                        console.log('fetch end');
                        setLoading(false)
      })
    
    }

  //console.log('playerSearch=', player.name,'['+search+']', player.name.includes(search) ? 'true'  : 'false' )
if( player.name.includes(search) )

    return (
        <div className="player">
           <p> <b> Name:</b> {player.name}  </p> 
           <p><button className="vote_btn" onClick={()=>(startPost(player.id))}>
                {loading ? '...' : 
                                  vote ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHkHXzzPrBUoBWJLGKxZ0xRQwM9zslXTiXw&usqp=CAU" width="60px"  alt=""/> : 'Vote'}
            </button></p> 
            


        </div>
    )
    else
    return (<div className="player"><h5> Player name not matcing the filter </h5></div>)
}

export default Player
