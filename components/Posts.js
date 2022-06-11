import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import Post from './Post'

class Posts extends Component {
    render() {
        return (
            <ScrollView
                removeClippedSubviews={false}
                scrollEnabled={false}
                contentContainerStyle={[styles.container, this.props.containerStyle]}
            >
                {
                    this.props?.posts?.map(item => (
                        <Post
                            key={`post-${item.id}`}
                            containerStyle={styles.postContainer}
                            {...item}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}

export default Posts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    postContainer: {
        justifyContent: 'space-between',
        marginBottom: 5,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 10,
        padding: 0,
        borderWidth: 0,
    },
})