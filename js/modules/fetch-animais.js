import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais() {
  const numerosGrid = document.querySelector('.numeros-grid')

  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  function preencherAnimais(animal){
    const divAnimal = createAnimal(animal)
    numerosGrid.appendChild(divAnimal)
  }

  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
    animaNumeros.init()
  }

  async function criarAnimais() {
    try {
      /* const animaisResponse = await fetch("./../../animaisapi.json")
      const animaisJSON = await animaisResponse.json() */
      const animaisJSON = [
        {
          specie: "Lobos",
          total: 4874
        },
        {
          specie: "Raposas",
          total: 5374
        },
        {
          specie: "Esquilos",
          total: 12340
        },
        {
          specie: "Ursos",
          total: 230
        }
      ]
      animaisJSON.forEach(animal => preencherAnimais(animal))
      animaAnimaisNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }
  return criarAnimais()
}