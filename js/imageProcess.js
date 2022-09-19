// render the image

// render the items in the canvas, playground like grass lanc
(function () {
  var resourceCache = {};
  var loading = [];
  var readyCallbacks = [];

  function load(urlOrArr) {
    if (urlOrArr instanceof Array) {
      /* 如果开发者传进来一个图片数组，循环访问每个值，然后调用我们的图片加载器 */
      urlOrArr.forEach(function (url) {
        _load(url);
      });
    } else {
      /* 如果开发者传进来的不是一个数组，那么就可以认为参数值是一个字符串，
       * 然后立即调用我们的图片加载器即可。
       */
      _load(urlOrArr);
    }
  }

  function _load(url) {
    if (resourceCache[url]) {
      /* 如果这个 URL 之前已经被加载了，那么它会被放进我们的资源缓存数组里面，
       * 然后直接返回那张图片即可。
       */
      return resourceCache[url];
    } else {
      /* 否则， 这个 URL 之前没被加载过而且在缓存里面不存在，那么我们得加载这张图片
       */
      var img = new Image();
      img.onload = function () {
        /* 一旦我们的图片已经被加载了，就把它放进我们的缓存，然后我们在开发者试图
         * 在未来再次加载这个图片的时候我们就可以简单的返回即可。
         */
        resourceCache[url] = img;
        /* 一旦我们的图片已经被加载和缓存，调用所有我们已经定义的回调函数。
         */
        if (isReady()) {
          readyCallbacks.forEach(function (func) {
            func();
          });
        }
      };

      /* 将一开始的缓存值设置成 false 。在图片的 onload 事件回调被调用的时候会
       * 改变这个值。最后，将图片的 src 属性值设置成传进来的 URl 。
       */
      resourceCache[url] = false;
      img.src = url;
    }
  }
// url here is the html tag:img content
  function get(url) {
    return resourceCache[url];
  }

  function isReady() {
    var ready = true;
    for (var k in resourceCache) {
      if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }

  function onReady(func) {
    readyCallbacks.push(func);
  }

  window.Resources = {
    load: load,
    get: get,
    onReady: onReady,
    isReady: isReady,
  };
})();
