import { mount } from "@vue/test-utils";
import HomeComp from "../../src/components/HomeComp.vue"

describe("Home Component", ()=>{
	it("Checking if table is present in the component",()=>{
		let wrapper = mount(HomeComp)
		expect(wrapper.find('table').exists().toBe(true))
		console.log("Home component tested")
	})
})

