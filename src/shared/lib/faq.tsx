import { getTranslations } from 'next-intl/server';

import { AccordionDef } from '@/shared/ui/kit/accordion/types';
import { Text } from '@/shared/ui/kit/text';

export const getAboutOurServices = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): AccordionDef[] => [
  {
    title: t('items.0.title', {
      fallback: 'What documents do I receive after purchasing a service?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.0.desc', {
          fallback:
            'Depending on the service, you will receive well-structured strategies, reports, analyses, financial models, marketing roadmaps, and other deliverables in your client account. These documents are professionally formatted and ready for implementation.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.1.title', {
      fallback: 'Do you help with legal company registration and setup?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.1.desc', {
          fallback:
            'We provide legal and registration guidance, helping you understand business structures, tax basics, and compliance. However, we do not handle direct company registration or legal filings.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.2.title', {
      fallback: 'Can I request changes to a completed service?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.2.desc', {
          fallback:
            'Yes, we will refine the deliverables if you need minor adjustments based on our initial agreement. We can discuss custom consulting options for additional work beyond the original scope.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.3.title', {
      fallback: 'How do I know which service is right for me?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.3.desc', {
          fallback:
            'If you&apos;re unsure, you can either explore our structured packages or request a consultation, during which we assess your needs and recommend the best approach.',
        })}
      </Text>
    ),
  },
];

export const getAboutTheProcess = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): AccordionDef[] => [
  {
    title: t('items.0.title', {
      fallback: 'When do I need to pay for the services?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.0.desc', {
          fallback:
            'Payment is required before we start working on your project. Once we receive your order, we send you an invoice with bank transfer details. After payment confirmation, we begin execution.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.1.title', {
      fallback: 'Can I pay with a credit card or PayPal?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.1.desc', {
          fallback:
            'Currently, we only accept bank transfers. You will receive payment details along with your invoice after placing an order.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.2.title', {
      fallback: "What happens if I'm dissatisfied with the service?",
    }),
    content: (
      <Text color="lightBlue">
        {t('items.2.desc', {
          fallback:
            'We ensure clear expectations and regular check-ins during the process to prevent this. However, if you&apos;re not satisfied with the outcome, we will work with you to adjust or refine the deliverables within the agreed scope.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.3.title', {
      fallback: 'How will I communicate with my assigned consultant?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.3.desc', {
          fallback:
            'Your dedicated manager will coordinate the process and communicate with you via email, scheduled calls, or sessions based on the service package.',
        })}
      </Text>
    ),
  },
];

export const getClientsQuestions = (
  t: Awaited<ReturnType<typeof getTranslations>>,
): AccordionDef[] => [
  {
    title: t('items.0.title', {
      fallback:
        'I want to start a business but have nothing yet. Where should I begin?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.0.desc', {
          fallback:
            'If you only have an idea, start with our Business Foundation Package. We will help you validate your idea, develop a business model, set pricing, and plan finances—all essential first steps before launching.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.1.title', {
      fallback:
        'Do I need experience in business or marketing to work with you?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.1.desc', {
          fallback:
            'No, our services are designed for both beginners and experienced entrepreneurs. We guide you through the process, providing clear strategies and actionable recommendations.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.2.title', {
      fallback: 'Can I buy multiple services at once?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.2.desc', {
          fallback:
            'Yes, you can bundle multiple services or choose a Growth Package that includes everything you need at a lower total cost. If you want a custom combination, we offer flexible consulting packages where you select services that fit your needs.',
        })}
      </Text>
    ),
  },
  {
    title: t('items.3.title', {
      fallback: 'How long does it take to complete a service?',
    }),
    content: (
      <Text color="lightBlue">
        {t('items.3.desc', {
          fallback:
            'Timelines vary depending on the service. Simple strategies and reports can take a few days, while full consulting packages, depending on complexity, may require several weeks. After placing your order, you will receive a clear delivery timeline.',
        })}
      </Text>
    ),
  },
];
