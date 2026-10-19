import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.mjs";
test("collapses separators into one hyphen", () => assert.equal(slugify("Hello, World!"), "hello-world"));
test("trims leading and trailing junk", () => assert.equal(slugify("  Draft #2!  "), "draft-2"));
test("single word unchanged", () => assert.equal(slugify("Invoice"), "invoice"));
