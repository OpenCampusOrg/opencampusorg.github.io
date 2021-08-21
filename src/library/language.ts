enum Language {
  French = 'FR',
  English = 'EN',
  Other = ''
}

function from (value: string): Language {
  switch (value.toUpperCase()) {
    case Language.French: return Language.French
    case Language.English: return Language.English
    default: return Language.Other
  }
}

export declare type language = Language

export default { ...Language, from }
