 import { combineReducers } from 'redux';
 
 const songReducer=()=>{
     return [
        {title:'I like me better',duration:'2:56'},
        {title:'sunroof',duration:'3:02'},
        {title:'The last ride',duration:'2:12'},
        {title:'we don\'t talk any more',duration:'3:12'}
     ];
 };
 const selectedSongReducer=(selectedSong=null,action)=>{
     if(action.type==='SONG_SELECTED'){
        return action.payload;
     }
     return selectedSong;
 };

 export default combineReducers({
     songs:songReducer,
     selectedSong:selectedSongReducer
 });

