import React from 'react';
import { connect } from 'react-redux';

import { getPost } from '../../actions/postAction';
import { createComment } from '../../actions/commentAction';
import { Wrapper, Title, Body, DetailsWrapper, Button, TextArea, Comment, EmptyText } from './styles';

export class Details extends React.Component{

    state = {
        post: null,
        comment: '',
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
        })
    };

    createComment = () => {
        if(this.state.comment){
            this.props.createComment(this.props.location.state.id, this.state.comment);
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
        const { post, comment } = this.state;
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
                                    post.comments.length ?
                                    post.comments.map((item, index) => (
                                        <Comment
                                            key={index}
                                        >
                                            {
                                                item.body
                                            }
                                        </Comment>
                                    )) :
                                        <EmptyText>
                                            You don't have any comments yet
                                        </EmptyText>
                                }
                            </Wrapper>
                        </React.Fragment> : null
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
});

export default connect(mapStateToProps, { getPost, createComment })(Details);