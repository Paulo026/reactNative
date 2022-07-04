import React from "react";
import { FlatList } from "react-native";
import Gradient from "../../components/Gradient";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import {
	Container,
	Title,
	PurchaseWrapper,
	ButtonWrapper,
	TextInfo,
	SpacingHeight,
	Table,
	TitleWrapper,
	SubTitleWrapper,
	QuantityItem,
	TextQuantity,
	TextSub,
} from "./styles";
import {
	ButtonPrimary,
	TextButton,
} from "../../components/CustomButton/styles";
import spacings from "../../theme/spacings";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../Theme/colors";

const Lista = [
	{
		id: "1",
		nome: "Produto 1",
		quantidade: "2",
		preco: "R$25,00",
		total: "R$50,00",
	},

	{
		id: "2",
		nome: "Produto 4",
		quantidade: "1",
		preco: "R$100,00",
		total: "R$100,00",
	},

	{
		id: "3",
		nome: "Produto 5",
		quantidade: "1",
		preco: "R$40,00",
		total: "R$40,00",
	},
];

const ListCard = ({ nome, quantidade, preco, total }) => (
	<Table>
		<TextInfo>{nome}</TextInfo>
		<QuantityItem>
			<AntDesign
				name="minuscircleo"
				size={10}
				color={`${colors.secondary}`}
				style={{ marginTop: 5, marginStart: 28 }}
			/>
			<TextQuantity>{quantidade}</TextQuantity>
			<AntDesign
				name="pluscircleo"
				size={10}
				color={`${colors.secondary}`}
				style={{ marginTop: 5 }}
			/>
		</QuantityItem>
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
				<TitleWrapper>
					<TextInfo>Produto</TextInfo>
					<TextInfo>Quantidade</TextInfo>
					<TextInfo>Preço Unitário</TextInfo>
					<TextInfo>Total</TextInfo>
				</TitleWrapper>
				<FlatList
					data={Lista}
					renderItem={list}
					keyExtractor={(item) => item.id}
					numColumns={1}
				/>

				<SpacingHeight height={spacings.extraLarge} />
				<SubTitleWrapper>
					<TextInfo>Total da compra</TextInfo>
					<TextInfo>R$190,00</TextInfo>
				</SubTitleWrapper>
				<SubTitleWrapper>
					<TextInfo>Data da compra</TextInfo>
					<TextInfo>17/06/2022</TextInfo>
				</SubTitleWrapper>
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
