import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="bg-white text-black p-5 mx-auto w-full">
      <div className="text-start mb-2 text-4xl w-full">
        <h1>
          jefferson <b>ding</b>
        </h1>
      </div>
      <div className="flex gap-5 w-full">
        <div>
          <h2>
            <b>me</b> AT <b>jdi</b> DOT <b>ng</b>
          </h2>

          <div className="my-4">
            <h2 className="text-2xl font-bold">current</h2>
            <ul>
              <li>
                founder <b>@</b> jaimy.ai
              </li>
              <li>
                b.s.e in computer engineering <b>@</b> university of
                pennsylvania c.o. 2027
              </li>
              <li>
                b.s in economics, conc. finance <b>@</b> wharton c.o. 2027
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-bold">prev</h2>
            <ul>
              <li>
                software <b>@</b> shades.news
              </li>
              <li>
                backend <b>@</b> penn labs
              </li>
              <li>
                software <b>@</b> datagrade
              </li>
              <li>
                cybersecurity intern <b>@</b> mydware inc.
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-bold">links</h2>
            <ul>
              <li>
                <a href="https://github.com/jeofo">github</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/dingjefferson">linkedin</a>
              </li>
              <li>
                <a href="https://jeofo.substack.com/">substack</a>
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-bold">contact</h2>
            <div className="bg-gray-100 w-full p-4 mt-2 rounded font-mono text-xs whitespace-pre">
              {`-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEZ66uqRYJKwYBBAHaRw8BAQdA3rO6UOG2a5pUXD4rc5/48R26YpcMsXKyZD4N
vRwHqRu0J0plZmZlcnNvbiBEaW5nIDxtYWlsQGplZmZlcnNvbmRpbmcuY29tPoiW
BBMWCgA+AhsDBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAFiEEDNRUlE2WXPfA
zY3SbWq5hD6AzaMFAmeurxcCGQEACgkQbWq5hD6AzaM82wD6A/cHzEWao3h1GXya
OMBODr3ZmTNIc5TXCj7mpsmuKuYBAIu45+hMQGC1+WKggWejPbO3avJWe1QbNJes
m9vgE9sAtCVKZWZmZXJzb24gRGluZyA8dHlkaW5nMjAwNEBnbWFpbC5jb20+iJAE
ExYIADgWIQQM1FSUTZZc98DNjdJtarmEPoDNowUCZ66vFwIbAwULCQgHAgYVCgkI
CwIEFgIDAQIeAQIXgAAKCRBtarmEPoDNo//GAP9TvWhuVB4xvRsHI9eV+fiPtRjf
M0xgwGSTZOqHOnmQbwD8DZqyPAIZE0DLHMIi9MMEfLjxhsS2phoFR8kmJCgXJQO0
J0plZmZlcnNvbiBEaW5nIDx0eWRpbmcyMDA0QG91dGxvb2suY29tPoiQBBMWCAA4
FiEEDNRUlE2WXPfAzY3SbWq5hD6AzaMFAmeuryICGwMFCwkIBwIGFQoJCAsCBBYC
AwECHgECF4AACgkQbWq5hD6AzaOUbAD/ct2Gx2FcXnw+azknXmE0ZAtBcdF5bzux
05tJZTCsvZEA+wai4I2tBBy1+Ja1d6utrUQK6j4M7cw3uBsTWPEd2gQBuDgEZ66u
qRIKKwYBBAGXVQEFAQEHQPus6EaeW/xJ9ES+I75+eiGZ4HsAwLZzjW+irN49yvc2
AwEIB4h4BBgWCgAgFiEEDNRUlE2WXPfAzY3SbWq5hD6AzaMFAmeurqkCGwwACgkQ
bWq5hD6AzaO3FQEA4trMy8SLo8JyRACY59advi0lF2275xg+fTRle4EOI9QA/1bq
/KuULZ7oHkaU8DP1Z7eVYSzHT6t3paLU9qd80/oM=M15y
-----END PGP PUBLIC KEY BLOCK-----`}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-black mt-10 pt-5 text-center">
        <p>© {new Date().getFullYear()} jefferson ding. all rights reserved.</p>
        <p className="text-xs">
          built with{" "}
          <span className="text-2xl relative bottom-[-2.8px]">🎔</span> using
          typescript
        </p>
        <p className="text-xs text-center">
          last updated: {new Date(1750505370000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default App;
