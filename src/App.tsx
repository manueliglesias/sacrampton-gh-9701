import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Amplify, DataStore, Hub } from "aws-amplify";
import { default as awsConfig } from "./aws-exports";

import { Asset, Package, User } from "./models";

Amplify.configure(awsConfig);

async function initData() {
  const packages = await DataStore.query(Package);

  for (let i of Array.from({ length: 5 - packages.length }, (_, k) => k)) {
    const name = `package${i + 1}`;

    await DataStore.save(new Package({ name }));
  }

  const assets = await DataStore.query(Asset);

  for (let i of Array.from({ length: 5 - assets.length }, (_, k) => k)) {
    const name = `asset${i + 1}`;

    await DataStore.save(new Asset({ name }));
  }

  const users = await DataStore.query(User);

  for (let i of Array.from(
    { length: 5 - users.length },
    (_, k) => users.length + k
  )) {
    const name = `user${i + 1}`;

    await DataStore.save(
      new User({
        name,
        asset: assets[i],
        assetName: assets[i].name,
        package: packages[i],
        packageName: packages[i].name,
      })
    );
  }
}

async function updateUser() {
  let [firstUser] = await DataStore.query(User);

  firstUser = User.copyOf(firstUser, (d) => {
    d.name = `${d.name.split("_")[0]}_${Date.now()}`;
  });

  await DataStore.save(firstUser);
}

function App() {
  useEffect(() => {
    let resolve: (value: void | PromiseLike<any>) => void;

    const removeListener = Hub.listen("datastore", ({ payload: { event } }) => {
      if (event === "ready") {
        resolve();
      }
    });

    (async function () {
      await DataStore.start();
      await new Promise((r) => (resolve = r));
      await initData();
    })();

    return () => {
      removeListener();
      DataStore.clear();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={updateUser}>Update user</button>
      </header>
    </div>
  );
}

export default App;
