import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,
    Button,
    KeyboardAvoidingView,
    ActivityIndicator,
    Alert, } from 'react-native';
import { Container, Header, Content } from 'native-base';

class Home extends React.Component {
    render(){
        return(
            <Container>
                <Header />
                <Content>
                    <Text>home</Text>
                </Content>
            </Container>
        );
    }

}

export default Home;