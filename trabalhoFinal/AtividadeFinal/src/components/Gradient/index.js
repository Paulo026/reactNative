import { LinearGradient } from "expo-linear-gradient";
import colors from "../../Theme/colors";

const Gradient = (props) => {
	if (props.position === "top") {
		return (
			<LinearGradient
				colors={[`${colors.gradientPrimary}`, `${colors.gradientSecondary}`]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					height: "50%",
					zIndex: -1,
				}}
			/>
		);
	} else {
		return (
			<LinearGradient
				colors={[`${colors.gradientSecondary}`, `${colors.gradientPrimary}`]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					bottom: 0,
					height: "50%",
					zIndex: -1,
				}}
			/>
		);
	}
};

export default Gradient;
