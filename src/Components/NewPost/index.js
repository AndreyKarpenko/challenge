import React from 'react';
import { connect } from 'react-redux';

import { createPost, getPost, updatePost } from '../../actions/postAction';
import { Wrapper, Title, Input, TextArea, Label, Button, ErrorMessage } from './styles';

export class NewPost extends React.Component{

    state = {
        title: '',
        body: '',
        name: '',
        date: null,
        error: true,
        errorText: false,
        route: null,
    };

    componentDidMount() {
        if(!this.props.location.state && this.props.location.pathname !== '/new_post')
            this.props.history.push('/');
        else if(this.props.location.state)
            this.props.getPost(this.props.location.state.id);
        this.setState({
            route: this.props.location.pathname
        });
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            title: nextProps.post.title,
            body: nextProps.post.body,
            name: nextProps.post.name,
        })
    }

    setTitle = (e) => {
        this.setState({
            title: e.target.value,
        })
    };

    setBody = (e) => {
        this.setState({
            body: e.target.value,
        })
    };

    setName = (e) => {
        this.setState({
            name: e.target.value,
        })
    };

    createPost = () => {
        if((this.state.title && this.state.body && this.state.name)){
            this.setState({
                date: new Date(),
                errorText: false
            }, () => {
                this.props.createPost(this.state, this.props.history);
            });
        } else {
            this.setState({
                errorText: true
            });
            setTimeout(() => {
                this.setState({
                    errorText: false
                });
            }, 2000)
        }
    };

    updatePost = () => {
        if((this.state.title && this.state.body && this.state.name)){
            this.setState({
                date: new Date(),
                errorText: false
            }, () => {
                this.props.updatePost(this.props.location.state.id, this.state, this.props.history);
            });
        } else {
            this.setState({
                errorText: true
            });
            setTimeout(() => {
                this.setState({
                    errorText: false
                });
            }, 2000)
        }
    };

    render() {
        return(
            <React.Fragment>
                <Wrapper>
                    <Title>
                        New post
                    </Title>
                    <Label>Name</Label>
                    <Input value={this.state.name} placeholder={'input your name'} onChange={this.setName} type={'text'} />
                    <Label>Title</Label>
                    <Input value={this.state.title} placeholder={'input title of post'} onChange={this.setTitle} type={'text'}/>
                    <Label>Your minds</Label>
                    <TextArea
                        value={this.state.body}
                        placeholder={'input you minds here'}
                        onChange={this.setBody}
                    >

                    </TextArea>
                    {
                        this.state.route === '/new_post' ?
                        <Button
                            onClick={this.createPost}
                        >
                            add new post
                        </Button>
                            :
                        <Button
                            onClick={this.updatePost}
                        >
                            update post
                        </Button>
                    }
                    {
                        this.state.errorText ?
                            <ErrorMessage>
                                All fields are required!
                            </ErrorMessage> : null
                    }
                </Wrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.post
});

export default connect(mapStateToProps, { createPost, getPost, updatePost })(NewPost);