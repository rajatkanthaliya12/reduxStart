import React, { Component } from 'react';
import  BookDetail  from "../container/book_detail";
import BookList from '../container/book_list'
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
  <BookDetail/>
      </div>
    );
  }
}




