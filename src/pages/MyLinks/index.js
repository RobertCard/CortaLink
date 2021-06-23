import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import { Container, Title, ListLinks } from './style';
import ListItem from '../../components/ListItem';

export default function MyLinks(){
    return(        

        <LinearGradient
        colors={['#444f66', '#102742']}
        style={{ flex:1, justifyContent: 'center' }}
        >
        <Container>

        <StatusBarPage
            barStyle='light-content'
            backgroundColor='#444f66'
        />

        <Menu/>

        <Title> Histórico de Links</Title>

        <ListLinks
            data={[ 1, 3, 4, 5, 9, 11, 12, 8, 123, 569, 444, 36, 32, 48  ]}
            keyExtractor={ (item) => String(item.id) }
            renderItem={ ({ item }) => <ListItem/> }
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
        />
        
        </Container>
        </LinearGradient>
    )
}