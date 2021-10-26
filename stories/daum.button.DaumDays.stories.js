import DaumDays from '../src/components/Button/DaumDays.vue';

export default {
  title: 'daum/button',
  component: DaumDays,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DaumDays },
  template: '<div><DaumDays/></div>',
});


export const daumDays = Template.bind({});
