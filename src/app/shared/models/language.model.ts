import { Injectable } from "@angular/core";
import { Adapter } from '../interfaces/adapter';

export class Language {
  constructor(
    private code: string,
    private name: string,
  ) {}

  /** To be called by teh ceint to obtain a new instance of the builder of this class */
  public static getBuilder(): LanguageBuilder {
    return LanguageBuilder.getNewInstance();
  }

  public static instantiate(builder: LanguageBuilder):  Language{
    builder.setInstantiated();
    return new Language(
      builder.getCode(),
      builder.getName(),
    )
  }

  getCode(): string {
    return this.code;
  }

  getName(): string {
    return this.name;
  }
}

@Injectable({
  providedIn: 'root',
})

export class LanguageAdapter implements Adapter<Language> {
  adapt(item: Language): Language {
    return new Language(
      item.getCode(),
      item.getName(),
    );
  }
}

export class LanguageBuilder {
  private code: string;
  private name: string;
  private isInstantiated: boolean;

  public static getNewInstance(): LanguageBuilder {
    return new LanguageBuilder();
  }

  public addCode(code: string): LanguageBuilder {
    if (this.isInstantiated) {
      throw new Error('The clas Language is already instantiated');
    }

    if (this.code) {
      throw new Error('The field code is already fed in');
    }

    if (!code) {
      throw new Error('The code is mandatory fro language');
    }

    this.code = code;
    return this;
  }

  public addName(name: string): LanguageBuilder {
    if (this.isInstantiated) {
      throw new Error('The clas Language is already instantiated');
    }

    if (this.name) {
      throw new Error('The field name is already fed in');
    }

    if (!name) {
      throw new Error('The name is mandatory fro language');
    }

    this.name = name;
    return this;
  }

  /**
   * Here the object {@link Language} is built and returned to hte client
   */
  public build(): Language {
    this.validate();
    return Language.instantiate(this);
  }


  /** The methode to verify the integrity of the object {@link Language} before actually instanting it */
  private validate(): void {
    if (this.isInstantiated) {
      throw new Error('The clas Language is already instantiated');
    }

    if (!this.code) {
      throw new Error('The field name is already fed in');
    }

    if (!this.name) {
      throw new Error('The name is mandatory fro language');
    }
  }

  getCode(): string {
    return this.code;
  }

  getName(): string {
    return this.name;
  }

  setInstantiated(): void {
    this.isInstantiated = true;
  }
}
