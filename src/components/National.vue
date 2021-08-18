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
    async language (country: string): Promise<string> {
      const str = await country.toLowerCase().substr(0, 2)
      switch (str) {
        case 'uk': return 'English'
        case 'fr': return 'Français'
        default: return 'English'
      }
    },
    async french(): Promise<void> {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Set language to ${await this.language('fr')}.`)
      }
      this.setLanguage(await this.language('fr'), 'fr')
    },
    async english(): Promise<void> {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Set language to ${await this.language('uk')}.`)
      }
      this.setLanguage(await this.language('uk'), 'uk')
    },
    async setLanguage (language: string, country: string): Promise<void> {
      this.dropdown = false
      this.$emit('changeLang', await language.toUpperCase().substr(0, 2))
      this.$emit('changeCountry', await country.toLowerCase().substr(0, 2))
    }
  }
})
</script>
