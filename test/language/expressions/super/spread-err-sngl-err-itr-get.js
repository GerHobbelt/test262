// This file was procedurally generated from the following sources:
// - src/cases/spread/sngl-err-itr-get.hashes
// - src/cases/spread/error/super-call.hashes
/*---
description: Spread operator applied to the only argument when GetIterator fails (SuperCall)
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
    
    7.4.1 GetIterator ( obj, method )
    
    [...]
    3. Let iterator be Call(method,obj).
    4. ReturnIfAbrupt(iterator).

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
  throw new Test262Error();
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
