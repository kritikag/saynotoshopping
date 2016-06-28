// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


let url = document.location.href;
let shoppingArr = ['asos.com','modcloth.com','macys.com','loft.com'];
let redirectLink = "http://www.brainybudget.com/content/large/no-more-spend-budget-meme.jpg";
let redirect;
shoppingArr.forEach(function(shoppingUrl){
    var urlMatch  = url.match(shoppingUrl);
    if(urlMatch!==null){
        redirect = true;
    }
});
if(redirect){
    window.location.href = redirectLink
}
