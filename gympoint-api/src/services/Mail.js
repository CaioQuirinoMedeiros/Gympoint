import sgMail from '@sendgrid/mail';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import mailConfig from '../config/mail';

import HelpOrder from '../app/models/HelpOrder';

class Mail {
  constructor() {
    this.sgMail = sgMail;
    this.sgMail.setApiKey(mailConfig.apiKey);
  }

  async newEnrollment(student, plan) {
    return this.sgMail.send({
      from: mailConfig.from,
      to: student.email,
      subject: 'Matrícula cadastrada!',
      templateId: 'd-ad1cf190f6984a498815dd3339dd5bc2',
      dynamicTemplateData: {
        studentName: student.name,
        planTitle: plan.title,
        planDuration: plan.duration,
        planPrice: `${plan.price / 100}`.replace('.', ',')
      }
    });
  }

  async helpOrderAnswared(helpOrder) {
    const { question, createdAt, answer, answer_at, student } = helpOrder;

    const createdAtFormated = format(createdAt, 'Pp', { locale: pt });
    const answerAtFormated = format(answer_at, 'Pp', { locale: pt });

    return this.sgMail.send({
      from: mailConfig.from,
      to: student.email,
      subject: `${student.name}, sua pergunta foi respondida!`,
      templateId: 'd-32fe50759ef249e5ab2b773f524133f3',
      dynamicTemplateData: {
        question,
        createdAtFormated,
        answer,
        answerAtFormated
      }
    });
  }
}

export default new Mail();
