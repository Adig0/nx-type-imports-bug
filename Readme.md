Reproduction repo for [nrwl/nx#31263](https://github.com/nrwl/nx/issues/31263)

The [type-only import in `myapp/src/main.ts`](./apps/myapp/src/main.ts) results in the dependency react being [included in the generated package.json file](./dist/apps/myapp/package.json) produced by `generatePackageJson: true` while building myapp.
