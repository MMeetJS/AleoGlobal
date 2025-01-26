import "../styles/Form.css";
import { useEffect } from "react";

import React, { useState } from "react";

const Form = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const [ani, setAni] = useState();
  return (
    <section id="form">
      <div className="alert-form" style={ani}>
        Form Submitted ✅
      </div>
      <iframe
        src=""
        style={{ display: "none" }}
        name="hiddenConfirm"
        id="hiddenConfirm"
        onload="confirmsub()"
        title="something"
      ></iframe>

      <h2>Form</h2>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQVpGK2PeIrbmMMAklcdI7DwgQ_PFoVWe_9yNhRh78P7TAMA/formResponse"
        method="post"
        target="hiddenConfirm"
        onSubmit={function () {
          setAni({ translate: "-10%" });
          setTimeout(() => {
            setAni({});
            window.location.href = "/";
          }, 2000);
        }}
      >
        <div className="form">
          <div className="input-box">
            <label htmlFor="fullname">
              Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="entry.548131040"
              id="fullname"
              placeholder="Type you name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="entry.1484287095"
              id="email"
              placeholder="Type your E-mail"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="project-name">
              Project Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="entry.205945588"
              id="project-name"
              placeholder="Enter Project Name"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="twitter-input">
              Twitter<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="url"
              name="entry.1639433750"
              id="twitter-input"
              placeholder="Enter Twitter link"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="cat-input">
              Category<span style={{ color: "red" }}>*</span>
            </label>
            <select name="entry.902611457" id="cat">
              <option value="Defi">Defi</option>
              <option value="Game">Game</option>
              <option value="Launchpad">Launchpad</option>
              <option value="Meme">Meme</option>
              <option value="Nft">Nft</option>
              <option value="Nft Market">Nft Market</option>
              <option value="Wallet">Wallet</option>
              <option value="Infrastructure">Infrastructure</option>

            </select>
          </div>
          <div className="input-box">
            <label htmlFor="description-input">
              Description<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="entry.493743708"
              id="description-input"
              placeholder="Description"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="discord-input">Discord Server</label>
            <input
              type="url"
              name="entry.1532643005"
              id="discord-input"
              placeholder="Enter Discord link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="telegram-input">Telegram</label>
            <input
              type="url"
              name="entry.351714122"
              id="telegram-input"
              placeholder="Enter Telegram link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="github-input">Github</label>
            <input
              type="url"
              name="entry.619986386"
              id="github-input"
              placeholder="Enter Github link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="medium-input">Medium</label>
            <input
              type="url"
              name="entry.786333254"
              id="medium-input"
              placeholder="Enter Medium link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="whitepaper-input">Whitepaper</label>
            <input
              type="url"
              name="entry.1116344642"
              id="whitepaper-input"
              placeholder="Enter Whitepaper link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="funding-input">Funding</label>
            <input
              type="text"
              name="entry.705915972"
              id="funding-input"
              placeholder="Enter Your Funing Amount"
            />
          </div>
          <div className="input-box">
            <label htmlFor="website-input">Website</label>
            <input
              type="url"
              name="entry.1972612492"
              id="website-input"
              placeholder="Enter Website link"
            />
          </div>
          <div className="input-box">
            <label htmlFor="more-input">Anything More</label>
            <input
              type="text"
              name="entry.87444122"
              id="more-input"
              placeholder="Any extra info to provide"
            />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Form;
