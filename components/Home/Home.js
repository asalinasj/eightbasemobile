import React from 'react';
import { StyleSheet, View, SafeAreaView,
    KeyboardAvoidingView,
    ActivityIndicator,
    Alert, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class Home extends React.Component {
    render(){
        return(
            <Container>
                <Header />
                <Content>
                    <Text>home</Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="pulse" />
                            <Text>Visits</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

}

export default Home;