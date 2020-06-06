import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import List from './components/List';
import Detail from './components/Detail';


class App extends React.Component {
  state = {
    cocktails: [],
    // detail: {},
  }

  // 検索ボタンが押された場合
  onClickSearch = async () => {
    const response = await axios.get('/api/search');
    this.setState({
      cocktails: response.data.cocktails,
    });
  };

  render() {
    return (
      <Container>
        <Search onClickSearch={this.onClickSearch} />
        <Row>
          <Col xs={5}>
            <List cocktails={this.state.cocktails} />
          </Col>
          <Col xs={7}>
            <Detail />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
