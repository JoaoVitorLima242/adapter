import { expect, describe, test, beforeEach, jest } from '@jest/globals'
import fs from 'fs/promises'
import Character from '../../src/entities/character'
import RickAndMortyBRL from '../../src/business/integrations/rickAndMortyBRL'
import axios from 'axios'
import { warn } from 'console'

describe('@RickAndMortyBRL', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('#getCharactersJSON should return a list of Characters Entity', async () => {
    const response = JSON.parse(await fs.readFile('./test/mocks/characters.json'))
    const expected = response.results.map(char => new Character(char))

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyBRL.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })
  test('#getCharactersJSON should return an empty list if the API returns nothing', async () => {
    const response = JSON.parse(await fs.readFile('./test/mocks/characters-empty.json'))
    const expected = response.results

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyBRL.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })
})