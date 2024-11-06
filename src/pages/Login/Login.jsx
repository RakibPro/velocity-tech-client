const Login = () => {
    return (
        <section>
            <div className='hero my-36'>
                <div className='hero-content flex-col'>
                    <div className='card bg-base-100 w-full lg:w-[600px] shrink-0 shadow-[0_0_6px_rgba(0,0,0,0.1)] rounded'>
                        <h3 className='text-3xl text-center mt-10 uppercase font-semibold'>
                            Login
                        </h3>
                        <form className='card-body mb-10'>
                            <div className='form-control'>
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    className='input input-bordered focus:outline-none rounded mb-5'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='input input-bordered focus:outline-none rounded mb-1'
                                    required
                                />
                                <label className='label'>
                                    <a
                                        href='#'
                                        className='label-text-alt link link-hover'
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <input
                                type='submit'
                                value='Login'
                                className='mt-4 w-full bg-[#303030] text-white hover:bg-primary py-3 rounded duration-300 transition-all cursor-pointer uppercase'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
