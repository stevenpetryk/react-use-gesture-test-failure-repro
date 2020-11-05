# Error reproduction repo

This demonstrates how `@testing-library/react`'s `fireEvent` utility doesn't work with `react-use-gesture` 8.0.0.

I used Node v12.15.0, but it probably doesn't matter too much.

```
yarn install
yarn test
```

Then, to see it work in v7, you can do this:

```
yarn add react-use-gesture@7
yarn test
```
