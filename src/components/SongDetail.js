import React from 'react';
import {connect} from 'react-redux';
const SongDetail=(props)=>{
   if(!props.song){
    return <div>jksjds</div>
   }
   return( 
   <div>
   <h3>Details x for :</h3>
   <p>
    Title: {props.song.title}
    <br/>
    Duration:{props.song.duration};
   </p>
    </div>);
};   
const mapStateToProps=(state)=>{
    return {song:state.selectedSong};
}
export default connect(mapStateToProps)(SongDetail);