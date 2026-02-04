const ONE_THOUSAND = 1000
const ONE_MILLION = 1000000
const ONE_BILLION = 1000000000

const colorCodes: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedResistorValue([first, second, third]: string[]): string {
  const tens = colorCodes[third]
  let units = 'ohms'
  let value = (colorCodes[first] * 10 + colorCodes[second]) * Math.pow(10, tens)
  
  if (value >= ONE_THOUSAND && value < ONE_MILLION) {
    units = 'kiloohms'
    value /= ONE_THOUSAND
  } else if (value >= ONE_MILLION && value < ONE_BILLION) {
    units = 'megaohms'
    value /= ONE_MILLION
  } else if (value >= ONE_BILLION) {
    units = 'gigaohms'
    value /= ONE_BILLION
  }

  return `${value} ${units}`
}