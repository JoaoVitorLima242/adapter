import axios from 'axios'
import Character from '../../entities/character.js'
import { parseStringPromise } from 'xml2js'
const URL = 'https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.xml'

export default class RickAdnMortyUSA {
  static async getCharactersFromXML() {
    const { data } = await axios.get(URL)
    const opts = {
      explicitRoot: false,
      explicitArray: false
    }
    const { results: { element: result = [] } } = await parseStringPromise(data, opts)
    const defaultFormat = Array.isArray(result) ? result : [result]

    return defaultFormat.map(data => new Character(data))
  }
}
