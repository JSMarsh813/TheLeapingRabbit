

/*----EdgefieldBreakfast Buy Now Button------*/

    /*<![CDATA[*/

    let shopifyScript= (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit(productID, productcomponent,) {
        var client = ShopifyBuy.buildClient({
          domain: 'leaping-rabbit-restaurant.myshopify.com',
          storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '7577322422421',
            node: document.getElementById('product-component-1657525451267'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {

      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
             
              "margin-left": "20px",
              "margin-bottom": "50px"
            },
            "text-align": "left"
          },
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#d8901c"
            },
            "background-color": "#f0a01f",
            ":focus": {
              "background-color": "#d8901c"
            },
            "border-radius": "10px",
            "padding-left": "10px",
            "padding-right": "10px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "contents": {
          "img": false,
          "button": false,
          "buttonWithQuantity": true,
          "title": false,
          "price": false
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
             
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "13px",
            
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#d8901c"
            },
            "background-color": "#f0a01f",
            ":focus": {
              "background-color": "#d8901c"
            },
            "border-radius": "10px",
            "padding-left": "10px",
            "padding-right": "10px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#d8901c"
            },
            "background-color": "#f0a01f",
            ":focus": {
              "background-color": "#d8901c"
            },
            "border-radius": "10px"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        },
        "contents": {
          "note": true
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#f0a01f",
            ":hover": {
              "background-color": "#d8901c"
            },
            ":focus": {
              "background-color": "#d8901c"
            }
          },
          "count": {
            "font-size": "13px"
          }
        }
      }
    },
          });
        });
      }
    })();
    /*]]>*/



/*----red flannel hash Buy Now Button------*/



/*<![CDATA[*/
(function () {
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
if (window.ShopifyBuy.UI) {
  ShopifyBuyInit();
} else {
  loadScript();
}
} else {
loadScript();
}
function loadScript() {
var script = document.createElement('script');
script.async = true;
script.src = scriptURL;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
script.onload = ShopifyBuyInit;
}
function ShopifyBuyInit() {
var client = ShopifyBuy.buildClient({
  domain: 'leaping-rabbit-restaurant.myshopify.com',
  storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
});
ShopifyBuy.UI.onReady(client).then(function (ui) {
  ui.createComponent('product', {
    id: '7577383796885',
    node: document.getElementById('product-component-1657524967092'),
    moneyFormat: '%24%7B%7Bamount%7D%7D',
    options: {
"product": {
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "calc(25% - 20px)",
      "margin-left": "20px",
      "margin-bottom": "50px"
    },
    "text-align": "left"
  },
  "button": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    ":hover": {
      "background-color": "#d8901c"
    },
    "background-color": "#f0a01f",
    ":focus": {
      "background-color": "#d8901c"
    },
    "border-radius": "10px",
    "padding-left": "10px",
    "padding-right": "10px"
  },
  "quantityInput": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px"
  }
},
"contents": {
  "img": false,
  "button": false,
  "buttonWithQuantity": true,
  "title": false,
  "price": false
},
"text": {
  "button": "Add to cart"
}
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
},
"modalProduct": {
"contents": {
  "img": false,
  "imgWithCarousel": true,
  "button": false,
  "buttonWithQuantity": true
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0px",
      "margin-bottom": "0px"
    }
  },
  "button": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    ":hover": {
      "background-color": "#d8901c"
    },
    "background-color": "#f0a01f",
    ":focus": {
      "background-color": "#d8901c"
    },
    "border-radius": "10px",
    "padding-left": "10px",
    "padding-right": "10px"
  },
  "quantityInput": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px"
  }
},
"text": {
  "button": "Add to cart"
}
},
"option": {},
"cart": {
"styles": {
  "button": {
    "font-size": "13px",
    "padding-top": "14.5px",
    "padding-bottom": "14.5px",
    ":hover": {
      "background-color": "#d8901c"
    },
    "background-color": "#f0a01f",
    ":focus": {
      "background-color": "#d8901c"
    },
    "border-radius": "10px"
  }
},
"text": {
  "total": "Subtotal",
  "button": "Checkout"
},
"contents": {
  "note": true
}
},
"toggle": {
"styles": {
  "toggle": {
    "background-color": "#f0a01f",
    ":hover": {
      "background-color": "#d8901c"
    },
    ":focus": {
      "background-color": "#d8901c"
    }
  },
  "count": {
    "font-size": "13px"
  }
}
}
},
  });
});
}
})();
/*]]>*/

