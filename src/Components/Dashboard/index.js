import React from 'react';
import { connect } from 'react-redux';

import Post from '../Post';
import { getAllPosts } from '../../actions/postAction';
import { Button, Wrapper } from './styles';

export class Dashboard extends React.Component{

    state = {
        posts: []
    };

    componentDidMount() {
        this.props.getAllPosts();
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            posts: nextProps.posts
        })
    }

    goToNewPostPage = () => {
        this.props.history.push('new_post')
    };

    render() {

        const { posts } = this.state;

        return(
            <Wrapper>
                {
                    posts.map(item => (
                        <Post
                            key={item.id}
                            title={item.title}
                            body={item.body}
                            id={item.id}
                        />
                    ))
                }
                <Button
                    onClick={this.goToNewPostPage}
                >
                    add new post
                </Button>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.post.posts
});

export default connect(mapStateToProps, { getAllPosts })(Dashboard);