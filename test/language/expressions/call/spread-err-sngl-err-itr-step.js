// This file was procedurally generated from the following sources:
// - src/cases/spread/sngl-err-itr-step.hashes
// - src/cases/spread/error/call-expr.hashes
/*---
description: Spread operator applied to the only argument when IteratorStep fails (CallExpression)
es6id: 12.3.4.1
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
    
    7.4.5 IteratorStep ( iterator )
    
    1. Let result be IteratorNext(iterator).
    2. ReturnIfAbrupt(result).
    
    7.4.2 IteratorNext ( iterator, value )
    
    1. If value was not passed, then
       a. Let result be Invoke(iterator, "next", « »).
    [...]
    3. ReturnIfAbrupt(result).

    CallExpression : MemberExpression Arguments
    
    [...]
    9. Return EvaluateDirectCall(func, thisValue, Arguments, tailCall).
    
    12.3.4.3 Runtime Semantics: EvaluateDirectCall
    
    1. Let argList be ArgumentListEvaluation(arguments).
    [...]
    6. Let result be Call(func, thisValue, argList).
    [...]
---*/
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new Test262Error();
    }
  };
};


assert.throws(Test262Error, function() {
  (function() {}(...iter));
});
