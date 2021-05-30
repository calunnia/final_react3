import React,{useState} from 'react'
import Player from '../Player/Player.jsx'


function Team({team,search}) {

const [ show, setShow] = useState('')

    return (
        <div className="team">
            
            <p> <b>Team name:</b>  { team.name }</p> 
            <p> <b>Stadium:</b>  { team.stadium }</p> 
             <button className="show_btn" onClick={()=>(setShow(!show))}>
                 {show ? 'Show less' : 'Show more'}
             </button>

             {show ? team.franchisePlayers.map((player)=>( <Player player={player} search={search}/>))
                   : ''
             } 
            
        </div>
    )
}

export default Team
