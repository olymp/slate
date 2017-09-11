/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.deleteCharForward()
}

export const input = (
  <state>
    <document>
      <paragraph>
        wor<cursor />d
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        wor<cursor />
      </paragraph>
    </document>
  </state>
)