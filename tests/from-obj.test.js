import { expect, test } from "vitest";

import { expectedOutput } from "./util";
import { js2yaml } from "..";

test("build yaml from object", () => {
  const data = {
    "- name": "test",
    things: {
      thing1: "thing1 str",
      thing2: "thing2 str",
      thing3: {
        "- even more depth": "thing3 str",
      },
    },
    additions: {
      addition1: "addition1 str",
      addition2: "addition2 str",
      addition3: {
        "- even more depth": "addition3 str",
      },
    },
  };

  const yaml = new js2yaml().build(data).toString();
  console.log(yaml);
  expect(yaml.trim()).toMatchInlineSnapshot(expectedOutput);
});
