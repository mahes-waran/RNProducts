import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/styles/colors/colors'

export const PDStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 5,
        height: '100%'
    },
    titleContainer: {
        flexDirection: 'row',
        margin: 10
    },
    titleTxt: {
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.lightBlack
    },
    imgContainer: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center'
    },
    descContainer: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center'
    },
    descTxt: {
        fontFamily: 'Cochin',
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.darkGray,
        flexWrap: 'wrap'
    },
    catHeadContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    catContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    catTxt: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black,
        flexWrap: 'wrap'
    },
    priceContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    priceTxt: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black,
        flexWrap: 'wrap'
    },
    rateContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center'
    },
    countTxt: {
        fontFamily: 'Cochin',
        fontSize: 15,
        fontWeight: 'normal',
        color: Colors.black,
        flexWrap: 'wrap',
        marginHorizontal: 3
    },
})