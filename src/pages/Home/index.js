import React, { useState } from 'react';
import { ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './style';

import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import { Feather } from '@expo/vector-icons';
import ModalLink from '../../components/ModalLink'
import api from '../../services/api';

export default function Home(){

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink(){
        setLoading(true);

        try {
            const response = await api.post('/shorten',
            {
                long_url: input
            })

            setData(response.data);
            setModalVisible(true);

            Keyboard.dismiss();
            setLoading(false);
            setInput('');

        } catch (error) {
            alert('Ops parece que algo deu errado');
            Keyboard.dismiss();
            setInput('');
            setLoading(false);
        }    
        

    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

        <LinearGradient
        colors={['#b1e9fe', '#4991ff']}
        style={{ flex:1, justifyContent: 'center' }}
        >

        <StatusBarPage
            barStyle='dark-content'
            backgroundColor='#b1e9fe'
        />

       
            <Menu/>

            <KeyboardAvoidingView
                behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
                enabled
            >

            
       
            <ContainerLogo>
                <Logo source={require('../../assets/Logo.png')} resizeMode='contain'/>
            </ContainerLogo>

            <ContainerContent>
                <Title>CortaLink</Title>
                <SubTitle>Cole seu link para encurtar</SubTitle>

                <ContainerInput>
                    <BoxIcon>
                        <Feather name='link' size={22} color='#FFF'/>
                    </BoxIcon>

                    <Input
                        placeholder='Cole seu link aqui...'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='url'
                        value={input}
                        onChangeText={ (text) => setInput(text) }
                    />

                </ContainerInput>
                
                <ButtonLink onPress={ handleShortLink }>
                    {
                        loading ? (
                            <ActivityIndicator color='#f5f5f5' size={24}/>
                        ) : (
                            <ButtonLinkText>Gerar Link</ButtonLinkText>
                        )
                    }                    
                </ButtonLink>

            </ContainerContent>
            </KeyboardAvoidingView>

            <Modal visible={modalVisible} transparent animationType="slide">

                <ModalLink onClose={ () => setModalVisible(false) } data={data} />
                
            </Modal>

            
        </LinearGradient>
        </TouchableWithoutFeedback>
    )
}