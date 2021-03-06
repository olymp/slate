/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  change.insertBlock('quote')
}

export const input = (
  <state>
    <document>
      <paragraph>
        <cursor />
      </paragraph>
      <paragraph>
        not empty
      </paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <quote>
        <cursor />
      </quote>
      <paragraph>
        not empty
      </paragraph>
    </document>
  </state>
)
