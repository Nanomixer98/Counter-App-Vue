import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';

describe('Indecision Component', () => {
    
    let wrapper;
    let clgSpy;
    
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
    })

    test('Debe de hacer match con el snapchot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Escribir en el input no debe disparar nada (console.log)', async () => {
        const input = wrapper.find('input');
        await input.setValue('Hola Mundo');

        expect(clgSpy).toHaveBeenCalledTimes(2);
    })

    test('Escribir el simbolo de "?" debe de disparar el fetch', () => {

    })

    test('Pruebas en getAnswer', () => {

    })

    test('Pruebas en getAnswer - Fallo en el API', () => {

    })

})