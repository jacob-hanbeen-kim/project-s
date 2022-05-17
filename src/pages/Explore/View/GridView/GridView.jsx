import {
    Container,
    Wrapper
} from './GridView.styled'
import Grid from './Grid/Grid';
import React from 'react';

const GridView = ({ users }) => {
    return (
        <Container>
            <Wrapper>
                {users.map((userInfo, index) =>
                    <Grid key={index} userInfo={userInfo} />
                )}
            </Wrapper>
        </Container>
    )
}

export default GridView