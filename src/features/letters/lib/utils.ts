import { getBusinessConsultingEmailMessage } from '../components/business-consulting';
import { getGrowthSolutions } from '../components/growth-solutions';
import { getMarketingConsultingEmailMessage } from '../components/marketing-consulting';

export const getUserMessage = ({
  type,
  config: { firstName },
}: {
  type: string;
  config: { firstName: string };
}) => {
  if (type === 'Business Consulting') {
    return getBusinessConsultingEmailMessage({ firstName });
  }

  if (type === 'Marketing Consulting') {
    return getMarketingConsultingEmailMessage({ firstName });
  }

  if (type === 'Growth Solutions') {
    return getGrowthSolutions({ firstName });
  }
};
