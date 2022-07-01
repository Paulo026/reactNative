import React from "react";
import { View, FlatList, Text, Image } from "react-native";


const Card = [
    {
        id: "1",
        imagem:  require("../../../assets/1.jpg"),
        nome: "Produto 1",
        preco: "Preço R$ 25,00",
        estoque: "10 unidades em estoque",
        quantidade: "2",
    },

    {
        id: "2",
        imagem: require("../../../assets/2.png"),
        nome: "Produto 2",
        preco: "Preço R$ 50,00",
        estoque: "1 unidade  em estoque",
        quantidade: "0",
    },

    {
        id: "3",
        imagem: require("../../../assets/3.jpg"),
        nome: "Produto 3",
        preco: "Preço R$ 30,00",
        estoque: "5 Unidades em estoque",
        quantidade: "0",
    },

    {
        id: "4",
        imagem: require("../../../assets/4.jpg"),
        nome: "Produto 4",
        preco: "Preço R$ 100,00",
        estoque: "15 Unidades em estoque",
        quantidade: "1",
    },

    {
        id: "5",
        imagem: require("../../../assets/5.jpg"),
        nome: "Produto 5",
        preco: "Preço R$ 40,00",
        estoque: "20 Unidades em estoque",
        quantidade: "1",
    },

    {
        id: "6",
        imagem: require("../../../assets/6.jpg"),
        nome: "Produto 6",
        preco: "Preço R$ 70,00",
        estoque: "8 Unidades em estoque",
        quantidade: "0",
    }
];

const ListCard = ({ imagem, nome, preco, estoque, quantidade }) => (
    <View >
        <Image source={imagem} style={{width:100, height:100}} />
           
        <Text>
            {nome}
        </Text>

        <Text>
            {preco}
        </Text>

        <Text>
            {estoque}
        </Text>

        <Text>
            {quantidade}
        </Text>
    </View>
    
);

const Product = () => {
    const list = ({ item }) => (
        <ListCard
         imagem={item.imagem}
            nome={item.nome}
            preco={item.preco}
            estoque={item.estoque}
            quantidade={item.quantidade}
            />

    );
    return (
        <View>
            <FlatList data={Card} renderItem={list} keyExtractor={(item) => item.id} numColumns={2} />
        </View>
    )
};

export default Product;