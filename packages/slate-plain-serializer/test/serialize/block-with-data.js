/** @jsx h */

import { h } from 'slate-core-test-helpers'

export const input = (
  <state>
    <document>
      <paragraph thing="value">
        one
      </paragraph>
    </document>
  </state>
)

export const output = `
one
`.trim()