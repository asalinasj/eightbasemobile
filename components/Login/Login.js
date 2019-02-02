import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import IntroAnimation from '../../components/introAnimation/IntroAnimation';

class Login extends React.Component {
    pressGuest = () => {
        this.props.navigation.navigate('Home');
    }

    render(){
        return(
            <Container style={styles.container}>
                {/* <Header /> */}
                <Content>
                    <View style={styles.animation}>
                        <Text style={{fontSize: 40}}>Patient On The Go</Text>
                        <IntroAnimation />
                    </View>
                    <View style={styles.subcontainer}>
                        <Form>
                            <Item>
                                <Input placeholder="Username" />
                            </Item>
                            <Item>
                                <Input placeholder="Password" />
                            </Item>
                        </Form>
                        <Button block onPress={this.pressGuest}>
                            <Text>Login as Guest</Text>
                        </Button>
                    </View>
                    {/* <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button block style={styles.subcontainer}>
                        <Text>Login as Guest</Text>
                    </Button> */}
                </Content>
            </Container>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      backgroundColor: '#FFFAFA'
    },
    animation: {
        flex: 1,
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    }
  });
  