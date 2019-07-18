// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Newa`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x01145B
  ],
  ranges: [
    [0x011400, 0x011459],
    [0x01145D, 0x01145E]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Newa}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Newa}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Newa}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Newa}"
);
testPropertyEscapes(
  /^\p{scx=Newa}+$/u,
  matchSymbols,
  "\\p{scx=Newa}"
);
testPropertyEscapes(
  /^\p{scx=Newa}+$/u,
  matchSymbols,
  "\\p{scx=Newa}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01145A,
    0x01145C
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0113FF],
    [0x01145F, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Newa}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Newa}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Newa}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Newa}"
);
testPropertyEscapes(
  /^\P{scx=Newa}+$/u,
  nonMatchSymbols,
  "\\P{scx=Newa}"
);
testPropertyEscapes(
  /^\P{scx=Newa}+$/u,
  nonMatchSymbols,
  "\\P{scx=Newa}"
);
