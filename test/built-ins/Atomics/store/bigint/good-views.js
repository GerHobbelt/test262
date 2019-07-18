// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.store
description: Test Atomics.store on arrays that allow atomic operations.
includes: [testAtomics.js, testBigIntTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, BigInt, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/
// Make it interesting - use non-zero byteOffsets and non-zero indexes.
// In-bounds boundary cases for indexing
const sab = new SharedArrayBuffer(1024);
const ab = new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 2);

testWithBigIntTypedArrayConstructors(function(TA) {
  const view = new TA(sab, 32, 20);
  const control = new TA(ab, 0, 2);

  for (let val of [10n, -5n, 12345n, 123456789n, BigInt('33'), {
    valueOf: () => 33n
  }, BigInt(undefined)]) {
    assert.sameValue(
      Atomics.store(view, 3, val),
      BigInt(val),
      'Atomics.store(view, 3, val) returns BigInt(val)'
    );

    control[0] = val;

    assert.sameValue(
      view[3],
      control[0],
      'The value of view[3] equals the value of `control[0]` (val)'
    );
  }

  testWithAtomicsInBoundsIndices(function(IdxGen) {
    let Idx = IdxGen(view);
    view.fill(0n);
    Atomics.store(view, Idx, 37n);
    assert.sameValue(Atomics.load(view, Idx), 37n, 'Atomics.load(view, Idx) returns 37n');
  });
});
