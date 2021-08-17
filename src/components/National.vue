<template>
  <MDBDropdown btnGroup v-model="dropdown">
    <MDBBtn size="2x" class="bg-info" color="bg-info" :title="language(country)">
      <MDBIcon :flag="country" />
    </MDBBtn>
    <MDBDropdownToggle split @click="dropdown = !dropdown" />
    <MDBDropdownMenu aria-labelledby="dropdownMenuLink">
      <MDBDropdownItem href="#" @click="english">
        <MDBIcon flag="uk" />
        <label>English</label>
        </MDBDropdownItem>
      <MDBDropdownItem href="#" @click="french">
        <MDBIcon flag="fr" />
        <label>Français</label>
        </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script lang='ts'>
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'National',
  components: { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn },
  data () {
    return {
      dropdown: false
    }
  },
  props: {
    country: {
      type: String,
      default: 'uk'
    }
  },
  methods: {
    language (country: string): string {
      switch (country.toLowerCase().substr(0, 2)) {
        case 'uk': return 'English'
        case 'fr': return 'Français'
        default: return 'English'
      }
    },
    french(): void {
      this.setLanguage(this.language('fr'), 'fr')
    },
    english(): void {
      this.setLanguage(this.language('uk'), 'uk')
    },
    setLanguage (language: string, country: string): void {
      this.dropdown = false
      this.$emit('changeLang', language.toUpperCase().substr(0, 2))
      this.$emit('changeCountry', country.toLowerCase())
    }
  }
})
</script>
