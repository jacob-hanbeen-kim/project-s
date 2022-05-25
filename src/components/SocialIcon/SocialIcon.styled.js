import styled from 'styled-components';

const color = {
    facebook: '#4267B2',
    twitter: '#1DA1F2',
    linkedin: '#0E76A8',
    instagram: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'
}


export const Container = styled.div`
    width: ${({ size }) => size ? size : '18px'};
    height: ${({ size }) => size ? size : '18px'};
`

export const Wrapper = styled.div`
    width: inherit;
    height: inherit;
    background: ${({ media }) => color[media]};
    border-radius: ${({ theme }) => theme.border.radius};

    cursor: pointer;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: inherit;
    height: inherit;

    font-size: ${({ fontSize }) => fontSize ? fontSize : '12px'};

    color: #fff;
`