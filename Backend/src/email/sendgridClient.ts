import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Configurações do SendGrid para envio de emails

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default sgMail;