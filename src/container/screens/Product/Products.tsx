import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ProductStyle as style } from "./style";
import { Rating } from "react-native-ratings";



const Products = (props: any) => {
    const [productData, setProduct] = useState("")
    const getProduct = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            setProduct(products)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    const getProductList = (items: any) => {
        return (
            <View style={style.itmContainer}>
                <TouchableOpacity
                    activeOpacity={5}
                    onPress={() => {
                        props.navigation.navigate('ProductDetails', { id: items?.item?.id })
                    }}
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
                            ratingCount={5}
                            fractions={1}
                            startingValue={items?.item?.rating?.rate}
                            imageSize={20}
                            showRating={false}
                            readonly={true}
                            ratingColor="#ff0000"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={productData}
                renderItem={getProductList}
                keyExtractor={(item: any) => item.id}
                scrollEnabled
            />
        </SafeAreaView>
    )
}

export default Products;