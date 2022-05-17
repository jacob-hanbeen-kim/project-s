import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

export const Container = styled.div`
    padding: 0px 20px 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: red; */
    height: 270px;
    width: 260px;
    
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    background-color: ${({ theme }) => theme.colors.background};
`

export const ProfilePhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 55%;
    background-color: #8B8B9F;

    border-top-left-radius: ${({ theme }) => theme.border.radius};
    border-top-right-radius: ${({ theme }) => theme.border.radius};

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    position: relative;
`

export const LikeBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;

    cursor: pointer;
`

export const HeartIcon = styled(AiFillHeart)`
    color: ${({ liked }) => liked ? '#FF0000' : '#FFFFFF'};
    font-size: 21px;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 45%;
    /* background-color: green; */

    justify-content: center;
    align-items: center;

    border-bottom-left-radius: ${({ theme }) => theme.border.radius};
    border-bottom-right-radius: ${({ theme }) => theme.border.radius};

    padding-left: 20px;
    padding-right: 10px;
`

export const ProfileImg = styled.div`

`

export const ProfileIcon = styled(FaUserAlt)`
    font-size: 120px;
    color: #ffffff;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: inherit;
`

export const Name = styled.div`
    font-size: 16px;
    cursor: pointer;
`

export const Category = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const CategoryWrapper = styled.div`
    
`

export const Tag = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: inherit;

    font-size: 10px;
    color: #A4A4A4;
    margin: 0px;
    
`

export const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: inherit;
`

export const Details = styled.div`
    margin-top: 8px;
    & img {
        height: 12px;
        width: 12px;
    }
`

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DetailText = styled.p`
    font-size: 10px;
    margin: 0px;
    padding: 0px;
`

export const DetailIcon = styled.div`
    margin-right: 5px;
`

export const LocationIcon = styled(BiMap)`
    font-size: 12px;
    color: #FF0000;
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

export const Follower = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    font-size: 6px;
`