import { Requirements } from "../components/Requirements";

// import { Requirements } from "../components/Requirements";



export default {
  component: Requirements,
  title: "Requirements",
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
}