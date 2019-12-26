'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactDOM = require('react-dom');
require('@babel/polyfill');
var ky = _interopDefault(require('ky'));
var removeMarkdown = _interopDefault(require('remove-markdown'));
var forimmer = require('forimmer');
var elasticlunr = _interopDefault(require('elasticlunr'));
var reactRouterDom = require('react-router-dom');
var htmdx = require('htmdx');
var innerText = _interopDefault(require('react-innertext'));
var reactRouter = require('react-router');
var Highlighter = _interopDefault(require('react-highlight-words'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// A type of promise-like that resolves synchronously and supports only one observer
const _Pact = /*#__PURE__*/(function() {
	function _Pact() {}
	_Pact.prototype.then = function(onFulfilled, onRejected) {
		const result = new _Pact();
		const state = this.s;
		if (state) {
			const callback = state & 1 ? onFulfilled : onRejected;
			if (callback) {
				try {
					_settle(result, 1, callback(this.v));
				} catch (e) {
					_settle(result, 2, e);
				}
				return result;
			} else {
				return this;
			}
		}
		this.o = function(_this) {
			try {
				const value = _this.v;
				if (_this.s & 1) {
					_settle(result, 1, onFulfilled ? onFulfilled(value) : value);
				} else if (onRejected) {
					_settle(result, 1, onRejected(value));
				} else {
					_settle(result, 2, value);
				}
			} catch (e) {
				_settle(result, 2, e);
			}
		};
		return result;
	};
	return _Pact;
})();

// Settles a pact synchronously
function _settle(pact, state, value) {
	if (!pact.s) {
		if (value instanceof _Pact) {
			if (value.s) {
				if (state & 1) {
					state = value.s;
				}
				value = value.v;
			} else {
				value.o = _settle.bind(null, pact, state);
				return;
			}
		}
		if (value && value.then) {
			value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
			return;
		}
		pact.s = state;
		pact.v = value;
		const observer = pact.o;
		if (observer) {
			observer(pact);
		}
	}
}

function _isSettledPact(thenable) {
	return thenable instanceof _Pact && thenable.s & 1;
}

// Asynchronously iterate through an object that has a length property, passing the index as the first argument to the callback (even as the length property changes)
function _forTo(array, body, check) {
	var i = -1, pact, reject;
	function _cycle(result) {
		try {
			while (++i < array.length && (!check || !check())) {
				result = body(i);
				if (result && result.then) {
					if (_isSettledPact(result)) {
						result = result.v;
					} else {
						result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
						return;
					}
				}
			}
			if (pact) {
				_settle(pact, 1, result);
			} else {
				pact = result;
			}
		} catch (e) {
			_settle(pact || (pact = new _Pact()), 2, e);
		}
	}
	_cycle();
	return pact;
}

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

// Asynchronously iterate through an object's values
// Uses for...of if the runtime supports it, otherwise iterates until length on a copy
function _forOf(target, body, check) {
	if (typeof target[_iteratorSymbol] === "function") {
		var iterator = target[_iteratorSymbol](), step, pact, reject;
		function _cycle(result) {
			try {
				while (!(step = iterator.next()).done && (!check || !check())) {
					result = body(step.value);
					if (result && result.then) {
						if (_isSettledPact(result)) {
							result = result.v;
						} else {
							result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
							return;
						}
					}
				}
				if (pact) {
					_settle(pact, 1, result);
				} else {
					pact = result;
				}
			} catch (e) {
				_settle(pact || (pact = new _Pact()), 2, e);
			}
		}
		_cycle();
		if (iterator.return) {
			var _fixup = function(value) {
				try {
					if (!step.done) {
						iterator.return();
					}
				} catch(e) {
				}
				return value;
			};
			if (pact && pact.then) {
				return pact.then(_fixup, function(e) {
					throw _fixup(e);
				});
			}
			_fixup();
		}
		return pact;
	}
	// No support for Symbol.iterator
	if (!("length" in target)) {
		throw new TypeError("Object is not iterable");
	}
	// Handle live collections properly
	var values = [];
	for (var i = 0; i < target.length; i++) {
		values.push(target[i]);
	}
	return _forTo(values, function(i) { return body(values[i]); }, check);
}

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var getJSON = function getJSON(filePath) {
  try {
    return Promise.resolve(ky.get(filePath).json());
  } catch (e) {
    return Promise.reject(e);
  }
};
var getFile = function getFile(filePath) {
  try {
    return Promise.resolve(ky.get(filePath).text());
  } catch (e) {
    return Promise.reject(e);
  }
};
var getHeaders = function getHeaders(filePath) {
  try {
    return Promise.resolve(ky.head(filePath).then(function (r) {
      return r.headers;
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
function join() {
  var parts = [];

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0, l = args.length; i < l; i++) {
    parts = parts.concat(args[i].split('/'));
  }

  var newParts = [];

  for (var _i = 0, _l = parts.length; _i < _l; _i++) {
    var part = parts[_i];
    if (!part || part === '.') continue;
    if (part === '..') newParts.pop();else newParts.push(part);
  }

  if (parts[0] === '') newParts.unshift('');
  return newParts.join('/') || (newParts.length ? '/' : '.');
}

var fetchDocuments =
/*#__PURE__*/
function (_fetchDocuments) {
  function fetchDocuments(_x, _x2) {
    return _fetchDocuments.apply(this, arguments);
  }

  fetchDocuments.toString = function () {
    return _fetchDocuments.toString();
  };

  return fetchDocuments;
}(function (rootPath, navbar) {
  try {
    var documentMap = {};

    var _temp6 = _forOf(Object.keys(navbar), function (title) {
      var _navbar$title = navbar[title],
          slug = _navbar$title.slug,
          children = _navbar$title.children,
          type = _navbar$title.type,
          path = _navbar$title.path;

      var _temp4 = function () {
        if (type === NavbarItemType.CATEGORY) {
          return Promise.resolve(fetchDocuments(rootPath, children)).then(function (subResult) {
            documentMap = _extends({}, documentMap, {}, subResult);
          });
        } else {
          var _temp7 = function _temp7() {
            var lastModified = _headers && _headers.get('last-modified');

            var lastModifiedTimestamp = -1;

            if (lastModified) {
              lastModifiedTimestamp = new Date(lastModified).getTime();
            }

            if (_document) {
              if (_document.lastModified === lastModifiedTimestamp) {
                documentMap[slug] = _document;
                return;
              }
            }

            var _temp = _catch(function () {
              return Promise.resolve(getFile(_docPath)).then(function (content) {
                documentMap[slug] = {
                  title: title,
                  content: content,
                  path: _docPath,
                  slug: slug,
                  headings: findHeadings(content),
                  lastModified: lastModifiedTimestamp
                };
                Promise.resolve().then(function () {
                  return localStorage.setItem(slug, JSON.stringify(documentMap[slug]));
                });
              });
            }, function () {
              documentMap[slug] = _document;
            });

            if (_temp && _temp.then) return _temp.then(function () {});
          };

          var _docPath = join(rootPath, path);

          var _document = JSON.parse(localStorage.getItem(slug));

          var _headers;

          var _temp8 = _catch(function () {
            return Promise.resolve(getHeaders(_docPath)).then(function (_getHeaders) {
              _headers = _getHeaders;
            });
          }, function () {});

          return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
        }
      }();

      if (_temp4 && _temp4.then) return _temp4.then(function () {});
    });

    return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {
      return documentMap;
    }) : documentMap);
  } catch (e) {
    return Promise.reject(e);
  }
});
var fetchNavbar = function fetchNavbar(path) {
  try {
    return Promise.resolve(getJSON(join(path, 'navbar.docs.json'))).then(buildNavbar);
  } catch (e) {
    return Promise.reject(e);
  }
};
var NavbarItemType;

(function (NavbarItemType) {
  NavbarItemType[NavbarItemType["CATEGORY"] = 0] = "CATEGORY";
  NavbarItemType[NavbarItemType["DOCUMENT"] = 1] = "DOCUMENT";
})(NavbarItemType || (NavbarItemType = {}));

function findHeadings(document) {
  var parts = document.split(/\n/g);
  var headings = [];
  var i = 0;

  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var part = _ref;

    if (part.trim()[0] === '#') {
      var size = 1;

      while (part[size] && part[size] === '#') {
        size++;
      }

      var text = removeMarkdown(part);
      text = text.trim();
      headings.push({
        size: size,
        text: text,
        raw: part,
        slug: i + "-" + slugify(text)
      });
      i++;
    }
  }

  return headings;
}
function buildNavbar(navbarJSON) {
  var navbar = {};

  for (var _i2 = 0, _Object$keys = Object.keys(navbarJSON); _i2 < _Object$keys.length; _i2++) {
    var title = _Object$keys[_i2];
    var entry = navbarJSON[title];

    if (typeof entry === 'object') {
      navbar[title] = {
        type: NavbarItemType.CATEGORY,
        children: buildNavbar(entry)
      };
    } else {
      var slug = slugify(entry);
      navbar[title] = {
        type: NavbarItemType.DOCUMENT,
        slug: slug,
        path: entry
      };
    }
  }

  return navbar;
}
function slugify(path) {
  var a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  var b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  var p = new RegExp(a.split('').join('|'), 'g');
  return path.toString().toLowerCase().replace(/.mdx/g, '').replace(/\s+/g, '-').replace(p, function (c) {
    return b.charAt(a.indexOf(c));
  }).replace(/&/g, '-and-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

var dokumentStore =
/*#__PURE__*/
forimmer.createStore({});
var loadNavBar =
/*#__PURE__*/
dokumentStore.createStoreAction(function (path) {
  try {
    return Promise.resolve(fetchNavbar(path)).then(function (navbar) {
      return function (draft) {
        draft.navbar = navbar;
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
});
var setCurrentDocument =
/*#__PURE__*/
dokumentStore.createStoreAction(function (currentDocument) {
  return Promise.resolve(function (draft) {
    draft.currentDocument = currentDocument;
  });
});
var loadDocuments =
/*#__PURE__*/
dokumentStore.createStoreAction(function (_ref) {
  var rootPath = _ref.rootPath,
      navbar = _ref.navbar;

  try {
    return Promise.resolve(fetchDocuments(rootPath, navbar)).then(function (documentMap) {
      return function (draft) {
        draft.documentMap = documentMap;
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
});

var index =
/*#__PURE__*/
elasticlunr(function () {
  this.addField('title');
  this.addField('content');
  this.setRef('id');
  this.saveDocument(true);
});
function addDocumentToIndex(doc) {
  index.addDoc({
    id: doc.slug,
    title: doc.title,
    content: doc.content
  });
}
function search(query) {
  return index.search(query, {
    title: {
      boost: 2
    },
    content: {
      boost: 1
    }
  }).map(function (result) {
    return {
      slug: result.ref,
      score: result.score
    };
  });
}

var docContextValue = {
  dokumentStore: dokumentStore,
  rootPath: './',
  componentList: undefined,
  search: search,
  title: '',
  htmdxOptions: {}
};
var docContext =
/*#__PURE__*/
React.createContext(docContextValue);

function useDocContext() {
  return React.useContext(docContext);
}

function Docs() {
  var _useDocContext$compon = useDocContext().componentList,
      SideBar = _useDocContext$compon.SideBar,
      Main = _useDocContext$compon.Main;
  return React.createElement("div", {
    className: "docs"
  }, React.createElement(reactRouterDom.HashRouter, null, React.createElement(SideBar, null), React.createElement(Main, null)));
}

function LastChanged(props) {
  return React.createElement("div", {
    className: "last-changed"
  }, React.createElement("div", null, "last changed: "), React.createElement("div", null, new Date(props.timestamp).toLocaleString()));
}

var hCount = 0;
var mdxContext =
/*#__PURE__*/
React.createContext({});
var components = {
  Demo: function Demo() {
    return React.createElement("h1", null, "This is a demo component");
  }
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (h) {
  components[h] = function (props) {
    var _React$useContext = React.useContext(mdxContext),
        currentDocument = _React$useContext.currentDocument;

    var check = props.children;

    if (check instanceof Array) {
      check = React.createElement('div', {
        children: props.children
      });
    }

    var text = React.isValidElement(check) ? innerText(check) : props.children;
    var heading = currentDocument.headings.find(function (heading) {
      return text.toString().includes(heading.text);
    });
    return React.createElement(h, {
      key: h + hCount++,
      id: heading && heading.slug,
      children: [React.createElement(React.Fragment, null, heading ? React.createElement(reactRouterDom.Link, {
        to: "" + heading.slug
      }, heading.text) : props.children)]
    });
  };
});
function DocumentRenderer(props) {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      _useDocContext$htmdxO = _useDocContext.htmdxOptions,
      htmdxOptions = _useDocContext$htmdxO === void 0 ? {
    components: {}
  } : _useDocContext$htmdxO,
      dokumentStore = _useDocContext.dokumentStore;

  var PreviousAndNext = componentList.PreviousAndNext;
  var Provider = mdxContext.Provider;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.documentMap, state.currentDocument];
  }),
      documentMap = _useStoreState[0],
      currentDocument = _useStoreState[1];

  React.useEffect(function () {
    var heading = document.getElementById(props.headingSlug);

    if (heading) {
      if (heading.parentElement.firstElementChild === heading) {
        document.querySelector('article').scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        heading.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [props.headingSlug, currentDocument]);
  var previous;
  var next;

  if (currentDocument) {
    var slugs = Object.keys(documentMap);
    var docIndex = slugs.indexOf(currentDocument.slug);

    if (docIndex > 0) {
      previous = documentMap[slugs[docIndex - 1]];
    }

    if (docIndex < slugs.length - 1) {
      next = documentMap[slugs[docIndex + 1]];
    }
  }

  return React.createElement(Provider, {
    value: {
      currentDocument: currentDocument
    }
  }, React.createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), React.createElement("div", null, htmdx.htmdx(currentDocument.content, React.createElement, _extends({}, htmdxOptions, {
    components: _extends({}, components, {}, htmdxOptions.components)
  }))), React.createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), currentDocument.lastModified > -1 && React.createElement(LastChanged, {
    timestamp: currentDocument.lastModified
  }));
}

function Nav() {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.navbar];
  }),
      navbar = _useStoreState[0];

  var NavLevel = useDocContext().componentList.NavLevel;
  return React.createElement("nav", null, React.createElement(NavLevel, Object.assign({}, {
    navbar: navbar
  })));
}

function SideBar() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      title = _useDocContext.title;

  var Nav = componentList.Nav,
      Search = componentList.Search,
      Branding = componentList.Branding,
      Recent = componentList.Recent;
  return React.createElement("aside", {
    className: "sidebar"
  }, React.createElement(Branding, null, title), React.createElement(Search, null), React.createElement(React.Suspense, {
    fallback: ""
  }, React.createElement(Nav, null)), React.createElement(React.Suspense, {
    fallback: ""
  }, React.createElement(Recent, null)));
}

function RenderArticle() {
  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList,
      dokumentStore = _useDocContext.dokumentStore;

  var DocumentRenderer = componentList.DocumentRenderer;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.documentMap, state.currentDocument || null];
  }),
      documentMap = _useStoreState[0];

  var _useParams = reactRouter.useParams(),
      slug = _useParams.slug,
      headingSlug = _useParams.headingSlug;

  React.useEffect(function () {
    if (documentMap[slug]) {
      setCurrentDocument(documentMap[slug]);
    } else {
      setCurrentDocument(Object.values(documentMap)[0]);
    }
  }, [slug]);
  return React.createElement(DocumentRenderer, {
    slug: slug,
    headingSlug: headingSlug
  });
}

function Main() {
  var Loading = useDocContext().componentList.Loading;
  return React.createElement("main", null, React.createElement("article", null, React.createElement(reactRouter.Switch, null, React.createElement(reactRouter.Route, {
    path: "/document/:slug?/:headingSlug?"
  }, React.createElement(React.Suspense, {
    fallback: React.createElement(Loading, null)
  }, React.createElement(RenderArticle, null))), React.createElement(reactRouter.Route, {
    path: "/"
  }, React.createElement(React.Suspense, {
    fallback: React.createElement(Loading, null)
  }, React.createElement(RenderArticle, null))))));
}

function useClearSearchOnLinkClicked(setSearchQuery) {
  React.useEffect(function () {
    var listener = function listener(event) {
      var target = event.target;

      while (target !== document.body) {
        if (target instanceof HTMLAnchorElement) {
          if (target.href.replace(window.location.href.replace(window.location.hash, ''), '')[0] === '#') {
            setSearchQuery('');
            return;
          }
        }

        target = target.parentElement;
      }
    };

    document.body.addEventListener('click', listener);
    return function () {
      document.body.removeEventListener('click', listener);
    };
  }, []);
}

function Search() {
  var SearchResults = useDocContext().componentList.SearchResults;

  var _React$useState = React.useState(''),
      searchQuery = _React$useState[0],
      setSearchQuery = _React$useState[1];

  var location = reactRouterDom.useLocation();
  React.useEffect(function () {
    setSearchQuery('');
  }, [location]);
  useClearSearchOnLinkClicked(setSearchQuery);
  return React.createElement("div", {
    className: "search"
  }, searchQuery.length > 0 && React.createElement(SearchResults, {
    searchQuery: searchQuery
  }), React.createElement("input", {
    type: "text",
    value: searchQuery,
    placeholder: "search...",
    onChange: function onChange(e) {
      return setSearchQuery(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Escape') {
        setSearchQuery('');
      }
    }
  }));
}

function useGetTo() {
  var _useDocContext = useDocContext(),
      rootPath = _useDocContext.rootPath;

  return function (doc) {
    var topHeading = doc && doc.headings[0] && doc.headings[0].size === 1 ? doc.headings[0] : undefined;
    return [join('/document', rootPath, doc.slug, topHeading ? topHeading.slug : ''), topHeading];
  };
}

function PreviousAndNext(props) {
  var previous = props.previous,
      next = props.next;
  var getTo = useGetTo();
  return React.createElement("div", {
    className: "previous-next"
  }, previous && React.createElement("div", {
    className: "previous"
  }, React.createElement("span", null, React.createElement(reactRouterDom.Link, {
    to: getTo(previous)[0]
  }, previous.title))), next && React.createElement("div", {
    className: "next"
  }, React.createElement("span", null, React.createElement(reactRouterDom.Link, {
    to: getTo(next)[0]
  }, next.title))));
}

function NavItem(props) {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      documentMap = _useStoreState[0];

  var document = documentMap[props.slug];
  var topHeading = document && document.headings[0] && document.headings[0].size === 1 ? document.headings[0] : undefined;
  return React.createElement("li", {
    className: "nav-item link"
  }, React.createElement(reactRouterDom.Link, {
    to: "" + props.path + (topHeading ? "/" + topHeading.slug : "")
  }, topHeading ? topHeading.text : props.children), document && React.createElement("ul", {
    className: "nav"
  }, document.headings.filter(function (heading, index) {
    return heading.size < 4 && (index > 0 || heading.size > 1);
  }).map(function (heading) {
    return React.createElement(NavItem, {
      key: heading.raw,
      path: props.path + "/" + heading.slug
    }, heading.text);
  })));
}

function NavLevel(props) {
  var navbar = props.navbar;

  var _useDocContext = useDocContext(),
      componentList = _useDocContext.componentList;

  var _useDocContext2 = useDocContext(),
      dokumentStore = _useDocContext2.dokumentStore;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      docMap = _useStoreState[0];

  var NavItem = componentList.NavItem,
      NavLevel = componentList.NavLevel;
  var titles = Object.keys(navbar);
  var docArray = Object.values(docMap);
  var prevDocument = docArray[0];
  var getTo = useGetTo();
  return React.createElement("ul", {
    className: "nav"
  }, titles.map(function (title) {
    var _navbar$title = navbar[title],
        type = _navbar$title.type,
        children = _navbar$title.children,
        slug = _navbar$title.slug;

    if (type === NavbarItemType.CATEGORY) {
      var next = docArray[docArray.indexOf(prevDocument) + 1];

      if (next && next.slug) {
        var _getTo = getTo(next),
            to = _getTo[0];

        return React.createElement("li", {
          className: "nav-item sub-nav",
          key: slug
        }, React.createElement(reactRouterDom.Link, {
          to: to
        }, title), React.createElement(NavLevel, Object.assign({}, {
          navbar: children
        })));
      } else {
        return React.createElement("li", {
          className: "nav-item sub-nav",
          key: slug
        }, React.createElement("div", {
          className: "nav-category"
        }, title), React.createElement(NavLevel, Object.assign({}, {
          navbar: children
        })));
      }
    } else {
      prevDocument = docMap[slug];
      return React.createElement(NavItem, {
        key: slug,
        path: '/document/' + slug,
        slug: slug
      }, title);
    }
  }));
}

function SearchResults(props) {
  var searchQuery = props.searchQuery;

  var _useDocContext = useDocContext(),
      search = _useDocContext.search,
      componentList = _useDocContext.componentList;

  var SearchResultsItem = componentList.SearchResultsItem;

  var _useDocContext2 = useDocContext(),
      dokumentStore = _useDocContext2.dokumentStore;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.documentMap];
  }),
      documentMap = _useStoreState[0];

  var result = search(searchQuery);
  return React.createElement("div", {
    className: 'search-results'
  }, React.createElement("h1", null, "Listing ", result.length, " document", result.length !== 1 ? 's' : '', " with search results for ", searchQuery, ":"), React.createElement("ul", null, result.map(function (r) {
    var doc = documentMap[r.slug];
    return React.createElement(SearchResultsItem, {
      doc: doc,
      searchQuery: searchQuery
    });
  })));
}

function getSentencesWithSearchResults(text, searchWords) {
  return text.split(/[.?!\n]/).filter(function (n) {
    return new RegExp("" + searchWords.join('|'), 'i').test(n);
  });
}

function SearchResultsItem(props) {
  var doc = props.doc,
      searchQuery = props.searchQuery;
  var getTo = useGetTo();
  return React.createElement("li", {
    key: doc.slug
  }, React.createElement("label", null, React.createElement(reactRouterDom.Link, {
    to: getTo(doc)[0]
  }, React.createElement(Highlighter, {
    highlightClassName: "search-highlight",
    searchWords: [searchQuery],
    autoEscape: true,
    textToHighlight: doc.title
  }))), getSentencesWithSearchResults(removeMarkdown(doc.content), [searchQuery]).map(function (item) {
    return React.createElement("pre", {
      key: item
    }, React.createElement(Highlighter, {
      highlightClassName: "search-highlight",
      searchWords: [searchQuery],
      autoEscape: true,
      textToHighlight: item
    }));
  }));
}

function Loading() {
  return React.createElement(React.Fragment, null, React.createElement("style", {
    type: "text/css"
  }, "\n                .loading {\n                    margin: 20px auto;\n                    margin-top: 50%;\n                    width: 40px;\n                    height: 40px;\n                    position: relative;\n                    -webkit-transform: rotateZ(45deg);\n                        transform: rotateZ(45deg);\n                }\n\n                .loading .cube {\n                float: left;\n                width: 50%;\n                height: 50%;\n                position: relative;\n                -webkit-transform: scale(1.1);\n                    -ms-transform: scale(1.1);\n                        transform: scale(1.1); \n                }\n                .loading .cube:before {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #333;\n                -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n                        animation: sk-foldCubeAngle 2.4s infinite linear both;\n                -webkit-transform-origin: 100% 100%;\n                    -ms-transform-origin: 100% 100%;\n                        transform-origin: 100% 100%;\n                }\n                .loading .cube2 {\n                -webkit-transform: scale(1.1) rotateZ(90deg);\n                        transform: scale(1.1) rotateZ(90deg);\n                }\n                .loading .cube3 {\n                -webkit-transform: scale(1.1) rotateZ(180deg);\n                        transform: scale(1.1) rotateZ(180deg);\n                }\n                .loading .cube4 {\n                -webkit-transform: scale(1.1) rotateZ(270deg);\n                        transform: scale(1.1) rotateZ(270deg);\n                }\n                .loading .cube2:before {\n                -webkit-animation-delay: 0.3s;\n                        animation-delay: 0.3s;\n                }\n                .loading .cube3:before {\n                -webkit-animation-delay: 0.6s;\n                        animation-delay: 0.6s; \n                }\n                .loading .cube4:before {\n                -webkit-animation-delay: 0.9s;\n                        animation-delay: 0.9s;\n                }\n                @-webkit-keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                } \n                }\n\n                @keyframes sk-foldCubeAngle {\n                0%, 10% {\n                    -webkit-transform: perspective(140px) rotateX(-180deg);\n                            transform: perspective(140px) rotateX(-180deg);\n                    opacity: 0; \n                } 25%, 75% {\n                    -webkit-transform: perspective(140px) rotateX(0deg);\n                            transform: perspective(140px) rotateX(0deg);\n                    opacity: 1; \n                } 90%, 100% {\n                    -webkit-transform: perspective(140px) rotateY(180deg);\n                            transform: perspective(140px) rotateY(180deg);\n                    opacity: 0; \n                }\n                }\n        "), React.createElement("div", {
    className: "loading"
  }, React.createElement("div", {
    className: "cube1 cube"
  }), React.createElement("div", {
    className: "cube2 cube"
  }), React.createElement("div", {
    className: "cube4 cube"
  }), React.createElement("div", {
    className: "cube3 cube"
  })));
}

function Branding(props) {
  return React.createElement("h1", null, props.children);
}

function Recent() {
  var _useDocContext = useDocContext(),
      dokumentStore = _useDocContext.dokumentStore;

  var _useStoreState = forimmer.useStoreState(dokumentStore, function (state) {
    return [state.currentDocument];
  }),
      currentDocument = _useStoreState[0];

  var _React$useState = React.useState(localStorage.getItem('recent-document') ? JSON.parse(localStorage.getItem('recent-document')) : []),
      recentDocuments = _React$useState[0],
      setRecentDocuments = _React$useState[1];

  React.useEffect(function () {
    if (currentDocument) {
      var index = recentDocuments.findIndex(function (_ref) {
        var document = _ref.document;
        return currentDocument.slug === document.slug;
      });

      if (index > -1) {
        recentDocuments.splice(index, 1);
      }

      recentDocuments.unshift({
        document: currentDocument,
        timestamp: Date.now()
      });
      setRecentDocuments(recentDocuments);
      localStorage.setItem('recent-document', JSON.stringify(recentDocuments));
    }
  }, [currentDocument]);
  var getTo = useGetTo();
  return React.createElement("div", {
    className: "recent"
  }, React.createElement("div", null, "recently viewed:"), React.createElement("ul", null, recentDocuments.map(function (_ref2) {
    var document = _ref2.document,
        timestamp = _ref2.timestamp;

    var _getTo = getTo(document),
        to = _getTo[0],
        heading = _getTo[1];

    return React.createElement("li", {
      key: heading.text + timestamp
    }, React.createElement("span", {
      className: "recent-time"
    }, new Date(timestamp).toLocaleString()), React.createElement(reactRouterDom.Link, {
      to: to
    }, heading.text));
  })));
}

var componentListValue = {
  DocumentRenderer: DocumentRenderer,
  NavItem: NavItem,
  NavLevel: NavLevel,
  Nav: Nav,
  SideBar: SideBar,
  Main: Main,
  Search: Search,
  PreviousAndNext: PreviousAndNext,
  SearchResults: SearchResults,
  SearchResultsItem: SearchResultsItem,
  Loading: Loading,
  Branding: Branding,
  LastChanged: LastChanged,
  Recent: Recent
};

var dokument = function dokument(container, optionsIn) {
  if (optionsIn === void 0) {
    optionsIn = {};
  }

  try {
    var options = _extends({
      rootPath: './',
      title: 'Documentation',
      htmdxOptions: _extends({}, optionsIn.htmdxOptions),
      navbarPath: ''
    }, optionsIn, {
      componentList: _extends({}, componentListValue, {}, optionsIn.componentList || {})
    });

    document.title = options.title;
    load(options);
    var Provider = docContext.Provider;
    ReactDOM.render(React.createElement(Provider, {
      value: _extends({}, docContextValue, {}, options)
    }, React.createElement(Docs, null)), container);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

var load = function load(options) {
  try {
    return Promise.resolve(loadNavBar(join(options.rootPath, options.navbarPath))).then(function () {
      return Promise.resolve(loadDocuments({
        navbar: dokumentStore.getCurrentState().navbar,
        rootPath: options.rootPath
      })).then(function () {
        Object.values(dokumentStore.getCurrentState().documentMap).forEach(function (doc) {
          addDocumentToIndex(doc);
        });
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

var defaultComponentList =
/*#__PURE__*/
_extends({}, componentListValue);

exports.defaultComponentList = defaultComponentList;
exports.dokument = dokument;
//# sourceMappingURL=dokument.js.cjs.development.js.map
