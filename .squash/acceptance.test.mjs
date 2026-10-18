import { test } from "node:test";
import assert from "node:assert/strict";
import { extractInitials } from "./initials.mjs";

test("double space keeps both initials", () => assert.equal(extractInitials("Mary  Smith"), "MS"));
test("leading space keeps both initials", () => assert.equal(extractInitials(" John Doe"), "JD"));
test("normal name", () => assert.equal(extractInitials("Ada Lovelace"), "AL"));
test("single name", () => assert.equal(extractInitials("Cher"), "C"));
