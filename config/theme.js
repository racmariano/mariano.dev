const colors = {
  body: "#eaeaea",
  mainText: "#444444",
}

const divisors = {
  color: "#f30067",
  borderColor: "#00d1cd",
  border: "10px solid #00d1cd",
  text: "#eaeaea",
  headerHeight: "90px",
  footerHeight: "65px",
}

const images = {
  width: "36px",
}

const getTheme = isMobile => {
  const theme = {
    colors,
    images,
    divisors,
    isMobile,
  }
  return theme
}

export default getTheme
