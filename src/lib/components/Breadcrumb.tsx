import React from 'react'
import { Wrapper } from './styles/breadcrumbStyles'

interface BreadcrumbProps {
  linkComponent: any
  routes: { name: string; path: string }[]
  pathName: string
  params: { id: string }
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  linkComponent: Link,
  routes,
  pathName,
  params
}) => {
  const findItemsToShowOnBredCrumb = (
    locationPathName: string,
    routes: { name: string; path: string }[],
    params: { id: string }
  ) => {
    const items: { routeName: string; routePath: string }[] = []
    const pathArray = locationPathName.split('/')
    const pathArrayLength = pathArray.length

    for (let i = 0; i < pathArrayLength; i++) {
      const currentPath = pathArray.join('/')
      if (currentPath === '/' || currentPath === '') {
        const rootPath = routes.find((r) => r.path === '/')
        items.push({
          routeName: rootPath?.name || 'Home',
          routePath: rootPath?.path || '/'
        })
      } else {
        const currentRouteRelated = routes.find((r) => r.path === currentPath)
        if (currentRouteRelated) {
          items.push({
            routeName: currentRouteRelated.name,
            routePath: currentRouteRelated.path
          })
        } else {
          const idRoute = params?.id && currentPath.replace(params.id, ':id')
          if (idRoute) {
            const findRoute = routes.find((r) => r.path === idRoute)
            if (findRoute) {
              items.push({
                routeName: findRoute.name,
                routePath: findRoute.path.replace(':id', params.id)
              })
            }
          }
        }
      }
      pathArray.pop()
    }

    return items.reverse()
  }

  return (
    <Wrapper>
      {findItemsToShowOnBredCrumb(pathName, routes, params).map((item, ind) => (
        <li
          key={ind}
          className={
            item.routePath === pathName ||
            item.routePath ===
              location.pathname.replace(params?.id || '', ':id')
              ? 'active'
              : ''
          }
        >
          <Link to={item.routePath}>{item.routeName}</Link>
        </li>
      ))}
    </Wrapper>
  )
}

export default Breadcrumb
