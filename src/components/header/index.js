import React from "react";

import s from "./styles.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <i>Meteor</i>
        <i>opolis</i>
      </h1>
    </header>
  );
};

export default Header;
