import { Spinner } from "../components/UI/Spinner.jsx";

export default {
  title: "Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = { size: "sm" };
