/** @jsx sugar */

import sugar from '../../helpers/sugar'

export const state = (
  <state>
    <document>
      <paragraph>
        <link thing="value">
          one
        </link>
      </paragraph>
    </document>
  </state>
)

export const json = {
  kind: 'state',
  document: {
    kind: 'document',
    data: {},
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        data: {},
        isVoid: false,
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                kind: 'range',
                text: '',
                marks: [],
              }
            ]
          },
          {
            kind: 'inline',
            type: 'link',
            isVoid: false,
            data: {
              thing: 'value'
            },
            nodes: [
              {
                kind: 'text',
                ranges: [
                  {
                    kind: 'range',
                    text: 'one',
                    marks: [],
                  }
                ]
              }
            ]
          },
          {
            kind: 'text',
            ranges: [
              {
                kind: 'range',
                text: '',
                marks: [],
              }
            ]
          },
        ]
      }
    ]
  }
}
