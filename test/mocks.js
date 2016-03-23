var nock = require('nock');

var exports = module.exports = {};

var PROJECT_ID = 'central-station-staging';

exports.cleanMocks = function() {
  nock.cleanAll();
};

exports.disableNetConnect = function() {
  nock.disableNetConnect();
};

exports.start = function() {
  nock.cleanAll();
  nock.disableNetConnect();
};

///// MOCK LOGIN /////
exports.mockLogin = function() {
  nock('https://accounts.google.com:443', {"encodedQueryParams":true})
  .post('/o/oauth2/token')
  .reply(200, {"access_token":"ya29.qQL1X9bKpDz2rc-uspPBeQZ-BN55cy5fp4CJwO7-g18yBdtoNc5S7gyGCZ2XJUPrbWE","token_type":"Bearer","expires_in":3600}, { 'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Fri, 18 Mar 2016 03:02:16 GMT',
  'content-disposition': 'attachment; filename="json.txt"; filename*=UTF-8\'\'json.txt',
  'set-cookie': [ 'NID=77=o9DSdeZ8KEK7GOxq3lkCDjWhhJQCRt468ES1jan1nGrmfKmWK0uevMAlet6bV1c6N5_nGY4XLvYM4bKuoL3ijtzKLPkGIas2TyC45D7AfAwFEpxK0kOjqLxie4l5NypG;Domain=.google.com;Path=/;Expires=Sat, 17-Sep-2016 03:02:16 GMT;HttpOnly' ],
  p3p: 'CP="This is not a P3P policy! See https://support.google.com/accounts/answer/151657?hl=en for more info."',
  'x-frame-options': 'SAMEORIGIN',
  'x-xss-protection': '1; mode=block',
  server: 'GSE',
  'alternate-protocol': '443:quic,p=1',
  'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
  'accept-ranges': 'none',
  vary: 'Accept-Encoding',
  connection: 'close' });
};

///// MOCK EMPTY FIND /////
exports.mockFindEmpty = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/runQuery')
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Fri, 18 Mar 2016 03:02:16 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
};

///// MOCK CREATE SUCCESS /////
exports.mockCreateSuccess = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/commit')
    .reply(200, "0a320807122e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a04557365721080808080eddb8b0a", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Fri, 18 Mar 2016 13:43:54 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
};

///// MOCK FIND USER /////
exports.mockFindUser1 = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/runQuery')
    .reply(200, "0ab501080112770a750a2e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a04557365721080808080f8898c0a12150a046e616d65220d8a010a4a75616e205061626c6f12210a05656d61696c22188a01156a706469617a76617a406d63706c7573612e636f6d12090a036167652202101922360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b1204557365721880808080f8898c0a0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Fri, 18 Mar 2016 13:53:00 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
};

///// MOCK DESTROY ALL USERS /////
exports.mockDestroyUser1 = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Mon, 21 Mar 2016 17:46:45 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
}

////// MOCK LOGIN FOR FILTERS  /////

exports.loginForFilters = function(){

}



/////  MOCK FIND CLIENT WITH NO RESULTS  /////

exports.mockFindClientNoResults = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a3b1a080a06436c69656e74222f0a2d0801122912270a071205656d61696c10051a1a8a01176e6f744578697374656e74456d61696c41646472657373")
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:32 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
}

/////  MOCK CREATE 3 ACLs  /////

exports.mockCreate3Acls = function(){
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125422520a0712050a0341434c12140a056d6f64656c220b8a0106436c69656e74780112150a0870726f706572747922098a010466696e647801121a0a0a61636365737354797065220c8a01074558454355544578012802")
    .reply(200, "0a31080e122d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2c208", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:33 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125622540a0712050a0341434c12140a056d6f64656c220b8a0106436c69656e74780112170a0870726f7065727479220b8a01067570646174657801121a0a0a61636365737354797065220c8a01074558454355544578012802")
    .reply(200, "0a31080e122d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809df99e0b", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:33 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125622540a0712050a0341434c12140a056d6f64656c220b8a0106436c69656e74780112170a0870726f7065727479220b8a01066372656174657801121a0a0a61636365737354797065220c8a01074558454355544578012802")
    .reply(200, "0a31080e122d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8dbce08", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:33 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
}

/////  MOCK FIND ACLS WITH MODEL = 'Client'  /////

exports.mockFindAclsWithModelClient = function(){
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a271a050a0341434c221e0a1c0801121812160a0712056d6f64656c10051a098a0106436c69656e74")
    .reply(200, "0a8130080112740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2c20812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809b90c40812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef99ca0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8dbce0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cdd70812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effddb0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080bed8dc0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809de3800912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c09c820912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8db8e0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d98b8f0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7900912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef8e930912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d9d5960912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa960912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cd970912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086889a0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8a69b0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effd9b0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b59e0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e8809f0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809de3800a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e894810a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d98b8f0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086a18f0a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7900a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bd3930a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c0fa930a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809fb0970a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cd970a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effd9b0a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c0889d0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d99f9e0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e8809f0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809b90c40a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080bed8dc0a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c09c820b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2820b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809b90840b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8db8e0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d98b8f0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7900b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef8e930b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa960b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cd970b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effd9b0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080bed89c0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809df99e0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7422350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c18808080809df99e0b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:34 GMT',
    'content-disposition': 'attachment',
    vary: 'X-Origin, Origin,Accept-Encoding',
    'content-type': 'application/x-protobuf',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'SAMEORIGIN',
    'x-xss-protection': '1; mode=block',
    server: 'GSE',
    'alternate-protocol': '443:quic,p=1',
    'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
    'accept-ranges': 'none',
    connection: 'close' });
}

/////  MOCK FIND ACLS WITH PROPERTY = 'find'  /////

exports.mockFindAclsWithPropertyFind = function(){
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a281a050a0341434c221f0a1d0801121912170a0a120870726f706572747910051a078a010466696e64")
  .reply(200, "0a9110080112740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2c20812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa960912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b59e0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e8809f0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d98b8f0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7900a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c0889d0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d99f9e0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e8809f0a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809b90c40a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809b90840b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef8e930b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf4950b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa960b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effd9b0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7422350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080effd9b0b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Tue, 22 Mar 2016 20:22:35 GMT',
  'content-disposition': 'attachment',
  vary: 'X-Origin, Origin,Accept-Encoding',
  'content-type': 'application/x-protobuf',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'x-xss-protection': '1; mode=block',
  server: 'GSE',
  'alternate-protocol': '443:quic,p=1',
  'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
  'accept-ranges': 'none',
  connection: 'close' });
}
