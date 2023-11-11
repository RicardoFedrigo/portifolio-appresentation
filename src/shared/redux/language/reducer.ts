import { Action } from "redux"
import { LanguagesAbbreviation } from "../../enums/languages-abbreviation"
import { LanguagesService } from "../../services/store-service"
import { LanguageType } from "../../types/languages-type"

export const languageReducer = function (
  state = LanguagesAbbreviation.pt,
  action: Action,
): LanguageType {
  if (action.type === "languageChange") return LanguagesService.getLanguage(state)

  return LanguagesService.getPtLanguage()
}
