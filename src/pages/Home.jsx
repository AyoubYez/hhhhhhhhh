import React from "react";
import "./style/web page.css";

function Home() {
  return (
    <div>
      <header>
        <img src="./assets/nest_marketing.svg" alt="Nest Marketing Logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mens">Men's</a>
          </li>
          <li>
            <a href="/womens">Women's</a>
          </li>
          <li>
            <a href="/kids">Kid's</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/add-product" className="add_product">
              Add Product
            </a>
          </li>
        </ul>
      </header>
      <main>
        <div className="nest_description container">
          <h1>
            With <span className="highlight">nest</span> reduce the <br />
            COD problems using <span className="highlight">BLF</span>
          </h1>
          <p>
            BLF stands for Black List Filter, a solution that helps you filter
            your clients based on their risk ratio.
          </p>
          <a href="/test-bfl">Test BLF</a>
        </div>
      </main>
    </div>
  );
}

export default Home;
