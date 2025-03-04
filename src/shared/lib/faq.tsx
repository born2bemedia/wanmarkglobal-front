import { AccordionDef } from "@/shared/ui/kit/accordion/types";
import { Text } from "@/shared/ui/kit/text";

export const aboutOurServices: AccordionDef[] = [
  {
    title: "What documents do I receive after purchasing a service?",
    content: (
      <Text color="lightBlue">
        Depending on the service, you will receive well-structured strategies,
        reports, analyses, financial models, marketing roadmaps, and other
        deliverables in your client account. These documents are professionally
        formatted and ready for implementation.
      </Text>
    ),
  },
  {
    title: "Do you help with legal company registration and setup?",
    content: (
      <Text color="lightBlue">
        We provide legal and registration guidance, helping you understand
        business structures, tax basics, and compliance. However, we do not
        handle direct company registration or legal filings.
      </Text>
    ),
  },
  {
    title: "Can I request changes to a completed service?",
    content: (
      <Text color="lightBlue">
        Yes, we will refine the deliverables if you need minor adjustments based
        on our initial agreement. We can discuss custom consulting options for
        additional work beyond the original scope.
      </Text>
    ),
  },
  {
    title: "How do I know which service is right for me?",
    content: (
      <Text color="lightBlue">
        If you"re unsure, you can either explore our structured packages or
        request a consultation, during which we assess your needs and recommend
        the best approach.
      </Text>
    ),
  },
];

export const aboutTheProcess: AccordionDef[] = [
  {
    title: "When do I need to pay for the services?",
    content: (
      <Text color="lightBlue">
        Payment is required before we start working on your project. Once we
        receive your order, we send you an invoice with bank transfer details.
        After payment confirmation, we begin execution.
      </Text>
    ),
  },
  {
    title: "Can I pay with a credit card or PayPal?",
    content: (
      <Text color="lightBlue">
        Currently, we only accept bank transfers. You will receive payment
        details along with your invoice after placing an order.
      </Text>
    ),
  },
  {
    title: "What happens if I'm dissatisfied with the service?",
    content: (
      <Text color="lightBlue">
        We ensure clear expectations and regular check-ins during the process to
        prevent this. However, if you're not satisfied with the outcome, we will
        work with you to adjust or refine the deliverables within the agreed
        scope.
      </Text>
    ),
  },
  {
    title: "How will I communicate with my assigned consultant?",
    content: (
      <Text color="lightBlue">
        Your dedicated manager will coordinate the process and communicate with
        you via email, scheduled calls, or sessions based on the service
        package.
      </Text>
    ),
  },
];

export const clientsQuestions: AccordionDef[] = [
  {
    title:
      "I want to start a business but have nothing yet. Where should I begin?",
    content: (
      <Text color="lightBlue">
        If you only have an idea, start with our Business Foundation Package. We
        will help you validate your idea, develop a business model, set pricing,
        and plan finances—all essential first steps before launching.
      </Text>
    ),
  },
  {
    title: "Do I need experience in business or marketing to work with you?",
    content: (
      <Text color="lightBlue">
        No, our services are designed for both beginners and experienced
        entrepreneurs. We guide you through the process, providing clear
        strategies and actionable recommendations.
      </Text>
    ),
  },
  {
    title: "Can I buy multiple services at once?",
    content: (
      <Text color="lightBlue">
        Yes, you can bundle multiple services or choose a Growth Package that
        includes everything you need at a lower total cost. If you want a custom
        combination, we offer flexible consulting packages where you select
        services that fit your needs.
      </Text>
    ),
  },
  {
    title: "How long does it take to complete a service?",
    content: (
      <Text color="lightBlue">
        Timelines vary depending on the service. Simple strategies and reports
        can take a few days, while full consulting packages, depending on
        complexity, may require several weeks. After placing your order, you
        will receive a clear delivery timeline.
      </Text>
    ),
  },
];
