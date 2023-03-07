import {Controller, Get, Route} from "@tsoa/runtime";

type Model = {
  items: [{
    createdAt?: Date|null;
  }];
}

type TestResult = {
    test: Model["items"][0];
}

@Route("/")
export default class TestController extends Controller {
  @Get("/")
  test(): TestResult {
    return { test: {
      createdAt: new Date()
      }};
  }
}
