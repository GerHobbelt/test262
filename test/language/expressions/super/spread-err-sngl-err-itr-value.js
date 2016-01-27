// This file was procedurally generated from the following sources:
// - src/cases/spread/sngl-err-itr-value.hashes
// - src/cases/spread/error/super-call.hashes
/*---
description: Spread operator applied to the only argument when IteratorValue fails (SuperCall)
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
    
    7.4.4 IteratorValue ( iterResult )
    
    1. Assert: Type(iterResult) is Object.
    2. Return Get(iterResult, "value").
    
    7.3.1 Get (O, P)
    
    [...]
    3. Return O.[[Get]](P, O).

    SuperCall : super Arguments
    
    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]
---*/
var iter = {};
var poisonedValue = Object.defineProperty({}, 'value', {
  get: function() {
    throw new Test262Error();
  }
});
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return poisonedValue;
    }
  };
};


class Test262ParentClass {
  constructor() {}
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super(...iter);
  }
}

assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