/* chicken fried steak */


/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585693073557',
        node: document.getElementById('product-component-1658019180793'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* bunny bun pancakes */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585693139093',
        node: document.getElementById('product-component-1658019555729'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* Be Square*/
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585693204629',
        node: document.getElementById('product-component-1658019668828'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


/* Easter Bunny's delight*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585693270165',
        node: document.getElementById('product-component-1658019746964'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*  Sunshine Bread*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585694384277',
        node: document.getElementById('product-component-1658019850230'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();

/*]]>*/

/*irish soda bread french toast */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585694679189',
        node: document.getElementById('product-component-1658019897713'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* salmon gravlax */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585694744725',
        node: document.getElementById('product-component-1658019937732'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* biscuit & gravy  */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585694843029',
        node: document.getElementById('product-component-1658020010242'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* fruit salad */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585694941333',
        node: document.getElementById('product-component-1658020059060'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*  toast */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695006869',
        node: document.getElementById('product-component-1658020097857'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
        
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*yukon gold hash browns or roasted red potato */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695072405',
        node: document.getElementById('product-component-1658024580496'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* freshly baked cinnamon roll or pastry  */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695203477',
        node: document.getElementById('product-component-1658024689271'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* Rabbit food */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695236245',
        node: document.getElementById('product-component-1658024732732'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* Pumpkin Bread Pudding */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695301781',
        node: document.getElementById('product-component-1658024780265'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*  Tuxedo Cake */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695334549',
        node: document.getElementById('product-component-1658024833562'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*Caramelized Banana Split */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695367317',
        node: document.getElementById('product-component-1658024888334'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*  Single Scoop of 'Double Rainbow' Ice Cream*  */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695826069',
        node: document.getElementById('product-component-1658024933759'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/*  blue pines */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585695858837',
        node: document.getElementById('product-component-1658024972418'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* tropical limeade */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696252053',
        node: document.getElementById('product-component-1658025024762'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* fruited lemonade */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696317589',
        node: document.getElementById('product-component-1658025064542'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* americano */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696350357',
        node: document.getElementById('product-component-1658025164602'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* espresso */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696383125',
        node: document.getElementById('product-component-1658025210302'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* café latte */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696514197',
        node: document.getElementById('product-component-1658025339929'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
/* mocha  */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696874645',
        node: document.getElementById('product-component-1658025368394'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* cappuccino */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696907413',
        node: document.getElementById('product-component-1658025430821'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
/*  chai latte */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585696940181',
        node: document.getElementById('product-component-1658025465464'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* cold brew */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585697005717',
        node: document.getElementById('product-component-1658025511652'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* coffee & decaf */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585697038485',
        node: document.getElementById('product-component-1658025545825'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

/* Organic hot tea*/

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585697071253',
        node: document.getElementById('product-component-1658025581116'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
/* hot chocolate */

/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'leaping-rabbit-restaurant.myshopify.com',
      storefrontAccessToken: '9369fda920ca8d98880d3d380e3d1654',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7585697104021',
        node: document.getElementById('product-component-1658025613059'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px",
        "padding-left": "10px",
        "padding-right": "10px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#d8901c"
        },
        "background-color": "#f0a01f",
        ":focus": {
          "background-color": "#d8901c"
        },
        "border-radius": "10px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f0a01f",
        ":hover": {
          "background-color": "#d8901c"
        },
        ":focus": {
          "background-color": "#d8901c"
        }
      },
      "count": {
        "font-size": "13px"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/