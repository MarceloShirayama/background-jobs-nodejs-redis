import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user: { name, email } } = data;
    await Mail.sendMail({
      from: 'Teste <teste@teste.com>',
      to: `${name} <${email}>`,
      subject: 'Teste de envio de e-mail',
      html: `Olá ${name}, este é um teste de envio de e-mail :D`,
    });
  },
};
