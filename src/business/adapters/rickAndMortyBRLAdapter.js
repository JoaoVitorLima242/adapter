import RickAndMotyBRL from '../integrations/rickAndMortyBRL.js'

export default class RickAndMortyBRLAdapter {
  static async getCharacters() {
    return RickAndMotyBRL.getCharactersFromJson()
  }
}
