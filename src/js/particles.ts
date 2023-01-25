export {}
const particles = document.querySelectorAll('.particles')
const particlesSize: number = 1.5
const particlesNumber: number = 100
const velocity: number =  -.9
const dotsArray: any[] = []

const hexToRgbA = (hex: string): string => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c: string[] = hex.slice(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    const rgba: string = c.join('')
    return `rgba(${parseInt(rgba.substring(0, 2), 16)}, ${parseInt(rgba.substring(2, 4), 16)}, ${parseInt(rgba.substring(4), 16)}, 1)`
  } else {
    throw new Error('Bad Hex')
  }
}

const isElementHTMLElement = (dom: Element): HTMLElement => {
  if (!(dom instanceof HTMLElement)) {
    throw new Error('This element is not HTMLElement')
  }
  return dom
}

const getColor = (dom: HTMLElement): string => {
  const color = dom.dataset.color
  if (!color) {
    throw new Error('This element has no data-color attribute')
  }
  return color
}

const isNodeElementACanvas = (node: Element): HTMLCanvasElement => {
  if (!(node instanceof HTMLCanvasElement)) {
    throw new Error('The element is not a HTMLCanvasElement')
  }
  return node
}

const getCanvasRenderingContext2D = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
  const context = canvas.getContext('2d')
  if (context === null) {
    throw new Error('This browser does not support 2-dimensional canvas rendering contexts')
  }
  return context
}

particles.forEach(node => {

  const color: string = getColor(isElementHTMLElement(node)),
        ctx: CanvasRenderingContext2D = getCanvasRenderingContext2D(isNodeElementACanvas(node)),
        clr: string = hexToRgbA(color),
        width = window.innerWidth,
        height = window.innerHeight

  isNodeElementACanvas(node).height = height
  isNodeElementACanvas(node).width = width
  ctx.fillStyle = clr
  
  class Dot {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    
    constructor() {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.vx = velocity + Math.random()
      this.vy = velocity + Math.random()
      this.radius = Math.random() * particlesSize
    }
  
    create() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      ctx.fill()
    }
  
    animate() {
      for (let i = 0; i < particlesNumber; i++) {
        let dot: Dot = dotsArray[i]
        if (dot.x < 0 || dot.x > width) {
          dot.vx = - dot.vx
          dot.vy = dot.vy
        } else if (dot.y < 0 || dot.y > height) {
          dot.vx = dot.vx
          dot.vy = - dot.vy
        }
        dot.x += dot.vx
        dot.y += dot.vy
      }
    }
  }
  
  const createDots = () => {
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < particlesNumber; i++) {
      dotsArray.push(new Dot())
      const dot: Dot = dotsArray[i]
      dot.create()
      dot.animate()
    }
  }
  
  setInterval(createDots, 1000 / 30)
})