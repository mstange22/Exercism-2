const BOTTLES = {
  0: 'no',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
}

export const recite = (initialBottlesCount, takeDownCount) => {
  const song = []
  for (let bottlesCount = initialBottlesCount, count = 0; bottlesCount > 0 && count < takeDownCount; bottlesCount--, count++) {
    const startBottlesText = BOTTLES[bottlesCount].charAt(0).toUpperCase() + BOTTLES[bottlesCount].slice(1)
    song.push(`${startBottlesText} green bottle${bottlesCount === 1 ? '' : 's'} hanging on the wall,`)
    song.push(`${startBottlesText} green bottle${bottlesCount === 1 ? '' : 's'} hanging on the wall,`)
    song.push(`And if one green bottle should accidentally fall,`)
    song.push(`There'll be ${BOTTLES[bottlesCount - 1]} green bottle${bottlesCount === 2 ? '' : 's'} hanging on the wall.`)
    song.push('')
  }
  song.pop()
  return song;
};
