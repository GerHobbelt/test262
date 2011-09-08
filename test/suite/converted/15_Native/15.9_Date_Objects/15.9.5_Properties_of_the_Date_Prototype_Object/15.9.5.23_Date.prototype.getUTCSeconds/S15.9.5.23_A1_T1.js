// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getUTCSeconds" has { DontEnum } attributes
 *
 * @section: 15.9.5.23;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.23_Date.prototype.getUTCSeconds/S15.9.5.23_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.getUTCSeconds;
if(x === 1)
  Date.prototype.getUTCSeconds = 2;
else
  Date.prototype.getUTCSeconds = 1;
if (Date.prototype.getUTCSeconds === x) {
  $ERROR('#1: The Date.prototype.getUTCSeconds has not the attribute ReadOnly');
}

