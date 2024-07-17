function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logo_fundoescuro.png")
    img.setAttribute(
      "alt",
      "Logo da Diferencial Tech e Negócios, em um fundo escuro."
    )
  } else {
    img.setAttribute("src", "./assets/logo_fundoclaro.png")
    img.setAttribute(
      "alt",
      "Logo da Diferencial Tech e Negócios, em um fundo branco."
    )
  }
}
