import styled from 'styled-components/native';

export const ModalContainer = styled.View`
flex:1;
`;

export const Container = styled.View`
flex:0.45;
background-color: #e8e8e8;
border-top-right-radius: 30px;
border-top-left-radius: 30px;
padding: 0 15px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 15px 0;
`;

export const LinkArea = styled.View`
flex:1;
justify-content: center;
`;

export const Title = styled.Text`
font-size: 22px;
font-weight: bold;
color: black;
align-self: center;
`;

export const LongUrl = styled.Text`
font-size: 12px;
color: black;
margin-bottom: 30px;
align-self: center;
`;

export const ShortLinkArea = styled.TouchableOpacity`
height: 45px;
width: 100%;
background-color: black;
border-radius: 7px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 10px;
margin-bottom: 50px;
`;

export const ShortLinkUrl = styled.Text`
width: 90%;
color: white;
font-size: 16px;

`;