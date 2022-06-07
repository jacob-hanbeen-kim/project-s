import {
    Container,
    HeaderWrapper,
    EditContainer,
    ProfileTextWrapper,
    ProfileEditForm,
    ProfileEditWrapper,
    TextEditorWrapper,
    SubmitButton
} from './Profile.styled'
import { TextEditor } from '../../../components';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import ProfileService from '../../../services/profile-services';

const EditState = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    FAIL: 'fail',
    EDIT: 'edit'
}

const Profile = ({ }) => {

    const { currentUser } = useAuth();
    const [value, setValue] = useState('');
    const [isError, setError] = useState(null);
    const [state, setState] = useState(EditState.IDLE);

    const handleProfileUpdate = (e) => {
        try {
            e.preventDefault();
            e.persist();
            setState(EditState.LOADING);

            if (value.length === 0) {
                setState(EditState.FAIL);
                setError('Required, Add description');
                return;
            }
            ProfileService.createProfile(currentUser.id, {
                description: value
            }).then((res) => {
                setState(EditState.IDLE);
            })
            // axios.post(`http://localhost:8080/addArticle`, {
            //     title: userInfo.title,
            //     description: userInfo.description,
            //     information: userInfo.information,
            // })
            //     .then(res => {
            //         if (res.data.success === true) {
            //             history.push('/');
            //         }
            //     })
        } catch (error) {
            setState(EditState.FAIL);
            throw error;
        }
    }

    const getProfileText = (e) => {
        try {
            e.preventDefault()
            setState(EditState.LOADING)
            ProfileService.getProfileById(currentUser.id).then((res) => {
                setValue(res.description);
                setState(EditState.SUCCESS)
            })
        } catch (e) {
            setState(EditContainer.FAIL)
        }
    }

    const renderComponent = () => {
        switch (state) {
            case EditState.SUCCESS: return (
                <ProfileEditWrapper>
                    <ProfileEditForm onSubmit={handleProfileUpdate}>
                        <TextEditorWrapper>
                            <TextEditor value={value} onChange={setValue} type='rich' />
                        </TextEditorWrapper>
                        {isError !== null && <div className="errors"> {isError} </div>}
                        <SubmitButton type="submit" value="Submit" />
                    </ProfileEditForm>
                </ProfileEditWrapper>
            )
            case EditState.FAIL: return (
                <div>
                    Fail
                    <button>try again</button>
                </div>
            )
            case EditState.LOADING: return (
                <div>Loading...</div>
            )
            case EditState.IDLE:
            default: return (
                <div>
                    <button onClick={getProfileText}>Edit Profile</button>
                </div>
            )
        }
    }

    return (
        <Container>
            <HeaderWrapper>
                <h3> Introduce Yourself </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec nam aliquam sem. Facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
            </HeaderWrapper>
            <EditContainer>
                <ProfileTextWrapper>
                    <h3>Edit Profile</h3>
                    <p>Customize your profile with images, videos, and more.</p>
                </ProfileTextWrapper>
                {renderComponent()}
            </EditContainer>
        </Container>
    )
}

export default Profile