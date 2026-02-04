export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number
  public hitpoints: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
  public static generateAbilityScore(): number {
    return [0, 0, 0, 0].map(() => Math.ceil(Math.random() * 6))
      .sort()
      .slice(1)
      .reduce((sum, accum) => sum + accum, 0)

  }

  public static getModifierFor(abilityValue: number): number {
    // You find your character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.
    return Math.floor((abilityValue - 10) / 2)
  }
}
