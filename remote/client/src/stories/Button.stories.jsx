import { Button } from "../components/UI/Button";
export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Click Me" };
