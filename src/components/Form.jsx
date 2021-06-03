import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'

const LocationInput = ({setWeatherData}) => {
  const [lat, setLat] = React.useState('');
  const [lon, setLon] = React.useState('')

  const onSubmit = (_event) => {
    const params = {lat, lon}
    const queryParams = Object.keys(params)
                .map(
                    (k) =>
                        encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
                )
                .join("&");

    fetch(`${'http://localhost:8000/weather/?' + queryParams}`, {lat, lon}).then((response) => response.json()).then((json) => setWeatherData(json))

  }
  
    return (
        <Container>
            <Form>
  <Form.Group >
    <Form.Label htmlFor='lat'>Latitude</Form.Label>
    <Form.Control type="text" placeholder="Latitude" onChange={(event => setLat(event.target.value))} />

  </Form.Group>

  <Form.Group >
    <Form.Label htmlFor="lon">Longitude</Form.Label>
    <Form.Control type="text" placeholder="Longitude" onChange={event => setLon(event.target.value)} />
  </Form.Group>
  
  <Button variant="primary" type="button" onClick={onSubmit}>
    Submit
  </Button>
</Form>
        </Container>
    )
}


export default LocationInput
