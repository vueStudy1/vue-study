import DaumDetailSearch from '../src/components/Button/DaumDetailSearch.vue';

export default {
  title: 'daum/button',
  component: DaumDetailSearch,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DaumDetailSearch },
  template: '<div><DaumDetailSearch /></div>',
});


export const daumDetailSearch = Template.bind({});
