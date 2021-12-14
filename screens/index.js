import React, { useRef } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const index = props => {
    const player = useRef(null);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.9, top: -20 }}>
                <Video source={require('../assets/tailor.mp4')}   // Can be a URL or a local file.
                    ref={(ref) => {
                        player.current = ref;
                    }}
                    paused={false}                                 // Store reference
                    repeat={true}
                    onBuffer={() => { }}                // Callback when 
                    // onEnd={() => { player.current.refs.node.seek(0) }}
                    resizeMode={'contain'}
                    style={styles.backgroundVideo} />
            </View>
            <View style={{ flex: 0.1, backgroundColor: 'white', top: -90, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
               <Text>
                   asd
               </Text>
            </View>
        </View>
    );
}

export default index;

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '100%',
        height: '100%'
    },
});