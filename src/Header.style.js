import stylex from "@stylexjs/stylex";

export const headerStyle = stylex.create({
	link: {
		color: "white",
		textDecoration: "none",
		padding: "0.5rem 1rem",
		borderRadius: "5px",
		":hover": {
			textDecoration: "underline",
		},
	},
	active: {
		backgroundColor: "#c4b5fd",
	},
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 1rem",
	},
});
