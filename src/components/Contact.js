import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planetNames: [],
            isLoading: true,
            loadingTime: 0
        }
    }

    componentDidMount() {
        const planetNames = JSON.parse(localStorage.getItem('planet_names'));
        const loadingTime = JSON.parse(localStorage.getItem('loading_time'));
        if (planetNames && loadingTime > Date.now()) {
            this.setState({
                isLoading: false,
                planetNames
            });
        } else {
            fetch(`https://sw-info-api.herokuapp.com/v1/planets`)
                .then(response => response.json())
                .then(data => {
                    const loadingTime = Date.now() + (30 * 24 * 60 * 60 * 1000);
                    const planetNames = [];
                    for (let i = 0; i < data.length; i++) {
                        planetNames.push(data[i].name);
                    }
                    this.setState({
                        isLoading: false,
                        loadingTime,
                        planetNames
                    });
                    localStorage.setItem('planet_names', JSON.stringify(planetNames));
                    localStorage.setItem('loading_time', JSON.stringify(loadingTime));
                })
        }
    }

    render() {
        return (
            <div className="container">
                <form className='row flex-column'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">
                        {this.state.planetNames.map(
                            (item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            }
                        )}
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;