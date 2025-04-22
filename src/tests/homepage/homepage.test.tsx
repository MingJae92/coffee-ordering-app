import { describe } from "vitest"
import Homepage from "../../src/pages/homepage"

describe("Homepage loads", async()=>{
    return render(<Homepage/>)
})