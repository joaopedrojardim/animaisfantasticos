import outsideClick from './outsideclick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    
    if(events === undefined) this.events =  ['touchstart', 'click']
    else this.events = events
    this.activeClass = 'active'
  }

  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  addDropdDownMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init(){
    if(this.dropdownMenus.length){
      this.addDropdDownMenusEvent()
    }
    return this
  }
  
}



