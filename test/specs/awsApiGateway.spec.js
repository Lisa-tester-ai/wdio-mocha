const request = require("supertest")("https://8dpkztfg57.execute-api.ap-southeast-2.amazonaws.com");
const expect = require("chai").expect;

describe("GET /test and POST /test", function () {
  it("GET with api key then returns all 3 pets", async function () {
    request.set('x-api-key', 'bGKhXvJf543YQytSYpBNp4YEIChGlrbJ3UkM76pP');
    request.set('Accept', 'application/json');
    const response = await request.get("/test");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(3);
  });

  it("GET without api key then returns forbidden message", async function () {
    request.set('Accept', 'application/json');
    const response = await request.get("/test");

    const attributes = response.body.data.attributes;
    expect(attributes).to.include.keys("message");
    expect(attributes.message).to.eql("Forbidden");
  });

  it("POST with api key then returns succusee message", async function () {
    request.set('x-api-key', 'bGKhXvJf543YQytSYpBNp4YEIChGlrbJ3UkM76pP');
    request.set('Accept', 'application/json');
    request.send({ type: "Test", price: "23" });
    const response = await request.post("/test");

    const attributes = response.body.data.attributes;
    expect(attributes).to.include.keys("message");
    expect(attributes.message).to.eql("Success");
  });
});