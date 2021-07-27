import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* Colors */
          --richBlack: #00171f;
          --eerieBlack: #272727;
          --snow: #fffcff;
          --cultured: #fcfafa;

          /* Typography */
          --headingFont: 'Open Sans Condensed';
          --bodyFont: 'Open Sans Condensed';
          --baseFontSize: 1.6rem;
          --smallFontSize: 1.28rem;
          --smallestFontSize: 0.819rem;
          --heading-1: 3.125rem;
          --heading-2: 2.5rem;
          --heading-3: 2rem;
          --heading-4: var(--baseFontSize);
          --heading-5: var(--smallFontSize);
          --heading-6: 1.024rem;
          --heading-7: var(--smallestFontSize);

          /* z-index */
          --headerLevel: 10;
          --highestLevel: 100;
        }

        html,
        body,
        p,
        ol,
        ul,
        li,
        dl,
        dt,
        dd,
        blockquote,
        figure,
        fieldset,
        legend,
        textarea,
        pre,
        iframe,
        hr,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        button,
        input,
        select,
        textarea {
          margin: 0;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%;
          font-family: var(--font);
          scroll-behavior: smooth;
          background-color: var(--richBlack);
          color: var(--snow);
        }

        body {
          font-family: var(--bodyFont);
          font-size: var(--baseFontSize);
          font-weight: 400;
          line-height: 1.75;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        img,
        video {
          height: auto;
          max-width: 100%;
        }

        iframe {
          border: 0;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        td,
        th {
          padding: 0;
        }

        td:not([align]),
        th:not([align]) {
          text-align: left;
        }

        p {
          margin-bottom: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: var(---headingFont);
          font-weight: 400;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: var(--heading-1);
        }

        h2 {
          font-size: var(--heading-2);
        }

        h3 {
          font-size: var(--heading-3);
        }

        h4 {
          font-size: var(--heading-4);
        }

        h5 {
          font-size: var(--heading-5);
        }

        h6 {
          font-size: var(--heading-6);
        }

      `}
    />
  )
}

export default GlobalStyles