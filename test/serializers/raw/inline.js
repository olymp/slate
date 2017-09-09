/** @jsx sugar */

import sugar from '../../helpers/sugar'

export const state = (
  <state>
    <document>
      <paragraph>
        <link>
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
        isVoid: false,
        data: {},
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
            data: {},
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
