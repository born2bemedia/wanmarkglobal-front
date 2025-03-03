'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_USER,
} from '@/shared/config/env';

import { OrderProductWithServiceSchema } from '../lib/order-product.schema';

function makeBody({
  from,
  message,
  to,
  subject,
}: {
  to: string;
  from: string;
  subject: string;
  message: string;
}) {
  const email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    '',
    message,
  ].join('\n');

  return Buffer.from(email)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function orderProduct({
  type,
  phone,
  projectDescription,
  lastName,
  email,
  firstName,
  selectedServices,
}: Omit<OrderProductWithServiceSchema, 'agreement' | 'selectedServices'> & {
  type: string;
  selectedServices?: string[];
}) {
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error('Failed to generate access token.');
    }

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const adminEmailBody = makeBody({
      to: EMAIL_USER,
      from: EMAIL_USER,
      subject: `New ${type} order`,
      message: `
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Project Description:</b> ${projectDescription}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Selected services:</b> ${selectedServices?.join(', ')}</p>
      `,
    });

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: adminEmailBody },
    });

    if (res.status !== 200) {
      throw new Error(`Failed to send email. Status: ${res.status}`);
    }

    return { data: res.data, status: res.statusText };
  } catch (err: unknown) {
    console.error('Error order product:', err);

    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error('Unknown error occurred.');
  }
}
