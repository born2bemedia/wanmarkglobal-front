import React from 'react';
import Image from 'next/image';

import st from './first-section.module.scss';

export function FirstSection({ text, image }: { text: string; image: string }) {
  return (
    <section className={st.layout}>
      <div className={st.content}>
        <h2>{text}</h2>
        <div className={st.image}>
          <Image src={image} alt={'image'} width={327} height={327} />
        </div>
      </div>
    </section>
  );
}
