import AboutComp from "../../src/components/AboutComp.vue"
import {mount} from '@vue/test-utils'

describe("AboutComp.vue and HomeComp", ()=>{
	it('Testing if the first paragraph has the class of first-para', ()=>{
		let wrapper = mount(AboutComp)
		console.log(wrapper)
		expect(wrapper.find('.first-para').exists()).toBe(true);
	})
})
