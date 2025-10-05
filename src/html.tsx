import React from 'react';

interface HTMLProps {
  htmlAttributes?: { [key: string]: any };
  headComponents?: React.ReactNode[];
  bodyAttributes?: { [key: string]: any };
  preBodyComponents?: React.ReactNode[];
  body: string;
  postBodyComponents?: React.ReactNode[];
}

const HTML: React.FC<HTMLProps> = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;