import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/search", { params: { q: query } });
  },
  saveBook: function(googleId) {
    return axios.post("/api/book", { params: { googleId } });
  },
  loadBooks: function() {
    return axios.get("/api/book");
  },
  deleteBook: function(dbId) {
    return axios.delete("/api/book/" + dbId);
  }
};
