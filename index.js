// TODO: add jsdoc

export class json2yaml {
  constructor(indentation = 2) {
    this.indentation = indentation;
    this.yamlArray = new Array();
  }

  build(obj) {
    this.#buildYamlRecursive(obj, 0, this.yamlArray);
    return this;
  }

  async buildFromFile(path) {
    // Read file and build yaml
    const data = await import(path, { with: { type: "json" } });
    this.#buildYamlRecursive(data, 0, this.yamlArray);
    return this;
  }

  toString() {
    return this.yamlArray.join("");
  }

  #buildYamlRecursive(data, level, yamlArray) {
    if (!Array.isArray(yamlArray)) {
      yamlArray = [];
    }
    Object.entries(data).forEach(([key, value]) => {
      yamlArray.push(`${this.indent(level)}${key}: `);
      if (typeof value === "object" && value !== null) {
        yamlArray.push("\n");
        buildYamlRecursive(value, level + 1, yamlArray);
      } else {
        yamlArray.push(`${value}\n`);
      }
    });
  }

  indent(level) {
    const spaces = " ".repeat(this.indentation);
    return spaces.repeat(level);
  }
}
