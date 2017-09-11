/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.deleteForward()
}

export const input = (
  <state>
    <document>
      <paragraph>
        <anchor />one<link>t<focus />wo</link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <cursor /><link>wo</link>
      </paragraph>
    </document>
  </state>
)