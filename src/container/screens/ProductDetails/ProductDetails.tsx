import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useDimension } from '../../../hooks/useDimension'
import { Rating } from 'react-native-ratings'
import { PDStyle as styles } from './style'

const ProductDetails = (props: any) => {
    const [productData, setProduct] = useState(Object)
    const width = Math.round(useDimension().width) - 20
    const height = Math.round(useDimension().height) / 2

    const getProduct = async (id: any) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const products = await response.json()
            setProduct(products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const { id } = props.route.params;
        getProduct(id)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>{productData?.title}</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image width={width} height={height} source={{ uri: productData?.image }} />
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descTxt}>{productData?.description}</Text>
                </View>
                <View style={styles.catHeadContainer}>
                    <View style={styles.catContainer}>
                        <Text style={styles.catTxt}>{productData?.category}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceTxt}>${productData?.price}</Text>
                    </View>
                </View>
                <View style={styles.rateContainer}>
                    <Rating
                        type='custom'
                        ratingCount={5}
                        fractions={1}
                        startingValue={productData?.rating?.rate}
                        imageSize={25}
                        showRating={false}
                        readonly={true}
                        ratingColor="#ff0000"
                    />
                    <Text style={styles.countTxt}>({productData?.rating?.count})</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails