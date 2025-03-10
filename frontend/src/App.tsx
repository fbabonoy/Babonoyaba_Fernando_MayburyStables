
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from './components/ui/navigation-menu'
import './App.css'

function App() {

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <Card title='Trail Riding' image='https://www.sundanceridingstable.com/wp-content/uploads/2021/06/5dc2b94d3d7cc82ffb7e204bd248360e-1.jpg'/> */}
    </>
  )
}



export default App
