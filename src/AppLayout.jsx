import Header from "./Header";
import Loader from "./Loader";

import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col h-screen">
      {isLoading && <Loader />}

      <Header />

      <div className="flex-grow">
        {/* <main className="mx-auto max-w-3xl"> */}
        <main className="h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
