// This file was procedurally generated from the following sources:
// - src/cases/spread/mult-iter.hashes
// - src/cases/spread/default/super-call.hashes
/*---
description: Spread operator following other arguments with a valid iterator (SuperCall)
es6id: 12.3.5.1
features: [Symbol.iterator]

info: >
    12.3.6.1 Runtime Semantics: ArgumentListEvaluation
    
    ArgumentList : ... AssignmentExpression
    
    1. Let list be an empty List.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let spreadObj be GetValue(spreadRef).
    4. Let iterator be GetIterator(spreadObj).
    5. ReturnIfAbrupt(iterator).
    6. Repeat
       a. Let next be IteratorStep(iterator).
       b. ReturnIfAbrupt(next).
       c. If next is false, return list.
       d. Let nextArg be IteratorValue(next).
       e. ReturnIfAbrupt(nextArg).
       f. Append nextArg as the last element of list.

    SuperCall : super Arguments
    
    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]
---*/
var iter = {};
iter[Symbol.iterator] = function() {
  var callCount = 3;
  return {
    next: function() {
      callCount += 1;
      return { done: callCount === 6, value: callCount };
    }
  };
};


var callCount = 0;

class Test262ParentClass {
  constructor() {
    assert.sameValue(arguments.length, 5);
    assert.sameValue(arguments[0], 1);
    assert.sameValue(arguments[1], 2);
    assert.sameValue(arguments[2], 3);
    assert.sameValue(arguments[3], 4);
    assert.sameValue(arguments[4], 5);
    callCount += 1;
  }
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(1, 2, 3, ...iter);
  }
}

new Test262ChildClass();
assert.sameValue(callCount, 1);
