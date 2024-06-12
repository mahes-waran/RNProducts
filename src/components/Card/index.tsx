import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Colors } from '../../assets/styles/colors/colors'
import { Rating } from 'react-native-ratings'

const Card = (items: any, selectedId: any, ratingCount: number = 5, imageSize: number = 20, readonly: boolean = true) => {
    return (
        <TouchableOpacity
            activeOpacity={5}
            onPress={() => { selectedId(items?.item?.id) }}
            style={style.cardContainer}
        >
            <View style={style.titleContainer}>
                <Text numberOfLines={2} style={style.titleTxt}>{items?.item?.title}</Text>
            </View>
            <View style={style.ctxContainer}>
                <View style={style.imgContainer}>
                    <Image width={150} height={150} source={{ uri: items?.item?.image }} />
                </View>
                <View style={style.txtContainer}>
                    <Text numberOfLines={5} style={style.descTxt}>{items?.item?.description}</Text>
                    <Text style={style.catTxt}>{items?.item?.category}</Text>
                    <Text style={style.priceTxt}>${items?.item?.price}</Text>
                </View>
            </View>
            <View style={style.rateContainer}>
                <Rating
                    type='custom'
                    ratingCount={ratingCount}
                    fractions={1}
                    startingValue={items?.item?.rating?.rate}
                    imageSize={imageSize}
                    showRating={false}
                    readonly={readonly}
                    ratingColor="#ff0000"
                />
            </View>
        </TouchableOpacity>
    )
}
Card.prototype = {
    item: Object
}
export default Card

const style = StyleSheet.create({
    cardContainer: {
        borderColor: 'white',
        backgroundColor: 'white',
        width: '100%',
        height: 250,
        borderRadius: 3,
        borderWidth: 2
    },
    titleContainer: {
        marginHorizontal: 5,
        height: 50
    },
    titleTxt: {
        fontFamily: 'Cochin',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.lightBlack,
        flexWrap: 'wrap'
    },
    ctxContainer: {
        flexDirection: 'row',
        height: 150
    },
    imgContainer: {
        flexDirection: 'column',
        width: 160,
        margin: 5,
    },
    txtContainer: {
        flexDirection: 'column',
        width: 200,
        margin: 5
    },
    descTxt: {
        fontFamily: 'Cochin',
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.darkGray,
        flexWrap: 'wrap'
    },
    catTxt: {
        fontFamily: 'Cochin',
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.black,
        flexWrap: 'wrap'
    },
    priceTxt: {
        fontFamily: 'Cochin',
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.black,
        flexWrap: 'wrap'
    },
    rateContainer: {
        margin: 1.5,
        height: 20,
        alignItems: 'flex-end'
    },
})