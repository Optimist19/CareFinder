// test("adding two numbers", ()=>{
// 	expect(1 + 1).toBe(2)
// })

import AboutView from "../../src/views/AboutView.vue"
import {mount} from '@vue/test-utils'

describe("AboutView.vue", ()=>{
	it('Testing if the first paragraph has the class of first-para', ()=>{
		let wrapper = mount(AboutView)
		expect(wrapper.find('p.first-para').exists()).toBe(true);
	})
})