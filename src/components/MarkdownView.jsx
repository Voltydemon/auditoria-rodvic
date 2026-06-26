import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import sqli from '../../docs_rodvic/img_rodvic/sqli_rodvic.png'
import xss from '../../docs_rodvic/img_rodvic/xss_rodvic.png'
import comandos from '../../docs_rodvic/img_rodvic/comandos_rodvic.png'
import cvssSqli from '../../docs_rodvic/img_rodvic/cvss_sqli_rodvic.png'
import cvssXss from '../../docs_rodvic/img_rodvic/cvss_xss_rodvic.png'
import cvssComandos from '../../docs_rodvic/img_rodvic/cvss_comandos_rodvic.png'

const imageMap = {
  'img_rodvic/sqli_rodvic.png': sqli,
  'img_rodvic/xss_rodvic.png': xss,
  'img_rodvic/comandos_rodvic.png': comandos,
  'img_rodvic/cvss_sqli_rodvic.png': cvssSqli,
  'img_rodvic/cvss_xss_rodvic.png': cvssXss,
  'img_rodvic/cvss_comandos_rodvic.png': cvssComandos,
}

function normalizeImagePath(src = '') {
  return src.replace(/^\.\//, '').replace(/^\//, '')
}

function MarkdownView({ markdown }) {
  return (
    <article className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img({ src = '', alt = '' }) {
            const normalized = normalizeImagePath(src)
            const resolvedSrc = imageMap[normalized] ?? src

            return (
              <figure className="md-image">
                <img src={resolvedSrc} alt={alt} loading="lazy" />
                {alt ? <figcaption>{alt}</figcaption> : null}
              </figure>
            )
          },
          a({ href = '', children }) {
            return (
              <a href={href} target="_blank" rel="noreferrer">
                {children}
              </a>
            )
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
}

export default MarkdownView
