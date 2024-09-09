import { expectedOutput } from "./util";
import { js2yaml } from "../index";
import { test, expect } from "vitest";

test("build yaml from file", async () => {
  const data = await import("./data.json", { with: { type: "json" } });
  const yaml = new js2yaml().build(data.default).toString();
  expect(yaml.trim()).toMatchInlineSnapshot(expectedOutput);
});
