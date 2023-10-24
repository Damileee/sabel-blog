import Input from "../forms/Input";

const SignInForm = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <p>Welcome Back, please login below</p>
      <div>
        <div>
          <Input 
          label="Email Address" 
          type="email" 
          className="input-field" 
          placeholder=""
          />
        </div>
        <div>
            <Input
            label="Password"
            type="password"
            className="input-field"
            placeholder=""
            />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;