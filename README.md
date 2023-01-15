# Installation 

## First, check that it works with Javascript
```
mkdir ts-express
cd ts-express
npx express-generator
npm i 
DEBUG=ts-express:* npm start
```

## Second, migrate them into TypeScript
1. Rename all JavaScript file with *.ts
```
mv bin/www bin/www.ts
mv app.js app.ts 
mv routes/index.js routes/index.ts
mv routes/users.js routes/users.ts
```

2. Make config files for TypeScript project
```
mkdir built
touch tsconfig.json
```
Then write the following to tsconfig.json
```
{
    "compilerOptions": {
      "outDir": "./built",
      "allowJs": true,
      "target": "es5"
    },
    "include": ["./bin/www.ts", "./app.ts", "./routes/**/*"]
}
```
3. Replace start script in package.json with `npx ts-node ./bin/www.ts`

## Run
```
npm i -D typescript
npm i -D @types/node
DEBUG=ts-express:* npm start
```

## Git
```
echo "node_modules" > .gitignore
```

## References
1. https://expressjs.com/en/starter/generator.html
2. https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
3. https://github.com/TypeStrong/ts-node