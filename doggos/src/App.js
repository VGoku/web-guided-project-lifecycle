// import React from 'react';
// import axios from 'axios';
// import SearchForm from './SearchForm';
// import './styles.css';

// const fetchDogs = (breed) => {
//     return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
//     .then(resp => {
//       return resp; // You don't need to wrap the response in parentheses
//     })
//     .catch(err => console.log('noooo'));
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             doggos: [],
//             currentBreed: 'husky' // Corrected variable name
//         }
//     }

//     componentDidMount() {
//         console.log("component did mount");
//         fetchDogs(this.state.currentBreed).then(res => { // Corrected variable name
//             this.setState({doggos: res.data.message});
//         });
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("component did update");
//         if (prevState.doggos !== this.state.doggos) {
//             console.log("the dogs have changed");
//             if (this.state.breed === "chihuahua") {
//                 fetchDogs("husky").then(res => {
//                     this.setState({doggos: res.data.message, breed: "husky"})
//                 })
//             }

//         }
//         console.log(prevState);
//         console.log(this.state);
//     }

//     searchDogs = dogName => {
//         console.log("search dogs");
//         fetchDogs(dogName).then(res => {
//             this.setState({doggos: res.data.message, breed: dogName});
//         })
//     }

//     render() {
//         console.log("render function ran");
//         return(
//             <>
//             <h1>Hello Dog Lovers!</h1>
//             <h2>Search for chihuahua too!</h2>
//             <SearchForm searchDogs={this.searchDogs} />
//             <div className="image-container"> {/* Apply the image-container class */}
//             {this.state.doggos.map((dog, index) => (
//             <img width='250' src={dog} key={index} alt={dog} />
//                 ))}
//                 </div>
//             </>
//         )
//     }
// }

// export default App;

import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import './styles.css';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(resp => {
      return resp;
    })
    .catch(err => console.log('Error:', err));
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doggos: [],
            currentBreed: 'husky'
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetchDogs(this.state.currentBreed).then(res => {
            this.setState({doggos: res.data.message});
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update");
        // if (prevState.doggos !== this.state.doggos) {
        //     console.log("the dogs have changed");
        //     if (this.state.currentBreed === "chihuahua") {
        //         fetchDogs("husky").then(res => {
        //             this.setState({doggos: res.data.message, currentBreed: "husky"})
        //         })
        //     }

        // }
        console.log(prevState);
        console.log(this.state);
    }

    searchDogs = dogName => {
        console.log("search dogs");
        fetchDogs(dogName).then(res => {
            this.setState({doggos: res.data.message, currentBreed: dogName});
        })
    }

    render() {
        console.log("render function ran");
        return(
            <>
            <h1>Hello Dog Lovers!</h1>
            <h2>Search for chihuahua too!</h2>
            <SearchForm searchDogs={this.searchDogs} />
            <div className="image-container">
            {this.state.doggos.map((dog, index) => (
            <img width='250' src={dog} key={index} alt={dog} />
                ))}
                </div>
            </>
        )
    }
}

export default App;