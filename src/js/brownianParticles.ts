export {}
const particles = document.querySelectorAll('.particles'),
      radius: number = 1.7,
      amountOfDot: number = 200,
      speed: number = -0.9

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

const getColor = (dom: HTMLElement): string => {
  const color = dom.dataset.color
  if (!color) {
    throw new Error('This element has no data-color attribute')
  }
  return color
}

class Dot {
  x: number
  y: number
  sx: number
  sy: number
  radius: number
  color: string
  
  constructor(width: number, height: number, speed: number, radius: number, color: string) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.sx = Math.random() + speed
    this.sy = Math.random() + speed
    this.radius = Math.random() * radius
    this.color = color
  }
  
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  
  update(width: number, height: number): void {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.sx = - this.sx
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.sy = - this.sy
    }
    this.x += this.sx
    this.y += this.sy
  }
}


particles.forEach(canvas => {
  if (canvas instanceof HTMLCanvasElement) {
    const color: string = hexToRgbA(getColor(canvas))
    const width: number = window.innerWidth
    const height: number = window.innerHeight
    const dotsArray: Dot[] = []
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return
  
    canvas.width = width
    canvas.height = height
  
    for (let i = 0; i < amountOfDot; i++) {
      dotsArray.push(new Dot(width, height, speed, radius, color))
    }
    const animate = (): void => {
      requestAnimationFrame(<FrameRequestCallback>animate)
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < amountOfDot; i++) {
        const dot: Dot = dotsArray[i]
        dot.draw(ctx)
        dot.update(width, height)
      }
    }
    animate()
  }
})


