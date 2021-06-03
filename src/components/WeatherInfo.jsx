import React from 'react'
import {Card, Container, Col, Row, Table} from 'react-bootstrap'

const formatDate = (rawDate) => {
    const DATE_OPTIONS = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};

    return new Intl.DateTimeFormat('en-EU', DATE_OPTIONS).format(new Date(rawDate));
}


const WeatherInfo = ({weatherData}) => {
    const { meta: {units = []} = {}, timeseries = []} = weatherData;

    return (
        <Container fluid="md">
  <Row className="mt-2">
    {
        timeseries.map(item => {
            const {time, data: {instant: {details}}} = item;

            return (
                <Col md={4} className="mt-2">
            <Card>
      <Card.Header as="h5">{formatDate(time)}</Card.Header>
      <Card.Body>
        <Table striped bordered>
            {
                Object.entries(details).map(([key, value]) =>  (
                        <tbody>
                            <tr>
                        <td><b>{key}:</b></td>
                        <td>{`${value + ' ' + units[key]}`}</td>
                    </tr>
                        </tbody>
                    ))
            }
        </Table>
      </Card.Body>
    </Card></Col>
            )
        })
    }
  </Row>
</Container>
    )
}


export default WeatherInfo
