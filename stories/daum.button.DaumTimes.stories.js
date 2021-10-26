import DaumTimes from '../src/components/Button/DaumTimes.vue';

export default {
  title: 'daum/button',
  component: DaumTimes,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DaumTimes },
  template: '<div><DaumTimes/></div>',
});


export const daumTimes = Template.bind({});
