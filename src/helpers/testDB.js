const testDB = {
    users: [
        {
            username: "testuser",
            lastName: "User",
            firstName: "Test",
            isAdmin: false,
            email: "joel@joelburton.com",
            password: "password",
            applications: []
        },
        {
            username: "testadmin",
            firstName: "Test",
            lastName: "Admin",
            email: "joel@joelburton.com",
            password: "password",
            isAdmin: true,
            applications: []
        }
    ],
    jobs: [
        {
            id: 1,
            title: "Job1",
            salary: 1,
            equity: 1,
            companyHandle: "comp1"
        },
        {
            id: 2,
            title: "Job2",
            salary: 2,
            equity: 2,
            companyHandle: "comp1"
        },
        {
            id: 3,
            title: "Job3",
            salary: 3,
            equity: 3,
            companyHandle: "comp2"
        },
    ],
    companies: [
        {
            handle: "comp1",
            name: "Company 1",
            description: "Company",
            numEmployees: 1,
            logoUrl: "https://www.glasgowchamberofcommerce.com/media/5834/company-shop-group-2.jpg"
        },
        {
            handle: "comp2",
            name: "Company 2",
            description: "Company",
            numEmployees: 2,
            logoUrl: "https://www.glasgowchamberofcommerce.com/media/5834/company-shop-group-2.jpg"
        }
    ]
}

export default testDB