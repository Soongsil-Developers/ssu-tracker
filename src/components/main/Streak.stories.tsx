import { ComponentStory, ComponentMeta } from "@storybook/react";
import Streak from "./Streak";

export default {
  title: "Streak",
  component: Streak,
} as ComponentMeta<typeof Streak>;

const Template: ComponentStory<typeof Streak> = (args) => (
  <Streak {...args} />
);

export const Default = Template.bind({});
Default.args =[
  {
    date: new Date(2021, 8, 16),
    amount: 3,
    type: "정보섬"
  },
  {
    date: new Date(2022, 2, 3),
    amount: 4,
    type: "중앙도서관"
  },
  {
    date: new Date(2022, 8, 15),
    amount: 2,
    type: "정보섬"
  }
];