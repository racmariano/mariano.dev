const colors = {
  body: "#dae1e7",
  mainText: "#142850",
}

const divisors = {
  color: "#142850",
  borderColor: "#27496d",
  border: "10px solid #00909e",
  text: "#dae1e7",
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
