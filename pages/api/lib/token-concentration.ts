export default function tokenConcentration(items: any[], price: number) {

  const minAmount = 50 / price;
  const filterMinAmount = items.filter(item => item.balance.formatted > minAmount)

  const totalTokens = filterMinAmount
    .map(item => item.balance.formatted)
    .reduce((a, b) => {
      return a + b
    })

  const pf = filterMinAmount.map(item => {
    return item.balance.formatted / totalTokens
  })

  let cpb: any[] = [pf[0]]

  for (let index = 1; index < pf.length; index++) {
    let x = pf[index - 1] + pf[index]
    cpb.push(x)
  }

  const area = cpb.reduce((a, b, i) => {
      return 0.5 * (a + b) * (1 / totalTokens)
    })

  let auc: any[] = [cpb[0]]

  for (let index = 1; index < cpb.length; index++) {
    let x = 0.5 * (cpb[index - 1] + cpb[index]) * (1 / totalTokens)
    auc.push(x)
  }


  const aul = auc.reduce((a, b) => {
    return a + b
  })

  const abc = 0.5 - aul
  const gini = abc / 0.5

  return gini;

}