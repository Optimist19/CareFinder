import HomeComp from "../../src/components/HomeComp.vue";
import { shallowMount } from '@vue/test-utils';


//The useStore function from vuex is not available in the testing environment but in the test environment, the store needs to be mocked or provided separately else it gives error. If the test is okay without mocking the useStore, the test will pass.

jest.mock('vuex', () => ({
	useStore: jest.fn(),		
}));


describe('HomeView', () => {
	it('renders correctly', () => {
		//Component testing
	  const wrapper = shallowMount(HomeComp); 
	  expect(wrapper.exists()).toBe(true);
	});
  
	it('calls addHospitals method when the form is submitted', async () => {
		// unit testing
		const wrapper = shallowMount(HomeComp);
	  const form = wrapper.find('form');
	  const addHospitals = jest.fn();
	  wrapper.vm.addHospitals = addHospitals;
  
	  await form.trigger('submit');
  
	  expect(addHospitals).toHaveBeenCalled();
	});
  
	it('calls toExportHospitalData method when the "Export Data" button is clicked', async () => {
		// unit testing
		const wrapper = shallowMount(HomeComp);
	  const button = wrapper.find('.exportDataBtn');
	  const toExportHospitalData = jest.fn();
	  wrapper.vm.toExportHospitalData = toExportHospitalData;
  
	  await button.trigger('click');
  
	  expect(toExportHospitalData).toHaveBeenCalled();
	});
});


