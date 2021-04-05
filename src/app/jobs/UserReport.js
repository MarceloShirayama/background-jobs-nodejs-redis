export default {
  key: 'UserReport',
  async handle({ data }) {
    const { user: { name, email, password } } = data;

    // eslint-disable-next-line no-console
    console.log({ name, email, password });
  },
};
