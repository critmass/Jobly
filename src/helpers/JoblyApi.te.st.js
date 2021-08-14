import jwt from "jsonwebtoken"
import JoblyApi from "./JoblyApi";


describe("Testing JoblyApi", () => {

    let newUserToken;

    it("should be able to get a list of companies from the backend", async () => {
        const res = await JoblyApi.request("companies")
        expect(res.companies).not.toBeUndefined()
    })

    it("should be able to get a list of jobs from the backend", async () => {
        const res = await JoblyApi.request("jobs")
        expect(res.jobs).not.toBeUndefined()
    })

    it("should be able to register", async () => {
        newUserToken = await JoblyApi.registerNewUser({
            username:"newUser",
            firstName:"First",
            lastName:"Last",
            email:"email@email.com",
            password:"password"
        })

        expect(jwt.decode(newUserToken).username).toBe("newUser")
        expect(jwt.decode(newUserToken).isAdmin).toBe(false)
    })

    it("should be able to login", async () => {
        const userToken = await JoblyApi.login("testuser", "password")

        expect(jwt.decode(userToken).username).toBe("testuser")

    })

    it("should be able to handle a failed login gracefully", async () => {
        const result = await JoblyApi.login("notAuser", "notapassword")
        expect(result).toContain("Invalid username/password")
    })

    it("should be able to update user data", async () => {
        JoblyApi.token = newUserToken
        const userInfo = await JoblyApi.updateUser(
            "newUser",
            {firstName:"Second", lastName:"Penultimate"},
        )
        expect(userInfo.firstName).toBe("Second")
        expect(userInfo.lastName).toBe("Penultimate")
        expect(userInfo.email).toBe("email@email.com")
    })

    it("should be able to delete the user", async () => {
        JoblyApi.token = newUserToken
        const result = await JoblyApi.deleteUser("newUser")
        expect(result.deleted).toBe("newUser")
    })
})
