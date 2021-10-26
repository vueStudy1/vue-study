import ButtonList from '../src/components/Button/ButtonList.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  title: 'button',
  component: ButtonList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonList },
  template: '<div><ButtonList /></div>',
});


export const buttonList = Template.bind({});
