import { LogControllerTestCase } from "../log_controller_test_case";
export default class ActionTests extends LogControllerTestCase {
    identifier: string;
    fixtureHTML: string;
    "test default event"(): Promise<void>;
    "test bubbling events"(): Promise<void>;
    "test non-bubbling events"(): Promise<void>;
    "test nested actions"(): Promise<void>;
    "test global actions"(): Promise<void>;
    "test multiple actions"(): Promise<void>;
}
