<template>
  <MDBDropdown btnGroup v-model="dropdown">
    <MDBBtn size="2x" class="bg-info" color="bg-info" :title="language(country)">
      <MDBIcon :flag="country" />
    </MDBBtn>
    <MDBDropdownToggle split @click="dropdown = !dropdown" />
    <MDBDropdownMenu aria-labelledby="dropdownMenuLink">
      <MDBDropdownItem href="#" @click="english">
        <MDBIcon flag="uk" />
        <span>English</span>
      </MDBDropdownItem>
      <MDBDropdownItem href="#" @click="french">
        <MDBIcon flag="fr" />
        <span>Français</span>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script lang='ts'>
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from 'mdb-vue-ui-kit'
import { defineComponent, ref } from 'vue'
import Country from '@/library/country'
import Language from '@/library/language'
export default defineComponent({
  name: 'National',
  components: { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn },
  setup () {
    let dropdown = ref(false)
    return {
      dropdown
    }
  },
  props: {
    country: {
      type: String,
      default: Country.UnitedKingdom
    }
  },
  methods: {
    language (country: string): string {
      return Country.getLanguage(Country.from(country))
    },
    french (): void {
      const french = this.language(Country.France)
      if (process.env.NODE_ENV !== 'production') {
        console.log('Set language to', french, '.')
      }
      this.setLanguage(Language.from('FR'), Country.France)
    },
    english (): void {
      const english = this.language(Country.UnitedKingdom)
      if (process.env.NODE_ENV !== 'production') {
        console.log('Set language to', english, '.')
      }
      this.setLanguage(Language.from('EN'), Country.UnitedKingdom)
    },
    setLanguage (language: string, country: string): void {
      this.dropdown = false
      this.$emit('changeLang', language)
      this.$emit('changeCountry', country)
    }
  }
})
</script>
