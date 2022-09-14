import { ComponentStory, ComponentMeta } from "@storybook/react";
import MemberNotify from "./MemberNotify";

export default {
  title: "MemberInformation",
  component: MemberNotify,
} as ComponentMeta<typeof MemberNotify>;

const Template: ComponentStory<typeof MemberNotify> = (args) => (
  <MemberNotify {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hits: 365,
  amount: 4612,
};
