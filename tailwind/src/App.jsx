

function App() {
  return (
    <main className="h-screen px-40 py-10 bg-slate-950">
      <div className="h-full m-auto bg-white text-gray-950">
        <h1 className="font-bold text-5xl font-serif pl-14 pt-10 ">W. </h1>
        <h2 className=" font-thin  text-right mt-0 p-10 ">Home  New   Popular Trending Categories</h2>

        <div className=" flex gap-20 flex-row justify-start px-40">
          <div className="flex flex-col flex-1">

            <img src="./pexels-steve-johnson-3437923.jpg" className=" flex-row h-60"></img>
            <div className="flex flex-row">
              <h1 className=" w-1/3 font-bold text-5xl p-5 flex-1">The Bright Future of Web 3.0?</h1>
              <div className="flex-row flex-1">
                <p className="pl-8 p-5 w-full" > we dive into the evolution of the web that claims to put the power of the plathforms backinto the hands of the people .but is it reallyfulfilling its promise?</p>

                <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black text-black" type="submit">
                  READMore
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-black  p-5" >
            <h1 className="font-bold pt-2 text-4xl text-orange-400" > NEW </h1>
            <h2 className="font-bold pt-2 text-xl text-white">Hydrogen vs Electric cars</h2>
            <p className=" font-thin text-white" >will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr></hr>
            <h2 className="font-bold pt-2 text-xl text-white">Hydrogen vs Electric cars</h2>
            <p className=" font-thin text-white" >will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr></hr>
            <h2 className="font-bold pt-2 text-xl text-white">Hydrogen vs Electric cars</h2>
            <p className=" font-thin text-white" >will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>


        </div>


        <div className="flex flex-row p-10 ">

          <div className="flex flex-row w-1/3 pt-5">


            <img src="./pexels-athena-2582937.jpg" className=" size-32"></img>
            <div className="flex-row pl-5">
              <h1 className="font-bold text-5xl text-gray-500">01</h1>
              <h3 className="flex-col font-light "> Reviving Retro PC</h3>
              <p className="flex-col font-light  text break-before-column"> what happen when old PCs are given newer update?</p>
            </div>
          </div>


          <div className="flex flex-row p-5 w-1/3">

            <img src="./pexels-harsch-shivam-2007647.jpg" className=" size-32"></img>
            <div className="flex-row pl-5">
              <h1 className="font-bold text-5xl text-gray-500">02</h1>
              <h3 className="flex-col font-light "> Top 10 Laptops of 2022</h3>
              <p className="flex-col font-light  text break-before-column"> our best picks for various needs nd budgets</p>
            </div>

          </div>
          <div className="flex flex-row p-5 w-1/3">

            <img src="./pexels-garrett-morrow-1337247.jpg" className=" size-32"></img>
            <div className="flex-row pl-5">
              <h1 className="font-bold  text-5xl text-gray-500">03</h1>
              <h3 className="flex-col font-light "> Growth Of Gaming </h3>
              <p className="flex-col font-light  text break-before-column"> How the Pandamic has sparked fresh Opportunities </p>
            </div>

          </div>
        </div>
      </div>

    </main>


  )
}
export default App
