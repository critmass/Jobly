import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it
    // in the header.  This has been provided to show you another way to pass the token.
    // You are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get") ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async applyToJob(username, jobId) {

    let res = await this.request(
      `users/${username}/jobs/${jobId}`,
      {},
      "post"
    )

    return res.applied === jobId
  }

  static async registerNewUser(data) {
    let res = await this.request( 'auth/register', data, "post" )
    this.token = res.token
    return await this.getUser(data.username)
  }

  static async login( username, password ) {

    try{
      let res = await this.request(
        `auth/token`,
        { username, password },
        "post"
      )

      this.token  = res.token

      return await this.getUser(username)
    }
    catch (err){
      return err
    }
  }

  static async updateUser(username, userUpdate) {
    const result = await this.request(`users/${username}`, {...userUpdate}, "patch")
    if( result.user ){
      this.token = null
    }
    return result.user
  }

  static async deleteUser(username) {
    const result = await this.request(`users/${username}`, {}, "delete")
    if( result.deleted == username ){
      this.token = null
    }
    return result
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi