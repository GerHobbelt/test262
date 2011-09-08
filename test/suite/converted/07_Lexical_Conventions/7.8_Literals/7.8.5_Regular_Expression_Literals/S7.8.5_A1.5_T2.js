// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegularExpressionFirstChar :: BackslashSequence :: \LineTerminator is incorrect
 *
 * @section: 7.8.5;
 * @path: 07_Lexical_Conventions/7.8_Literals/7.8.5_Regular_Expression_Literals/S7.8.5_A1.5_T2.js;
 * @description: Line Feed, with eval;
 */

//CHECK#1
try {      
   eval("/\\\u000A/").source;   
   $ERROR('#1.1: RegularExpressionFirstChar :: BackslashSequence :: \\Line Feed is incorrect. Actual: ' + (eval("/\\\u000A/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: BackslashSequence :: \\Line Feed is incorrect. Actual: ' + (e));
  }
}     
