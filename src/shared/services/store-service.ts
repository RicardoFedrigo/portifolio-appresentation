import { LanguagesAbbreviation } from "../enums/languages-abbreviation"
import { LanguageType } from "../types/languages-type"

import en from "../texts/en/english.json"
import pt from "../texts/pt/portuguese-brasil.json"

export class LanguagesService {
  static getLanguage(la: LanguagesAbbreviation): LanguageType {
    if (la === LanguagesAbbreviation.en) {
      return this.getEnLanguage()
    }
    return this.getPtLanguage()
  }

  static getStringifyLanguage(la: LanguagesAbbreviation): string {
    if (la === LanguagesAbbreviation.en) {
      return JSON.stringify(en)
    }
    return JSON.stringify(pt)
  }

  static getEnLanguage(): LanguageType {
    return JSON.parse(JSON.stringify(en))
  }

  static getPtLanguage(): LanguageType {
    return JSON.parse(JSON.stringify(en))
  }
}
