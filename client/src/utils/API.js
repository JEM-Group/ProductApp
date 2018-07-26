import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  getDash: function() {
    return axios.get("/api/dashboard");
  },
  // getDash: function(id) {
  //   return axios.get("/api/dashboard/" + id);
  // },

  
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  

  // Deletes the book with the given id
  deleteDash: function(id) {
    return axios.delete("/api/dashboard/" + id);
  },
  // Saves a Dash to the database
  saveDash: function(bookData) {
    return axios.post("/api/dashboard", bookData);
  }
};
