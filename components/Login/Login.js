import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import IntroAnimation from '../../components/introAnimation/IntroAnimation';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    pressGuest = () => {
        this.props.navigation.navigate('Home');
    }
    onChangeEmail = (emailEntry) => {
        this.setState({email: emailEntry });
    }
    onChangePassword = (pwEntry) => {
        this.setState({password: pwEntry});
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
                                <Input placeholder="Email" 
                                    onChangeText={this.onChangeEmail}
                                    value={this.state.email}
                                />
                            </Item>
                            <Item>
                                <Input placeholder="Password"
                                    onChangeText={this.onChangePassword}
                                    value={this.state.password}
                                    secureTextEntry 
                                />
                            </Item>
                        </Form>
                        <Button block >
                            <Text>Login</Text>
                        </Button>
                        <Button block onPress={this.pressGuest}>
                            <Text>Login as Guest</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}


export default Login ;

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
  