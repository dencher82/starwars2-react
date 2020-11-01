import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personInfo: {
                name: null,
                height: null,
                birth_year: null,
                mass: null,
                hair_color: null,
                skin_color: null,
                eye_color: null
            },
            isLoading: true,
            loadingTime: 0
        }
    }

    componentDidMount() {
        const personInfo = JSON.parse(localStorage.getItem('person_info'));
        const loadingTime = JSON.parse(localStorage.getItem('loading_time'));
        if (personInfo && loadingTime < Date.now()) {
            this.setState({
                isLoading: false,
                personInfo
            });
        } else {
            fetch(`https://sw-info-api.herokuapp.com/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const loadingTime = Date.now() + (30 * 24 * 60 * 60 * 1000);
                    const personInfo = {
                        name: data.name,
                        height: data.height,
                        birth_year: data.birth_year,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                        };
                    this.setState({
                        isLoading: false,
                        loadingTime,
                        personInfo
                    });
                    localStorage.setItem('person_info', JSON.stringify(personInfo));
                    localStorage.setItem('loading_time', JSON.stringify(loadingTime));
                })
        }
    }

    render () {
        return this.state.isLoading ? 'Loading...' :
         (
            <div>
                <p>name: {this.state.personInfo.name}</p>
                <p>height: {this.state.personInfo.height}</p>
                <p>birth year: {this.state.personInfo.birth_year}</p>
                <p>mass: {this.state.personInfo.mass}</p>
                <p>hair color: {this.state.personInfo.hair_color}</p>
                <p>skin color: {this.state.personInfo.skin_color}</p>
                <p>eye color: {this.state.personInfo.eye_color}</p>
            </div>
        );
    }
}

export default AboutMe;