import styled from 'styled-components/native'
import { Platform } from 'react-native';

export const Container = styled.View`
flex:1;
`;

export const Title = styled.Text`
margin-top: ${Platform.OS === 'ios' ? 25+'%' : 15+'%'};
font-size: 33px;
font-weight: bold;
color: white;
align-self: center;
margin-bottom: 20px;
`;

export const ListLinks = styled.FlatList`

`;
 