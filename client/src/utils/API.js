// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   getDash: function() {
//     return axios.get("/api/dashboard");
//   },
//   // Gets the book with the given id
//   // getBook: function(id) {
//   //   return axios.get("/api/books/" + id);
//   // },
  
//   getDash: function(id) {
//     return axios.get("/api/dashboard/" + id);
//   },

<<<<<<< HEAD
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
||||||| merged common ancestors
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
=======
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
    console.log(optsObj)

    const max = optsObj.maxResults;
    const API_key = optsObj.key;
    return axios.get('https://www.googleapis.com/youtube/v3/search?', {
      params: {
        part: 'snippet',
        q: 'new car reviews',
        type: "video",
        key: API_key,
        order: 'date',
        maxResults: max
      }
    })
  }
};
>>>>>>> origin/youtube-api
