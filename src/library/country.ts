enum Country {
  France = 'fr',
  UnitedKingdom = 'uk',
  Other = ''
}

function from (value: string): Country {
  switch(value.toLowerCase()) {
    case Country.France: return Country.France
    case Country.UnitedKingdom: return Country.UnitedKingdom
    default: return Country.Other
  }
}

function getLanguage (country: string): string {
  switch (country) {
    case Country.France: return 'Français'
    case Country.UnitedKingdom: return 'English'
    default: return ''
  }
}

export declare type country = typeof Country

export default { ...Country, from, getLanguage }
