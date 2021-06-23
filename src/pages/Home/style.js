import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`

align-items: center;
justify-content: center;
margin-top: ${ Platform.OS === 'ios' ? 35+'px' : 15+'px'};

`;

export const Logo = styled.Image`

 width: 150px;
 height: 150px;

`;

export const ContainerContent = styled.View`

margin-top: ${Platform.OS === 'ios' ? 10+'%' : 0+'%'};

`;

export const Title = styled.Text`

font-size: 45px;
color: #fff;
font-weight: bold;
text-align: center;


`;

export const SubTitle = styled.Text`

font-size: 20px;
color: #fff;
text-align: center;
padding-bottom: 10%;

`;

export const ContainerInput = styled.View`

align-items: center;
flex-direction: row;
width: 100%;
border-radius: 17px;
margin: 15px 0;
padding-left: 15px;
padding-right: 15px;

`;

export const BoxIcon = styled.View`

align-items: center;
justify-content: center;

margin-right: 1%;

width: 14%;
height: 50px;
background-color: rgba(0, 0, 0, 0.15);
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;

`;

export const Input = styled.TextInput`

align-items: center;
justify-content: center;

width: 85%;
height: 50px;
padding: 10px;
background-color: rgba(0, 0, 0, 0.15);
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
font-size: 16px;
color: #fff;

`;

export const ButtonLink = styled.TouchableOpacity`

align-items: center;
justify-content: center;

height: 45px;
background-color: rgba(255, 255, 255, 0.25);
margin: 0px 80px;
border-radius: 8px;

`;

export const ButtonLinkText = styled.Text`

font-size: 25px;
color: #fff;
font-weight: bold;
text-align: center;

`;