import React from "react";
import { FlatList } from "react-native";
import Gradient from "../../components/Gradient";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import { Container, Title, PurchaseWrapper, ButtonWrapper, TextInfo, SpacingHeight, Table } from "./styles";
import {
	ButtonPrimary,
	TextButton,
} from "../../components/CustomButton/styles";
import spacings from "../../theme/spacings";


const Lista = [
	{
        id: "1",
        nome: "Produto ",
        quantidade:"Quantidade",
        preco: "Preço Unitário",
        total: "Total",
    },
    {
        id: "2",
        nome: "Produto 1",
        quantidade: "2",
        preco: "R$25,00",
        total: "R$50,00",
    },

    {
        id: "3",
        nome: "Produto 4",
        quantidade: "1",
        preco: "R$100,00",
        total: "R$100,00",
    },

    {
        id: "4",
        nome: "Produto 5",
        quantidade: "1",
        preco: "R$40,00",
        total: "R$40,00",
	}
];



const ListCard = ({ nome, quantidade, preco, total }) => (
	<Table>
		<TextInfo>{nome}</TextInfo>
		<TextInfo>{quantidade}</TextInfo>
		<TextInfo>{preco}</TextInfo>
		<TextInfo>{total}</TextInfo>
	</Table>
);



const Purchase = () => {
	const list = ({ item }) => (
		<ListCard
			nome={item.nome}
			quantidade={item.quantidade}
			preco={item.preco}
			total={item.total}
		/>
	);



	return (
		<Container>
			<Gradient position="top" />
			<Title>Carrinho</Title>
			<ExitButton />
			<SmallLogo />
			<PurchaseWrapper>
				<FlatList
					data={Lista}
					renderItem={list}
					keyExtractor={(item) => item.id}
					numColumns={4}
				/>
				

				<SpacingHeight height={spacings.extraLarge} />
				<TextInfo>Total da compra</TextInfo>
				<SpacingHeight height={spacings.extraLarge} />
				<TextInfo>Data da compra</TextInfo>
			</PurchaseWrapper>
			<ButtonWrapper>
				<ButtonPrimary>
					<TextButton>
						ADICIONAR
						{"\n"}MAIS ITENS
					</TextButton>
				</ButtonPrimary>
				<ButtonPrimary>
					<TextButton>
						FECHAR
						{"\n"}
						PEDIDO
					</TextButton>
				</ButtonPrimary>
			</ButtonWrapper>

			<Gradient position="button" />

			<NavBar />
		</Container>
	);
};

export default Purchase;
