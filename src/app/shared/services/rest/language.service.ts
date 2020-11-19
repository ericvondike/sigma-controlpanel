import { Injectable } from "@angular/core";

/** Imports Environment variables */
import { environment } from "../../../../environments/environment";

/** Imports Models */
import { Language } from "../../models/language.model";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private static instance: LanguageService;
  private baseUrl = environment.apiUrl;

  constructor() {
    if (!LanguageService.instance) {
      LanguageService.instance = this;
    }

    return LanguageService.instance;
  }


  /** To be implemented via http.get method */
  retrievAllLanguages(): Language[] {
    return this.mockLanguageService();
  }


  /** A temporary mock */
  private mockLanguageService(): Language[] {
    const languages: Language[] = [];

    const firstLang = Language.getBuilder()
      .addCode("EN")
      .addName("English")
      .build();

    const secondLang = Language.getBuilder()
      .addCode("FR")
      .addName("French")
      .build();

    languages.push(firstLang);
    languages.push(secondLang);

    return languages;
  }
}
