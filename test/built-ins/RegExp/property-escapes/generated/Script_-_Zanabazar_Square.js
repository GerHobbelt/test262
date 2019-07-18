// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Zanabazar_Square`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011A00, 0x011A47]
  ]
});
testPropertyEscapes(
  /^\p{Script=Zanabazar_Square}+$/u,
  matchSymbols,
  "\\p{Script=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\p{Script=Zanb}+$/u,
  matchSymbols,
  "\\p{Script=Zanb}"
);
testPropertyEscapes(
  /^\p{sc=Zanabazar_Square}+$/u,
  matchSymbols,
  "\\p{sc=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\p{sc=Zanb}+$/u,
  matchSymbols,
  "\\p{sc=Zanb}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0119FF],
    [0x011A48, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Zanabazar_Square}+$/u,
  nonMatchSymbols,
  "\\P{Script=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\P{Script=Zanb}+$/u,
  nonMatchSymbols,
  "\\P{Script=Zanb}"
);
testPropertyEscapes(
  /^\P{sc=Zanabazar_Square}+$/u,
  nonMatchSymbols,
  "\\P{sc=Zanabazar_Square}"
);
testPropertyEscapes(
  /^\P{sc=Zanb}+$/u,
  nonMatchSymbols,
  "\\P{sc=Zanb}"
);
