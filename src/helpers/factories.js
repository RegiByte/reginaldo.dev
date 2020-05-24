export const factoryX = (factory) => (dependencies) => {
    
    const concreteFactory = factory(dependencies)

    concreteFactory.having = (newDependencies) => factoryX(factory)({
        ...dependencies,
        ...newDependencies
    })

    concreteFactory.log = () => {
        console.log(dependencies)
        return concreteFactory
    }

    return concreteFactory
}