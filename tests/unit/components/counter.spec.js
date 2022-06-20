import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto', () => {

        const wrapper = shallowMount(Counter);

        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Value = wrapper.find('h2').text();
        expect(h2Value).toBe('Counter');
    })

    test('El valor por defecto debe de ser 100 en el p', () => {

        const wrapper = shallowMount(Counter);

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('100');

    })

})