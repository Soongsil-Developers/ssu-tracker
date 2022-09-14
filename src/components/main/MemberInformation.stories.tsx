import { ComponentStory, ComponentMeta } from "@storybook/react";
import MemberInformation from "./MemberInformation";

export default {
  title: "MemberInformation",
  component: MemberInformation,
} as ComponentMeta<typeof MemberInformation>;

const Template: ComponentStory<typeof MemberInformation> = (args) => (
  <MemberInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "박준서",
  email: "oponize@naver.com",
  image: null,
  type: "SSU",
  department: "글로벌미디어학과",
};
