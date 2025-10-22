import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRightCircle } from '@/shared/ui/icons';

import { Case } from '../../lib';
import st from './case-card.module.scss';

const isVideo = (url: string) => url.endsWith('.webm');

export function CaseCard({
  title,
  slug,
  subTitle,
  thumbnail,
  challenge,
  strategy,
  result,
}: Case) {
  const t = useTranslations('marketCases.caseCard');

  return (
    <div className={st.card}>
      <div className={st.cardThumbnail}>
        {isVideo(thumbnail) ? (
          <video className={st.thumbnailMedia} autoPlay loop muted>
            <source src={thumbnail} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={thumbnail} alt={title} fill />
        )}
        <div className={st.title}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <Link href={`/market-cases/${slug}`}>
          {t('read', { fallback: 'Read the Case' })}{' '}
          <ArrowTopRightCircle color="blue" />
        </Link>
      </div>
      <div className={st.cardContent}>
        <div className={st.details}>
          <Image
            src="/cases/challenge.svg"
            alt="challenge"
            width={40}
            height={40}
          />
          <div className={st.info}>
            <h3>{t('challenge', { fallback: 'The Challenge' })}</h3>
            <div dangerouslySetInnerHTML={{ __html: challenge }} />
          </div>
        </div>
        <div className={st.details}>
          <Image
            src="/cases/strategy.svg"
            alt="strategy"
            width={40}
            height={40}
          />
          <div className={st.info}>
            <h3>{t('strategy', { fallback: 'The Strategy' })}</h3>
            <div dangerouslySetInnerHTML={{ __html: strategy }} />
          </div>
        </div>
        <div className={st.details}>
          <Image src="/cases/result.svg" alt="result" width={40} height={40} />
          <div className={st.info}>
            <h3>{t('result', { fallback: 'The Result' })}</h3>
            <div dangerouslySetInnerHTML={{ __html: result }} />
          </div>
        </div>
      </div>
    </div>
  );
}
