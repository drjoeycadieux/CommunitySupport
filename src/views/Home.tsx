const Home = () => {
  return (
    <div className="Header">
      <header>
        <div className="w-full bg-gray-800 md:pt-20 md:pb-20 text-white">
          <div className="lg:max-w-5xl mx-auto md:px-4 p-4">
            <h3 id="two">
              <i class="fas fa-atom"></i> Help Center
            </h3>
            <br />
            <h2 id="one"> COVID-19 TRACKER COMMUNITY SUPPORT</h2>
            <h1 className="text-4xl font-bold">Hi, How we can help?</h1>

            <div className="alert-banner">
              <p className="mt-1">
                <strong> Learn </strong>
                How developers and businesses around the world are innovating
                with COVID-19 TRACKER products, tools, and programs.
              </p>
              <input
                id="tree"
                type="text"
                name="search"
                placeholder="Search.."
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
