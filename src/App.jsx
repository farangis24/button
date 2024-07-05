// import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/home";
// import { MainLayout } from "./layout/main-layout";
// import { About } from "./pages/about/about";
// // nested routing
// import { Blog } from "./pages/about/components/blog";
// import { Info } from "./pages/about/components/info";
// import { Users } from "./pages/about/components/users";
import React from "react";
import { Button } from "./components/ui/button";
import { Icon } from "./assets/icon";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <Button
        className={"button"}
        startIcon={<Icon />}
        variant="primary"
        type="submit"
      >
        Obuna bo'ling!
      </Button>
      <Button className={"button"} variant="secondary" type="follow">
        Follow
      </Button>
      <Button
        className={"button"}
        endIcon={<Icon />}
        variant="thirdary"
        type="push"
      >
        Push
      </Button>
      <Button className={"button"} variant="fourth" type="submit">
        open
      </Button>
      <Button className={"button"} variant="five" type="close">
        close
      </Button>
    </>
  );
}

export default App;
