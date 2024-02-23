import RickAndMotyUsa from '../integrations/rickAndMortyUSA.js'

export default class RickAndMortyUSAAdapter {
  static async getCharacters() {
    return RickAndMotyUsa.getCharactersFromXML()
  }
}
