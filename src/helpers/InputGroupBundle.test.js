import { render } from "@testing-library/react";
import InputGroupBundle from "./InputGroupBundle";

describe("Test InputGroupBundle", () => {
    it("renders", () => {
        render(
            <InputGroupBundle
                type="text"
                name="test"
                value=""
                onChange={() => " "}
            />
        )
    })
})