import React, { Component } from "react";
import Thumbnail from "../components/Thumbnail";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount(){
    this.loadBooks()
  };

  loadBooks = () => {
    API.loadBooks()
    .then(res => {
      this.setState({ books: res.data });
    })
    .catch(err => console.log(err));
  };

  handleDelete = event => {
    event.preventDefault();
    const dbId = event.target.id;
    API.deleteBook(dbId)
      .then(res => {
        console.log(res);
        window.location.reload("/saved")
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
     
    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <div >
                <h1 className="m-3 text-center">No Books Saved</h1>
                </div>
              ) : (
                <div>
                  <h1 className="m-2 text-center">Books Saved to Databse:</h1>
                  {this.state.books.map(book => (
                    <div key={book._id}>
                      <li className="list-group-item m-1">
                        <Container>
                          <Row>
                            <Col size="xs-4 sm-2">
                              <Thumbnail
                                src={book.thumbnail}
                              />
                            </Col>
                            <Col size="xs-8 sm-9">
                              <h3>Title: {book.title}</h3>
                              {book.authors === undefined || book.authors === null ? (
                                <h3 >Auhtor Information not Found</h3>
                              ) : (
                                <h3>
                                  Author(s): {book.authors.join(" ")}
                                </h3>
                              )}
                              <p>Description: {book.description}</p>
                              <a
                                rel="noreferrer noopener"
                                target="_blank"
                                href={book.infoLink}
                              >
                                Go to book!
                              </a>
                              <br />
                              <a
                                onClick={this.handleDelete}
                                id={book._id}
                                href="/"
                              >
                                Delete
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
