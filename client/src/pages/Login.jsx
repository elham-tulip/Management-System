import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter your email and password");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            const token = response.data.token;

            if (rememberMe) {
                localStorage.setItem("token", token);
            } else {
                sessionStorage.setItem("token", token);
            }

            localStorage.setItem(
                "user",
                JSON.stringify({
                    id: response.data._id,
                    name: response.data.name,
                    email: response.data.email,
                    role: response.data.role,
                    division: response.data.division,
                    year: response.data.year,
                })
            );

            console.log("Login successful:", response.data);
            navigate("/dashboard");


            
        } catch (error) {
            if (error.response) {
                setError(
                    error.response.data.message || "Login failed"
                );
            } else {
                setError("Unable to connect to the server");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="w-[600px] h-[700px] bg-white rounded-[10px] flex flex-col items-center">

                
                <div className="mt-[40px]">
                    <h1 className="text-2xl font-bold text-[#003087]">
                        Logoipsum
                    </h1>
                </div>

            
                <div className="mt-[40px] text-center">
                    <h2 className="text-2xl font-semibold">
                        Welcome
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Please login here
                    </p>
                </div>

                
                <form
                    onSubmit={handleLogin}
                    className="w-[445px] mt-[40px]"
                >

                    
                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-[56px] border border-gray-300 rounded-[10px] px-4 outline-none focus:border-[#003087]"
                        />

                    </div>

                    
                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full h-[56px] border border-gray-300 rounded-[10px] px-4 outline-none focus:border-[#003087]"
                        />

                    </div>

    
                    <div className="flex items-center gap-[10px] mb-6">

                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={(e) =>
                                setRememberMe(e.target.checked)
                            }
                            className="w-4 h-4"
                        />

                        <label htmlFor="remember" className="text-sm">
                            Remember Me
                        </label>

                    </div>

                    
                    {error && (
                        <p className="text-red-500 text-sm mb-4">
                            {error}
                        </p>
                    )}

                
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-[445px] h-[56px] flex items-center justify-center rounded-[10px] gap-[10px] p-[20px] bg-[#003087] text-white disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;
