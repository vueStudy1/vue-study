import KrxAll from '../src/components/Button/KrxAll.vue';

export default {
  title: 'krx/button',
  component: KrxAll,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KrxAll },
  template: '<div><KrxAll /></div>',
});


export const krxAll = Template.bind({});
