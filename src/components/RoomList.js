import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rooms: [],
            newRoomName: ''
        }
        
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }


    handleRoomChange(e) {
        this.setState({ newRoomName: e.target.value })
    }

    createRoom(newRoomName) {
        this.roomsRef.push({ name: newRoomName });
        this.setState({ newRoomName: ''});
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.createRoom(this.state.newRoomName);
        
    }

    render() {
        return (
            <div className="room-list">
                <section>
                    <h1>Room List</h1>
                        {this.state.rooms.map((room, index) => 
                            <li
                                key={index}
                                onClick={() => this.props.setActiveRoom(room)}>
                                {room.name}
                            </li>
                        )}
                </section>
                <div id="new-room">
                    <form onSubmit={ (e) => this.handleSubmit(e) }>
                        <label>
                            Room Name:
                            <input
                                type="text"
                                placeholder="enter room name"
                                value={this.state.newRoomName}
                                onChange={ (e) => this.handleRoomChange(e) }
                            />
                        </label>
                            <input 
                                type="submit"
                                value="submit"
                            />
                    </form>
                </div>
            </div>
        )
    }
}

export default RoomList;