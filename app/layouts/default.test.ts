import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import DefaultLayout from './default.vue';

describe('default layout', () => {
  it('renders the navigation links', async () => {
    const wrapper = await mountSuspended(DefaultLayout);

    const links = wrapper.findAll('nav a');
    expect(links.map(link => link.text())).toEqual(['Start page', 'Other page']);
    expect(links.map(link => link.attributes('href'))).toEqual(['/', '/other']);
  });

  it('renders the slot content', async () => {
    const wrapper = await mountSuspended(DefaultLayout, {
      slots: {
        default: () => 'Hello from the slot',
      },
    });

    expect(wrapper.find('main').text()).toBe('Hello from the slot');
  });
});
