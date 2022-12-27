import { CookiesProvider } from "react-cookie";

// OWN COMPONENTS
import Navigation from "components/global/Navigation/Navigation";
import SideMenu from 'components/global/SideMenu/SideMenu';
import DashboarLayout from 'components/lib/layouts/Dashboard.layout';
import Editor from 'components/lib/editor/Editor';




function App() {
  return (
    <div className="App">
      <CookiesProvider>

        <Navigation />

        <DashboarLayout
          sideMenu={<SideMenu />}>
          <Editor />
        </DashboarLayout>

      </CookiesProvider>
    </div>
  );
}

export default App;
