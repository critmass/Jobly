import JoblyApi from "./JoblyApi";

let newUserToken;


describe("Testing JoblyApi", () => {

    it("should be able to get a list of companies from the backend", async () => {
        const res = await JoblyApi.request("companies")
        expect(res.companies).not.toBeUndefined()
    })

    it("should be able to get a list of jobs from the backend", async () => {
        const res = await JoblyApi.request("jobs")
        expect(res.jobs).not.toBeUndefined()
    })

    it("should be able to register", async () => {
        const user = await JoblyApi.registerNewUser({
            username:"newUser",
            firstName:"First",
            lastName:"Last",
            email:"email@email.com",
            password:"password"
        })

        newUserToken = JoblyApi.token

        expect(user.username).toBe("newUser")
        expect(user.firstName).toEqual("First")
        expect(user.lastName).toEqual("Last")
        expect(user.email).toEqual("email@email.com")
        expect(user.isAdmin).toBeFalsy()


    })

    it("should be able to login", async () => {
        const user = await JoblyApi.login("testuser", "password")

        expect(user.username).toBe("testuser")
        expect(user.firstName).toEqual("Test")
        expect(user.lastName).toEqual("User")
        expect(user.email).toEqual("joel@joelburton.com")
        expect(user.isAdmin).toBeFalsy()

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
