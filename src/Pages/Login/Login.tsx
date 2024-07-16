import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#f8f9fb]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white  dark:border-white">
            <div className="p-1 space-y-4 md:space-y-6 sm:p-8">
              <center>
                <img src="ec.jpg" width={150} alt="" />
              </center>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="emails"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="rabby@gmail.com"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Mot de passe <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <Link
                      to="/Mdpoublier"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Mot de passe oublié?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex  items-center gap-2">
                    <input type="checkbox" id="remember-me" />
                    <label
                      htmlFor="remember-me"
                      className="text-[15px] cursor-pointer"
                    >
                      Se souvenir de moi
                    </label>
                  </div>
                  <div></div>
                </div>
                
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 bg-[#0476e8] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600  dark:focus:ring-primary-800"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-center">Se connecter</span>
                    </div>
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login