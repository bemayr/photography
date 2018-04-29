import { Header } from '../components/Header'
import '../styles/global'
import 'normalize.css'
import 'prismjs/themes/prism-okaidia.css'
import * as React from 'react'
import { css } from 'react-emotion'
import { Helmet } from 'react-helmet'

type TemplateWrapperProps = {
  readonly children: any
}

const TemplateWrapper = ({ children }: TemplateWrapperProps) => (
  <div>
    <Helmet
      title="gatsby-starter-typescript"
      meta={[
        {
          name: 'description',
          content: 'Demo site for a Gatsby Starter in TypeScript'
        },
        {
          name: 'keywords',
          content: 'gatsby, gatsbyjs, sample, demo, typescript'
        }
      ]}
    />
    {children()}
  </div>
)

export default TemplateWrapper
