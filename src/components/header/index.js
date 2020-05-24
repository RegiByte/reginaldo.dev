import {factoryX} from '../../helpers/factories'
import {element} from '../../helpers/renderer'

const headerFactory = factoryX(dependencies => {
    const {el} = dependencies

    return function header() {
        return {
            render() {
                const header = el('header')

                return header
            }
        }
    }
})

export const header = headerFactory({
    el: element
})