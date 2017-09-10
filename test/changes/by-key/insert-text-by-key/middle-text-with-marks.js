/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  const texts = document.getTexts()
  const firstText = texts.first()
  const secondText = texts.get(1)

  const nextSelection = selection.merge({
    anchorKey: firstText.key,
    focusKey: firstText.key,
    anchorOffset: 2,
    focusOffset: 2
  })

  change
    .select(nextSelection)
    .insertTextByKey(secondText.key, 2, 'XX', [ { type: 'bold' } ])

  assert.deepEqual(
    next.selection.toJS(),
    nextSelection.toJS()
  )
}

export const input = (
  <state>
    <document>
      <paragraph>outside</paragraph>
      <paragraph>hello</paragraph>
    </document>
  </state>
)

export const output = (
  <state>
    <document>
      <paragraph>outside</paragraph>
      <paragraph>he
        <b>XX</b>llo
      </paragraph>
    </document>
  </state>
)