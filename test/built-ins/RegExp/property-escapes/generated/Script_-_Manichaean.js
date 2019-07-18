// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Manichaean`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010AC0, 0x010AE6],
    [0x010AEB, 0x010AF6]
  ]
});
testPropertyEscapes(
  /^\p{Script=Manichaean}+$/u,
  matchSymbols,
  "\\p{Script=Manichaean}"
);
testPropertyEscapes(
  /^\p{Script=Mani}+$/u,
  matchSymbols,
  "\\p{Script=Mani}"
);
testPropertyEscapes(
  /^\p{sc=Manichaean}+$/u,
  matchSymbols,
  "\\p{sc=Manichaean}"
);
testPropertyEscapes(
  /^\p{sc=Mani}+$/u,
  matchSymbols,
  "\\p{sc=Mani}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010ABF],
    [0x010AE7, 0x010AEA],
    [0x010AF7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Manichaean}+$/u,
  nonMatchSymbols,
  "\\P{Script=Manichaean}"
);
testPropertyEscapes(
  /^\P{Script=Mani}+$/u,
  nonMatchSymbols,
  "\\P{Script=Mani}"
);
testPropertyEscapes(
  /^\P{sc=Manichaean}+$/u,
  nonMatchSymbols,
  "\\P{sc=Manichaean}"
);
testPropertyEscapes(
  /^\P{sc=Mani}+$/u,
  nonMatchSymbols,
  "\\P{sc=Mani}"
);
