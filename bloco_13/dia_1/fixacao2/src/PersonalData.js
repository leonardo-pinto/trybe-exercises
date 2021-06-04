import React, { Component } from 'react';
import PersonCard from './PersonCard';
import Loading from './Loading';

export default class PersonalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      loading: true,
    }
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const ageData = 50;
    if (nextState.person[0].dob.age > ageData) {
      return false;
    }
    return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person, loading } = this.state
    if (loading)  return <Loading />;
    return (
      
      <div>
        {person.map((currentPerson, index) => (
          <PersonCard key={ index } person= { this.getUserElements(currentPerson) } />))}
      </div>
    )
  }
}
