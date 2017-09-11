/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <paragraph>
        o<anchor />ne<link>two</link>thre<focus />e
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        oe
      </paragraph>
    </document>
  </state>
)