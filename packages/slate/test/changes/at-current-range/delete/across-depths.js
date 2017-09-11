/** @jsx h */

import { h } from 'slate-core-test-helpers'

export default function (change) {
  change.delete()
}

export const input = (
  <state>
    <document>
      <quote>
        <paragraph>
          one<anchor />
        </paragraph>
      </quote>
      <paragraph>
        <focus />two
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <quote>
        <paragraph>
          onetwo
        </paragraph>
      </quote>
    </document>
  </state>
)