# JS 2 YAML

This is a small package that converts pre-formatted JS objects or JSON files to YAML strings.

## Usage

```js
const jsYaml = new js2yaml();
const fileData = jsYaml.build(obj).toString();
fs.writeFileSync(filePath, fileData);
```

Or, to use a JSON file -

```js
const jsYaml = new js2yaml();
const fileData = await jsYaml.buildFromFile(path);
fs.writeFileSync(filePath, fileData.toString());
```
