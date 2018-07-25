import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default injectGlobal`
    ${styledNormalize}
    html {
        height: 100%;
    }
    body {
        box-sizing: content-box;
        font-family:  Verdana, sans-serif;
        font-size: 16px;
        height: 100%;
        margin: 0;
        padding: 0;
        > div {
            height: 100%;
        }
    }
`
