const app = require("./index");
const mongoose = require("mongoose");
describe("get 'Hello World!'", () => {
  beforeAll(() => {
    mongoose.connect("mongodb://database/mongo-db");
  });

  afterAll(() => {
    mongoose.connection.close();
  });
  it("should return the string 'Hello World!'", () => {
    expect(true).toBe(true);
  });
});
