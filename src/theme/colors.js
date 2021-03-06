const COLORS = {
    // base colors
    primary: "#6a1b9a", // Blue
    primaryLight: "#9c4dcc",
    primaryDark: "#38006b",
    secondary: "#cacfd9",   // Gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    whiteOpacity: 'rgba(255, 255, 255, 0.9)',
    lightGray: "#eff2f5",
    gray: "#8b9097",
    orange: '#f57f17',
    red:'#e53935',
};

const ShadowStyle = {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    elevation: 5,
}

export {COLORS, ShadowStyle}