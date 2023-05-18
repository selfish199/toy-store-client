import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result)

        Swal.fire({
          title: 'Success',
          text: 'Logged in successfully!',
          icon: 'success',
          toast: true,
          position: 'top-center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });


        navigate(from)
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        
        Swal.fire({
          title: 'Success',
          text: 'Logged in successfully!',
          icon: 'success',
          toast: true,
          position: 'top-center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        
        navigate(from)

      })
      .catch(error => {
        console.log(error.message)
        
        Swal.fire({
          title: 'Wrong user or password',
          text: 'please use right email and password',
          icon: 'error',
          toast: true,
          position: 'top-center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

      })
  }




  return (

    <div className="bg-stone-500">
      <div className="min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login to access to your products</p>
            <div>
              <button onClick={handleGoogleLogin} className="btn gap-2 btn-wide">
                <FaGoogle></FaGoogle>
                Button
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" name="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <p className="">Don`t have an account? <Link className="font-bold" to="/register">Please Register</Link></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn btn-primary" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;