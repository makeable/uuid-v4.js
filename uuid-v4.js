/*
======================================================
uuid-v4.js :: Random UUID (v4) Generator - Usage: UUID()
======================================================

Copyright (c) 2011 Matt Williams <matt@makeable.co.uk>. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.

THIS SOFTWARE IS PROVIDED BY MATT WILLIAMS ''AS IS'' AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL MATT WILLIAMS OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the
authors and should not be interpreted as representing official policies, either expressed
or implied, of Matt Williams.

*/

(function(){
  
  var dec2hex = [];
  for (var i=0; i<=15; i++) {
    dec2hex[i] = i.toString(16);
  }
  
  var UUID = function() {
    var uuid = '';
    for (var i=1; i<=36; i++) {
      if (i===9 || i===14 || i===19 || i===24) {
        uuid += '-';
      } else if (i===15) {
        uuid += 4;
      } else if (i===20) {
        uuid += dec2hex[(Math.random()*4|0 + 8)];
      } else {
        uuid += dec2hex[(Math.random()*15|0)];
      }
    }
    return uuid;
  };
  
  if (typeof exports !== 'undefined') {
    module.exports = UUID;
  } else {
    this.UUID = UUID;
  }
  
})(this);