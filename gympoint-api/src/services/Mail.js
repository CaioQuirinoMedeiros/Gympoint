import sgMail from '@sendgrid/mail';

import mailConfig from '../config/mail';

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
        planPrice: `${plan.price / 100}`.replace('.',',')
      }
    });
  }
}

export default new Mail();
