import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

// What piece of state I need to listen to and send down as props
const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

// What props I should listen to that are actions 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())   // return in one line
        .then(users => {                    //
            this.setState({ robots: users}) // return in multiple lines, could convert to one line too
        });                                 //
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

// We have created an action that gets dispatched into the reducer
// that - based on that action - takes the state and changes it in the store.
// Because the store gets updated React components that are interested
// are gonna listen to those changes and make a view change.
export default connect(mapStateToProps, mapDispatchToProps)(App);