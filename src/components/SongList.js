import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

function abc() {
    console.log("Hello");
}

class SongList extends Component {
    render() {
        // console.log(this.props.songs);
        const list = this.props.songs.map((song) =>
            <div className='item' key={song.title}>
                <div className='right floated content'>
                    <button
                        className='ui button primary'
                        onClick={() => this.props.selectSong(song)}>
                        Select
                    </button>
                </div>
                < div className='content'>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '2rem', marginBottom: '-5px' }}>{song.title}</p>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '1.5rem' }}>{song.duration}</p>
                </div >
            </div>
        )

        return (

            <div className='ui divided list'>{list}</div>

        );
    }
};

const mapStateToProps = (state) => {

    return { songs: state.songs };
}

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList); 