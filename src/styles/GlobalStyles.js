import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* Colors */
          --richBlack: #00171f;
          --darkLiver: #3e3e4d;
          --independence: #545454;
          --ghostWhite: #e9e9f0;
          --snow: #fffcff;

          --carolineBlue: #39a0ed;
          --indianRed: #da5552;
          --lavander: #ccc9dc;

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

        /* CSS RESET */
        html {
          line-height: 1.15;
          text-size-adjust: 100%;
          font-size: 62.5%;
        }

        body {
          margin: 0;
          font-family: var(--bodyFont);
          font-size: var(--baseFontSize);
          color: var(--richBlack);
          background-color: var(--snow);
        }

        main {
          display: block;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        pre {
          font-family: monospace;
          font-size: 1em;
        }

        a {
          background-color: transparent;
        }

        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }

        b,
        strong {
          font-weight: bolder;
        }

        code,
        kbd,
        samp {
          font-family: monospace;
          font-size: 1em;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        img {
          border-style: none;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          line-height: 1.15;
          margin: 0;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          appearance: button;
        }

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        button:-moz-focusring,
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }

        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        textarea {
          overflow: auto;
        }

        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          appearance: textfield;
          outline-offset: -2px;
        }

        [type='search']::-webkit-search-decoration {
          appearance: none;
        }

        /* ::-webkit-file-upload-button {
          appearance: button;
          font: inherit;
        } */

        details {
          display: block;
        }

        summary {
          display: list-item;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none;
        }

        /* CSS CUSTOM */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: var(--headingFont);
          margin: 0;
        }
      `}
    />
  )
}

export default GlobalStyles
