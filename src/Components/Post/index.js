import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/postAction';

import { Wrapper, RedButton, GreenButton, BlueButton, Title, ButtonWrapper } from './styles'

export class Post extends React.Component {

    goToPostDetails = () => {
        this.props.history.push('/post_details', { id: this.props.id });
    };

    goToUpdatePostPage = () => {
        this.props.history.push('edit_post', { id: this.props.id });
    };

    removePost = () => {
        this.props.deletePost(this.props.id)
    };

    render() {
        return(
            <React.Fragment>
                <Wrapper>
                    <Title>
                        {
                            this.props.title
                        }
                    </Title>
                    <ButtonWrapper>
                        <RedButton
                            onClick={this.removePost}
                        >
                            remove post
                        </RedButton>
                        <GreenButton
                            onClick={this.goToPostDetails}
                        >
                            details post
                        </GreenButton>
                        <BlueButton
                            onClick={this.goToUpdatePostPage}
                        >
                            update post
                        </BlueButton>
                    </ButtonWrapper>
                </Wrapper>
            </React.Fragment>
        )
    }
}

export default connect(null, { deletePost })(withRouter(Post));