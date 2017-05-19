
export const screens = {
    small: "@media (max-width:1024px)",
    large: "@media (min-width:1024px)"
}

export const colors = {
    primary: "red",
    secondary: "blue",
    tertiary: "yellow",
    quaternary: "green"
}

export const animations = {
    freaky: {
        "0%": {
            backgroundColor: "red",
            transform: "rotate(7deg)"
        },
        "25%": {
            backgroundColor: "yellow"
        },
        "50%": {
            backgroundColor: "blue",
            transform: " rotate(-7deg)"
        },
        "100%": {
            backgroundColor: "green"
        }
    }
}