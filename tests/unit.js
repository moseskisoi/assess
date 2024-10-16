import { shallowMount } from '@vue/test-utils';
import CategoryList from '@/components/CategoryList.vue';
import axios from 'axios';

jest.mock('axios');

describe('CategoryList.vue', () => {
  it('fetches and displays categories', async () => {
    const mockData = ['animal', 'career', 'celebrity'];
    axios.get.mockResolvedValue({ data: mockData });

    const wrapper = shallowMount(CategoryList);
    await wrapper.vm.$nextTick(); // Wait for the component to update

    expect(wrapper.findAll('li').length).toBe(mockData.length);
    expect(wrapper.text()).toContain('animal');
  });
});
