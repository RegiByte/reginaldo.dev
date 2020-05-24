const routes = [
    {
        path: '',
        action: () => ({foo: 'bar'})
    },
    {
        path: '/foo',
        action: () => ({foo: 'foo'})
    }
]

export default routes