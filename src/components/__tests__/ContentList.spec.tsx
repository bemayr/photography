import * as React from 'react'
import { MemoryRouter } from 'react-router'
import { merge } from 'ramda'
import { render } from 'react-testing-library'
import { ContentList } from '../ContentList'

function createEdge(
  override: DeepPartial<MarkdownRemarkEdge>
): MarkdownRemarkEdge {
  return merge(
    {
      node: {
        id: '',
        excerpt: '',
        html: '',
        frontmatter: {
          date: '',
          draft: false,
          path: '',
          tags: [],
          title: ''
        }
      }
    },
    override
  )
}

describe('<ContentList />', () => {
  it('renders a list of content links', () => {
    const edges: ReadonlyArray<MarkdownRemarkEdge> = [
      createEdge({
        node: { frontmatter: { path: '/path/1', title: 'Content 1' } }
      }),
      createEdge({
        node: { frontmatter: { path: '/path/2', title: 'Content 2' } }
      })
    ]

    const { getByText } = render(
      <MemoryRouter>
        <ContentList edges={edges} />
      </MemoryRouter>
    )

    expect(
      ['Content 1', 'Content 2'].map(text =>
        getByText(text).getAttribute('href')
      )
    ).toEqual(['/path/1', '/path/2'])
  })
})
