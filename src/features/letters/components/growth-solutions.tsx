import { htmlTemplate } from '@/features/letters/components/html-template';

export function getGrowthSolutions({ firstName }: { firstName: string }) {
  return htmlTemplate({
    body: `
      <section class="layout">
        <header class="header">
          <h1 class="heading">Wanmark Global</h1>
          <img class="img" src="https://i.ibb.co/60n40b9C/Metallic-White-11.png"  alt='header-img' />
        </header>
        <section class="main">
          <section style="padding: 40px">
            <h2 class="mainHeading">Your Growth Package Request Received</h2>
            <strong  class="strong" style="margin-top: 28px">Dear ${firstName},</strong>
            <p class="paragraph">Thank you for contacting <strong class="strong">Wanmark Global</strong>. We've successfully received your request for a <strong class="strong">custom marketing consulting</strong>, and our team is already working on it.</p>
            <p class="paragraph">One of our experts will review your selected services and prepare a <strong class="strong">tailored strategy</strong> to meet your specific needs. We will contact you shortly with further details and next steps.</p>
            <p class="paragraph">If you have any urgent questions, please reply to this email or contact us directly.<br /> We look forward to helping you achieve your business goals.</p>
            <p class="paragraph">Best regards,<br/><strong class="strong">Wanmark Global Team</strong></p>
          </section>
          <div class="images">
            <img style="pointer-events: none" src="https://i.ibb.co/SwXRN9Y3/Elements-1.png" alt="Elements-1" />
            <img style="margin-left: auto; pointer-events: none" src="https://i.ibb.co/kg0Vt822/Elements.png" alt="Elements">
          </div>
        </section>
        <footer class="footer">
          <div>
            <img src="https://i.ibb.co/WvXgzQHt/Group.png" alt="logo" />
            <p class="footerSlogan">Business & Marketing, Engineered for Your Success.</p>
          </div>
          <div class="contacts">
            <p class="contactParagraph"><strong class="contactStrong">Registered Address:</strong> 2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE</p>
            <p class="contactParagraph"><strong class="contactStrong">Office address:</strong> Unit 7, 6 Westgate Street, Hackney, E8 3RN</p>
            <p class="contactParagraph"><a href="mailto:info@wanmarkglobal.com">info@wanmarkglobal.com</a></p>
            <p class="contactParagraph"><a href="tel:+447418036208">+447418036208</a></p>
          </div>
        </footer>
      </section>`,
    style: `
      .images {
        display: flex;
        flex-wrap: wrap;
        gap: auto;
        position: relative;
      }         
      .layout {
        padding: 8px;
        background-color: #EFEFEF;
      }
      .img {
        width: 275px;
        margin-left: auto;
      }
      .header {
        background-color: #FFE69E;
        border-radius: 12px;
        display: flex;
        width: 100%;
      }
      .heading {
        padding: 30px;
        text-transform: uppercase;
        font-size: 38px;
        font-weight: 500;
        color: #242102;
      }
      .main {
        margin-top: 8px;
        border-radius: 12px;
        background-color: #FFF;
      }
      .mainHeading {
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 37px;
        letter-spacing: -0.1px;
      }
      .strong {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.1px;
      }
      .paragraph {
        margin-top: 16px;
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.1px;
      }
      .footer {
        margin-top: 8px;
        padding: 20px;
        background-color: #FFE69E;
        border-radius: 12px;
        display: flex;
      }
      .footerSlogan {
        margin-top: 6px;
        color: #242102;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 14px;
        font-weight: 300;
        line-height: normal;
       }
       .contacts {
        margin-left: auto;
        width: 500px;
       }
       .contactStrong {
         font-weight: 600;
       }
       .contactParagraph {
        color: #242102;
         margin-top: 4px;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
       }
       a {
        all: unset;
        color: inherit !important;
        text-decoration: none;
        cursor: pointer;
      }
      `,
  });
}
