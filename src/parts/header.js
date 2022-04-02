import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            StayCation
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Browse by
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Stories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="/">
                  Agents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
