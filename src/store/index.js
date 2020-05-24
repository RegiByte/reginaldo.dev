import redux from 'redux'
import thunk from 'redux-thunk'

function configStore() {
    
}

let store

export default function getStore() {
    if (!store) {
        store = configStore()
    }

    return store
}