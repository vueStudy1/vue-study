import KrxIndividual from '../src/components/Button/KrxIndividual.vue';

export default {
  title: 'krx/button',
  component: KrxIndividual,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { KrxIndividual },
  template: '<div><KrxIndividual /></div>',
});


export const krxIndividual = Template.bind({});
