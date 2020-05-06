import { mount } from '@vue/test-utils'
import TheDesktopNavigation from './TheDesktopNavigation.vue'

describe('TheDesktopNavigation', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(TheDesktopNavigation);
    })

    it('is a Vue instance & is visible', () => {
        expect(wrapper.isVueInstance()).toBe(true)
        expect(wrapper.isVisible()).toBe(true)
    })

    it('is a semantic <nav> element', () => {
        expect(wrapper.element.tagName.toLocaleLowerCase()).toBe('nav')
    })

    // CSS is not parsed (while all logic
    // is in CSS), component should be E2E tested.
    // Probably, we could try to make Jest parse
    // CSS & apply stylewind classes.
    it('is not visible but cannot be tested', () => {
        const modelsSubmenu = wrapper.get('.submenu')
        // It is *not* visible but Jest doesn't
        // know about that since CSS is not applied
        // on virtual DOM.
        expect(modelsSubmenu.isVisible()).toBe(true)

        // Though we know that it'd be
        // invisible, with CSS applied
        expect(modelsSubmenu.classes()).toContain('invisible')
    })

    it('finds icon', async () => {
        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toContain('faicon')
        expect(wrapper.get('.main-navigation-overlay').exists()).toBe(true)
    })
})
