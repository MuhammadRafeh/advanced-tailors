import React, { useRef } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Card from '../components/Card';

const Index = props => {
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
                <View style={{ position: 'absolute', bottom: 185, width: '100%', left: 20 }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
                        AR's Attire
                        <Text style={{ color: 'orange', fontSize: 85 }}>
                            .
                        </Text>
                    </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 140, width: '100%', left: 20 }}>
                    <Text style={{ color: 'white', fontSize: 30, letterSpacing: 1 }}>
                        Get Your Clothes
                        <Text style={{ fontSize: 40 }}>
                            .
                        </Text>
                    </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 100, width: '100%', left: 20 }}>
                    <Text style={{ color: 'white', fontSize: 30, letterSpacing: 1 }}>
                        Done By Tailors
                        <Text style={{ fontSize: 40 }}>
                            .
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={{ flex: 0.1, backgroundColor: 'white', top: -90, borderTopLeftRadius: 7, borderTopRightRadius: 7 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', top: -10 }}>
                    <Card style={{ width: '45%' }} text={'Find a service'} image={require('../assets/service.png')} />
                    <Card style={{ width: '45%' }} text={'Become a tailor'} image={require('../assets/tailor.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 17 }}>
                    <TouchableOpacity onPress={props.setIsShowAuth.bind(null, true)}>
                        <Text style={{ color: 'orange', fontSize: 16 }}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'orange', fontSize: 16 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '100%',
        height: '100%',
        opacity: 0.9
    },
});