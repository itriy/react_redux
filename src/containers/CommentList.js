import React, { Component, PropTypes } from 'react'
import CommentList from '../components/CommentList'
import { connect } from 'react-redux'

class CommentListContainer extends Component {
    static propTypes = {

    };

    render() {//console.log('!!!', this.props);
        return (
            <CommentList/>
        )
    }
}

export default connect(state => ({
    article: state.article
}))(CommentListContainer)