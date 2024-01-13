function Register() {
  
  return (
    <>
      <div
        style={{ backgroundColor: "#979393", width: "100%", height: "100%" }}
      >
        <form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "400px",
            backgroundColor: "#8F8484",
            height: "400px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "250px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <input
              type="text"
              name="username"
              className="username"
              placeholder="Username"
              style={{ color: "#958E8E", borderStyle: "none", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="Password"
              name="password"
              className="password"
              placeholder="Password"
              style={{ color: "#958E8E", borderStyle: "none", height: "30px" }}
            />
          </div>
          <button
            style={{
              marginLeft: "5px",
              height: "30px",
              backgroundColor: "#E3CCBE",
              borderRadius: "5px",
              borderStyle: "none",
              color: "#695246",
            }}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
