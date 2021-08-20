import { mount } from '@vue/test-utils'
import National from '@/components/National.vue'

describe('National.vue', () => {
  it('display language when passed country name', () => {
    const countries = ['fr', 'uk']
    const expected = ['flag-fr', 'flag-uk']
    const wrappers = [ 
      mount(National, {
        propsData: { country: countries[0] }
      }),
      mount(National, {
        propsData: { country: countries[1] }
      })
    ]
    expect(wrappers[0].html()).toContain(expected[0])
    expect(wrappers[1].html()).toContain(expected[1])
  })
})
