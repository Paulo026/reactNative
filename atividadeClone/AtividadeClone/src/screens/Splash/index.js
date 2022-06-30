import { Container, Logo } from "../Splash/styles";
import face from "../../../assets/logo.jpeg";
import { LinearGradient } from "expo-linear-gradient";

const Splash = () => {
	return (
		<Container>
			<LinearGradient
				colors={["#0FF", "black"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					height: "30%",
				}}
			/>
			<Logo source={face} />
			<LinearGradient
				colors={["black", "#0FF"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					height: "30%",
				}}
			/>
		</Container>
	);
};

export default Splash;
