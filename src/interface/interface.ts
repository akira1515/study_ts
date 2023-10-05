interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hart',
}

console.log('Object alias sample 1:', francePan)

// 型エイリアスで表現
type Mabodof = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = Mabodof & Rice // 交差型(union) ... 複数の型を持つ

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

console.log('Object alias sample 1:', maboDon)

// インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: 'ジャンプ',
  cycle: 'weekly',
}

console.log('Object alias sample 2:', jump)

type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

console.log('Object alias sample 3:', cotrip)

// implementsを使ってclassに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(
    page: number,
    title: string,
    private publishYear: string,
  ) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です'
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2016')
console.log(popularComic.getPublishYear())
