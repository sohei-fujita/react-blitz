export const ColorfulMessage = (props) => {
    const { color, children } = props;
    const contentStyleA = {
        color,
        fontsize : "18px"
    }
    return (
        <p style={contentStyleA}>{children}</p>
    )
} 