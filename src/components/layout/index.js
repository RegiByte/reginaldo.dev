import { factoryX } from '../../helpers/factories'
import { each } from 'lodash'
import { header } from '../header'
import { element, component } from '../../helpers/renderer'

const layoutFactory = factoryX(dependencies => {
    const { header, el } = dependencies

    return function layout() {
        return component({
            render() {
                const rootElement = getRootElement()

                const headers = el('header', {
                    innerText: 'Hello Header'
                })

                return headers
            }
        })
    }
})

export const layout = layoutFactory({
    header,
    el: element
})