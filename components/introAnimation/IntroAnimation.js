import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';


class IntroAnimation extends React.Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);
    }

    render(){
        return(
            <View style={styles.container}>
                <LottieView
                    ref={animation => {
                    this.animation = animation;
                    }}
                    source={require('../../animations/3080-heartrate.json')}
                    autoPlay
                />
            </View>
        );
    }
}

export default IntroAnimation;

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
    }
});