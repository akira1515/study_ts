export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('array sample 1:', colors)

  const even: Array<number> = [2, 3, 4]
  even.push(6)
  // even.push("8")
  console.log('array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log('array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]として推論される
    _someArray.push('ABC') // (string | number)[]として推論される
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('array sample 4:', someArray)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push('git fetch')
  // commands[2] = 'git pull'
  console.log('array sample 5:', commands)
}
