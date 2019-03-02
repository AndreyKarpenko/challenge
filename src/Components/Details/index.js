import React from 'react';
import { connect } from 'react-redux';

import { getPost } from '../../actions/postAction';
import { createComment } from '../../actions/commentAction';
import { Wrapper, Title, Body, DetailsWrapper, Button, TextArea, Comment } from './styles';

export class Details extends React.Component{

    state = {
        post: null,
        comment: '',
        comments: []
    };

    componentDidMount() {
        if(this.props.location.state)
            this.props.getPost(this.props.location.state.id);
        else
            this.props.history.push('/');
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            post: nextProps.post,
            comments: nextProps.comments
        })
    };

    createComment = () => {
        if(this.state.comment){
            const data = {postId: this.props.location.state.id, body: this.state.comment};
            this.props.createComment(data);
            this.setState({
                comment: '',
            });
        }
    };

    setComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    };

    render() {
        const { post, comment, comments } = this.state;

        return(
            <React.Fragment>
                {
                    post ?
                        <React.Fragment>
                            <Wrapper>
                                <Title>
                                    {
                                        post.title
                                    }
                                </Title>
                                <Body>
                                    {
                                        post.body
                                    }
                                </Body>
                                <DetailsWrapper>
                                    <div>
                                        {
                                            `Author: ${post.name}`
                                        }
                                    </div>
                                    <div>
                                        {
                                            `Posted at : ${new Date(post.date).toLocaleString()}`
                                        }
                                    </div>
                                </DetailsWrapper>
                                <TextArea
                                    value={comment}
                                    onChange={this.setComment}
                                >

                                </TextArea>
                                <Button
                                    onClick={this.createComment}
                                >
                                    add comment
                                </Button>
                                <div>
                                    Comments:
                                </div>
                                {
                                    comments.map(item => (
                                        <Comment
                                            key={item.id}
                                        >
                                            {
                                                item.body
                                            }
                                        </Comment>
                                    ))
                                }
                            </Wrapper>
                        </React.Fragment> :
                            null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.post.comments
});

export default connect(mapStateToProps, { getPost, createComment })(Details);