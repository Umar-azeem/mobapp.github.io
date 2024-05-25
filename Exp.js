import React from "react";
import graphic from "../img/graphic.png";
export function Exp() {
  return (
    <>
      <section className="bg-slate-200 ">
        <div className="container bg-slate-200  py-10">
          <div className="flex flex-col center justify-center">
            <h6 className="text-gray-500 text-center text-sm">FEATURES</h6>
            <h1 className="text-purple-800 text-4xl text-center font-bold">Do more with our app</h1>
          </div>
        </div>
        <div className="container bg-slate-200 gap-2">
          <ul className="nav nav-tab nav-justified flex justify-center">
            <li className="py-5 px-16 text-gray-500 text-2xl font-samibold hover:border-t-4 hover:border-pink-400 hover:text-purple-900 hover:bg-white before:bg-white"><a className="nav" href="#Communicate">Communicate</a></li>
            <li className="py-4 px-16 text-gray-500 text-2xl font-samibold hover:border-t-4 hover:border-pink-400 hover:text-purple-900 hover:bg-white before:bg-white"><a className="nav" href="#Scheduling">Scheduling</a></li>
            <li className="py-4 px-16 text-gray-500 text-2xl font-samibold hover:border-t-4 hover:border-pink-400 hover:text-purple-900 hover:bg-white before:bg-white"><a className="nav" href="#Messages">Messages</a></li>
            <li className="py-4 px-16 text-gray-500 text-2xl font-samibold hover:border-t-4 hover:border-pink-400 hover:text-purple-900 hover:bg-white before:bg-white"><a className="nav" href="#Live Chat">Live Chat</a></li>
          </ul>
          </div>
          <div className="container flex justify-center mb-16 " id="Communicate">
            <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>
            <div className="  bg-white"> 
              <h1 className="text-purple-800 text-4xl  px-2 py-4" >Communicate with ease</h1>
              <p className="text-pink-500  text-xl px-2 py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
          {/*<div className="container flex justify-center " id="Scheduling">
            <div className="  bg-white"> 
              <h1 className="text-purple-800 text-4xl  px-2 py-4" >Scheduling when you want</h1>
              <p className="text-pink-500  text-xl px-2 py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills.  </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>

            <div className="container flex justify-center " id="Messages">
            <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>
            <div className="  bg-white"> 
              <h1 className="text-purple-800 text-4xl  px-2 py-4" >Realtime Messaging service</h1>
              <p className="text-pink-500  text-xl px-2 py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
            </div>
            <div className="container flex justify-center " id="Live Chat">
            <div className="  bg-white"> 
              <h1 className="text-purple-800 text-4xl  px-2 py-4" >Live chat when you needed/h1>
              <p className="text-pink-500  text-xl px-2 py-4">Uniquely underwhelm premium outsourcing with proactive leadership skills. </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque<br></br>pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.<br></br> Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat<br></br> volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor, </p>
              <p className="text-gray-500  text-l px-2 font-samibold py-4">malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum<br></br> blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin.<br></br> Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id<br></br> turpis. Proin aliquet vulputate aliquam. </p>
              </div>
              <div className=" bg-white flex align-middle"><img src={graphic} className="px-4 py-4 flex"></img></div>

          </div>
        </div>
        </div> 
  */}
        </div>
      </section>
    </>
  );
}