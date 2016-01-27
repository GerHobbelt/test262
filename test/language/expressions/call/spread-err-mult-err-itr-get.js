// This file was procedurally generated from the following sources:
// - src/cases/spread/mult-err-itr-get.hashes
// - src/cases/spread/error/call-expr.hashes
/*---
description: Spread operator following other arguments when GetIterator fails (CallExpression)
es6id: 12.3.4.1
features: [Symbol.iterator]

info: >
    12.3.6.1 Runtime Semantics: ArgumentListEvaluation
    
    ArgumentList : ArgumentList , ... AssignmentExpression
    
    1. Let precedingArgs be the result of evaluating ArgumentList.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let iterator be GetIterator(GetValue(spreadRef) ).
    4. ReturnIfAbrupt(iterator).
    
    7.4.1 GetIterator ( obj, method )
    
    [...]
    3. Let iterator be Call(method,obj).
    4. ReturnIfAbrupt(iterator).

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
  throw new Test262Error();
};


assert.throws(Test262Error, function() {
  (function() {}(0, ...iter));
});
