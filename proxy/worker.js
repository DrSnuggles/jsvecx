/*
Simple Proxy by DrSnuggles using a cloudflare worker
*/

addEventListener('fetch', event => {
  event.respondWith( handleRequest(event.request) )
})

async function handleRequest(req) {
  var src = req.headers.get("Origin")
  src = (typeof src !== "string") ? "" : src
  src = src.toLowerCase()

  // Make the headers mutable by re-constructing the Request.
  //req = new Request( req )
  //req.headers.set('Access-Control-Allow-Origin', '*')

  var dst = new URL(req.url)
  dst = unescape( unescape( dst.search.substr(1) ) )

  // filter... the overlay <img src="..." has null
  if (src.indexOf("https://drsnuggles.github.io") === 0 || src.indexOf("https://mstest.net") === 0) {
    // allowed
    var res = await fetch(dst, req)

    // error handling
    switch (res.status) {
      case 302: // temp. moved => follow
        dst = res.headers.get("location")
        res = await fetch(dst, req)
        break
      default:
        break
    }

    // Make the headers mutable by re-constructing the Response.
    res = new Response(res.body, res)
    return res
  } else {
    // not allowed
    return new Response("The use of this proxy is restricted",{status: 403, statusText: 'Forbidden', headers: {"Content-Type": "text/html", "src": src}})
  }
}
