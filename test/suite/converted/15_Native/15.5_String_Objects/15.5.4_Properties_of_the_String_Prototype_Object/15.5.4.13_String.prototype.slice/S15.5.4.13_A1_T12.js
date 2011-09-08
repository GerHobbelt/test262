// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T12.js;
 * @description: Arguments are objects, and instance is string.
 * First object have overrided valueOf function and toString function, that return exception.
 * Second object have overrided valueOf function, that return exception;
 */

var __obj = {valueOf:function(){return {};}, toString:function(){throw "instart";}};
var __obj2 = {valueOf:function(){throw "inend";}};
var __str = new String("ABB\u0041BABAB");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    try {
      var x = slice(__obj, __obj2);
      $FAIL('#1: "var x = slice(__obj,__obj2)" lead to throwing exception');
    } catch (e) {
      if (e!=="instart") {
        $ERROR('#1.1: Exception === "instart". Actual: '+e);
      }
    }
}
//
//////////////////////////////////////////////////////////////////////////////
