import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/styles/colors/colors'

export const ProductStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.deepLightBlue
  },
  itmContainer: {
    flexDirection: 'row',
    margin: 10,
  },
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