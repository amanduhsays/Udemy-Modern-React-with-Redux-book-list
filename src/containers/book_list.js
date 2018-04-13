import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class BookList extends Component {

    constructor(props) {
        super(props);
    }
    
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={ book.title } 
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">
                        { book.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

// THE GLUE
function mapStateToProps(state) {
    // state.books is from /reducers/index.js
    // books is the local props
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    // { method (this.props.selectBook): actionCreator } 
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
