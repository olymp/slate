
/** @jsx sugar */

import sugar from '../../../helpers/sugar'

export const config = {
  rules: [
    {
      deserialize(el, next) {
        switch (el.tagName.toLowerCase()) {
          case 'p': {
            return {
              kind: 'block',
              type: 'paragraph',
              data: { thing: 'value' },
              nodes: next(el.childNodes),
            }
          }
        }
      }
    }
  ]
}

export const input = `
<p>one</p>
`.trim()

export const output = (
  <state>
    <document>
      <paragraph thing="value">
        one
      </paragraph>
    </document>
  </state>
)
