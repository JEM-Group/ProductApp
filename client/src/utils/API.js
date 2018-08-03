import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  getDash: function() {
    return axios.get("/api/dashboard");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  
  getDash: function(id) {
    return axios.get("/api/dashboard/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Load new car reviews
  loadHotReviews: function(optsObj) {
    const date = optsObj.publishedAfter;
    const max = optsObj.maxResults;
    const API_key = optsObj.key;

    return axios.get('https://www.googleapis.com/youtube/v3/search?', {
      params: {
        part: 'snippet',
        q: 'car review | new car review',
        type: 'video',
        publishedAfter: date,
        key: API_key,
        order: 'viewCount',
        topicId: '/m/07yv9',
        relevanceLanguage: 'EN',
        videoEmbeddable: 'true',
        maxResults: max
      }
    })
  },
  // Load new car reviews
  loadReviews: function(query) {

    return axios.get(query)
  }
};
