import React from 'react';

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      photo: '',
      name: '',
      location: '',
      age: '',
      breed: '',
      gender: '',
      size: ''
    };
  }

  componentDidMount() {
    const queryString = window.location.hash.split('?');
    const params = new URLSearchParams(queryString[1]);
    const location = params.get('location');
    const type = params.get('type');

    fetch(`/api/pets/${location}/${type}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(animal =>
        this.setState({
          id: animal.id,
          photo: animal.primary_photo_cropped.small,
          name: animal.name,
          location: animal.contact.address.city,
          age: animal.age,
          breed: animal.breeds.primary,
          gender: animal.gender,
          size: animal.size
        }))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { photo, name, location, age, breed, gender, size } = this.state;
    return (
      <div className='card card-margin bg-transparent'>
        <div className='row g-0'>
          <div className='col-md-8 d-flex justify-content'>
            <img src={photo} className='img-fluid h-80%'></img>
          </div>
            <div className='col-md-1'>
              <div className='p-2 pet-info card-body w-85'>
                <h2 className='pet-title fw-bolder card-title'>{name}</h2>
                <p className='card-text'><span className="fw-bolder">Location: </span> {location}</p>
                <p className='card-text'><span className="fw-bolder">Age: </span> {age}</p>
                <p className='card-text'><span className="fw-bolder">Breed:</span> {breed}</p>
                <p className='card-text'><span className="fw-bolder">Gender:</span> {gender}</p>
                <p className='card-text'><span className="fw-bolder">Size:</span> {size}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}