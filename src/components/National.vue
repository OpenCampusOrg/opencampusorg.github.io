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
  setup () {
    let dropdown = false
    return {
      dropdown
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
    french (): void {
      this.language('fr').then(french => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Set language to ${french}.`)
        }
        this.setLanguage(french, 'fr')
      })
    },
    english (): void {
      this.language('uk').then(english => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Set language to ${english}.`)
        }
        this.setLanguage(english, 'uk')
      })
    },
    async setLanguage (language: string, country: string): Promise<void> {
      this.dropdown = false
      this.$emit('changeLang', await language.toUpperCase().substr(0, 2))
      this.$emit('changeCountry', await country.toLowerCase().substr(0, 2))
    }
  }
})
</script>
