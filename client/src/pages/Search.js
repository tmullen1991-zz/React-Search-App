import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err));
  };

  handleSave = event => {
    event.preventDefault();
    const googleId = event.target.id;
    API.saveBook(googleId)
      .then(res => {
        console.log("book saved!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="my-5">
        <Container className="my-3">
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                null
              ) : (
                <div className="my-5">
                  {this.state.books.map(book => (
                    <div key={book.id}>
                      <li className="list-group-item m-1">
                        <Container>
                          <Row>
                            <Col size="xs-4 sm-2">
                              <Thumbnail
                                src={book.volumeInfo.imageLinks.thumbnail}
                              />
                            </Col>
                            <Col size="xs-8 sm-9">
                              <h3>Title: {book.volumeInfo.title}</h3>
                              {book.volumeInfo.authors === undefined || book.volumeInfo.authors === null ? (
                                <h3>Auhtor Information not Found</h3>
                              ) : (
                                <h3>
                                  Author(s): {book.volumeInfo.authors.join(" ")}
                                </h3>
                              )}
                              <p>Description: {book.volumeInfo.description}</p>
                              <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href={book.volumeInfo.infoLink}
                              >
                                Go to book!
                              </a>
                              <br />
                              <a
                                onClick={this.handleSave}
                                id={book.id}
                                href="/"
                              >
                                Save
                              </a>
                            </Col>
                          </Row>
                        </Container>
                      </li>
                    </div>
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
