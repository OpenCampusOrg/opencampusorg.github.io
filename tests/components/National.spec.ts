import { mount } from '@vue/test-utils'
import National from '@/components/National.vue'
import Country from '@/library/country'

describe('National.vue', () => {
  it('display flag when passing country', () => {
    const wrappers = [
      mount(National, {
        propsData: { country: Country.France }
      }),
      mount(National, {
        propsData: { country: Country.UnitedKingdom }
      })
    ]
    expect(wrappers[0].html()).toContain(`flag-${Country.France}`)
    expect(wrappers[1].html()).toContain(`flag-${Country.UnitedKingdom}`)
  })
})
