/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const setupScrolling = () => {
  const container = document.querySelector('#landingpage-content')
  const docStyle = document.documentElement.style

  const borderThickness = offset => (1 - offset) * 2
  const scale = offset => 0.6 * offset + 0.4
  const translateY = offset => -500 * (1 - offset)

  container.addEventListener('scroll', e => {
    const offset = Math.min(
      e.srcElement.scrollTop / e.srcElement.clientHeight,
      1
    )
    docStyle.setProperty('--border-width', borderThickness(offset))
    docStyle.setProperty('--scale', scale(offset))
    docStyle.setProperty('--translateY', translateY(offset))
  })
}

exports.onInitialClientRender = () => {
  console.log('ReactDOM.render has executed')
  setupScrolling()
}
