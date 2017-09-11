/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.insertFragment((
    <document>
      <quote>
        fragment
      </quote>
    </document>
  ))
}

export const input = (
  <state>
    <document>
      <paragraph>
        <link>word<cursor /></link>
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>
        <link>word</link>fragment<cursor />
      </paragraph>
    </document>
  </state>
)