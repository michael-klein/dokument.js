import { createContext, useContext, createElement, useState, useRef, useEffect, isValidElement, Fragment } from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import { Store, useStoreState } from 'pullstate';
import ky from 'ky';
import removeMarkdown from 'remove-markdown';
import elasticlunr from 'elasticlunr';
import { HashRouter, Link, useLocation } from 'react-router-dom';
import MDX from '@mdx-js/runtime';
import innerText from 'react-innertext';
import { Switch, Route, useParams } from 'react-router';
import Highlighter from 'react-highlight-words';

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

    var _temp3 = _forOf(Object.keys(navbar), function (title) {
      var _navbar$title = navbar[title],
          slug = _navbar$title.slug,
          children = _navbar$title.children,
          type = _navbar$title.type,
          path = _navbar$title.path;

      var _temp = function () {
        if (type === NavbarItemType.CATEGORY) {
          return Promise.resolve(fetchDocuments(rootPath, children)).then(function (subResult) {
            documentMap = _extends({}, documentMap, {}, subResult);
          });
        } else {
          var docPath = join(rootPath, path);
          return Promise.resolve(getFile(docPath)).then(function (content) {
            documentMap[slug] = {
              title: title,
              content: content,
              path: docPath,
              slug: slug,
              headings: findHeadings(content)
            };
          });
        }
      }();

      if (_temp && _temp.then) return _temp.then(function () {});
    });

    return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {
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

var docStore =
/*#__PURE__*/
new Store({
  documentMap: {},
  documentsLoaded: false
});
var docStoreActions = {
  loadNavbar: function loadNavbar(path) {
    try {
      return Promise.resolve(fetchNavbar(path)).then(function (navbar) {
        docStore.update(function (state) {
          state.navbar = navbar;
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
  loadDocuments: function loadDocuments(rootPath, navbar) {
    try {
      return Promise.resolve(fetchDocuments(rootPath, navbar)).then(function (documentMap) {
        docStore.update(function (state) {
          state.documentMap = _extends({}, state.documentMap, {}, documentMap);
          state.documentsLoaded = true;
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
  getSaveDocumentByNavId: function getSaveDocumentByNavId(slug) {
    try {
      var document = docStore.getRawState().documentMap[slug];

      var _temp3 = function () {
        if (!document) {
          return Promise.resolve(new Promise(function (resolve) {
            var unsubscribe = docStore.subscribe(function (state) {
              return state.documentMap;
            }, function (documentMap) {
              if (!slug) {
                slug = Object.keys(documentMap)[0];
              }

              if (documentMap[slug]) {
                resolve(documentMap[slug]);
                unsubscribe();
              }
            });
          })).then(function (_temp) {
            document = _temp;
          });
        }
      }();

      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {
        return document;
      }) : document);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  getNavbar: function getNavbar() {
    try {
      var navbar = docStore.getRawState().navbar;

      var _temp6 = function () {
        if (!navbar) {
          return Promise.resolve(new Promise(function (resolve) {
            var unsubscribe = docStore.subscribe(function (state) {
              return state.navbar;
            }, function (navbar) {
              if (navbar) {
                resolve(navbar);
                unsubscribe();
              }
            });
          })).then(function (_temp4) {
            navbar = _temp4;
          });
        }
      }();

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {
        return navbar;
      }) : navbar);
    } catch (e) {
      return Promise.reject(e);
    }
  }
};

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
  docStore: docStore,
  remarkPlugins: [],
  rehypePlugins: [],
  rootPath: './',
  componentList: undefined,
  search: search
};
var docContext =
/*#__PURE__*/
createContext(docContextValue);

function useDocContext() {
  return useContext(docContext);
}

function Docs() {
  var _useDocContext$compon = useDocContext().componentList,
      SideBar = _useDocContext$compon.SideBar,
      Main = _useDocContext$compon.Main;
  return createElement("div", {
    className: "docs"
  }, createElement(HashRouter, null, createElement(SideBar, null), createElement(Main, null)));
}

function useSaveDocumentByNavId(id) {
  if (id === void 0) {
    id = '';
  }

  var documentMap = docStore.getRawState().documentMap;

  var _React$useState = useState(0),
      reRenderCount = _React$useState[0],
      setReRenderCount = _React$useState[1];

  var docRef = useRef(documentMap[id]);
  useEffect(function () {
    if (!docRef.current) {
      docStoreActions.getSaveDocumentByNavId(id).then(function (document) {
        docRef.current = document;
        setReRenderCount(reRenderCount + 1);
      });
    }
  }, []);
  return docRef.current;
}

function useDocStore(getSubState) {
  return useStoreState(docStore, getSubState);
}

var hCount = 0;
var mdxContext =
/*#__PURE__*/
createContext({});
var components = {
  Demo: function Demo() {
    return createElement("h1", null, "This is a demo component");
  }
};
['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (h) {
  components[h] = function (props) {
    var _React$useContext = useContext(mdxContext),
        currentDocument = _React$useContext.currentDocument;

    var check = props.children;

    if (check instanceof Array) {
      check = createElement('div', {
        children: props.children
      });
    }

    var text = isValidElement(check) ? innerText(check) : props.children;
    var heading = currentDocument.headings.find(function (heading) {
      return text.toString().includes(heading.text);
    });
    return createElement(h, {
      key: h + hCount++,
      id: heading && heading.slug,
      children: [createElement(Fragment, null, heading ? createElement(Link, {
        to: "" + heading.slug
      }, heading.text) : props.children)]
    });
  };
});
function DocumentRenderer(props) {
  var _useDocContext = useDocContext(),
      rehypePlugins = _useDocContext.rehypePlugins,
      remarkPlugins = _useDocContext.remarkPlugins,
      componentList = _useDocContext.componentList;

  var PreviousAndNext = componentList.PreviousAndNext;
  var Provider = mdxContext.Provider;
  var currentDocument = useSaveDocumentByNavId(props.slug);
  useEffect(function () {
    var heading = document.getElementById(props.headingSlug);

    if (heading) {
      heading.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [props.headingSlug, currentDocument]);
  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
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

  return currentDocument ? createElement(Provider, {
    value: {
      currentDocument: currentDocument
    }
  }, createElement(PreviousAndNext, {
    previous: previous,
    next: next
  }), createElement("div", null, createElement(MDX, {
    components: components,
    remarkPlugins: remarkPlugins,
    rehypePlugins: rehypePlugins
  }, currentDocument.content)), createElement(PreviousAndNext, {
    previous: previous,
    next: next
  })) : createElement("div", null, "loading document...");
}

function NavItem(props) {
  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
  var document = documentMap[props.slug];
  var topHeading = document && document.headings[0] && document.headings[0].size === 1 ? document.headings[0] : undefined;
  return createElement("li", {
    className: "nav-item link"
  }, createElement(Link, {
    to: "" + props.path + (topHeading ? "/" + topHeading.slug : "")
  }, topHeading ? topHeading.text : props.children), document && createElement("ul", {
    className: "nav"
  }, document.headings.filter(function (heading, index) {
    return heading.size < 4 && (index > 0 || heading.size > 1);
  }).map(function (heading) {
    return createElement(NavItem, {
      key: heading.raw,
      path: props.path + "/" + heading.slug
    }, heading.text);
  })));
}
function NavLevel(props) {
  var navbar = props.navbar;
  var _useDocContext$compon = useDocContext().componentList,
      NavItem = _useDocContext$compon.NavItem,
      NavLevel = _useDocContext$compon.NavLevel;
  return createElement("ul", {
    className: "nav"
  }, Object.keys(navbar).map(function (title) {
    var _navbar$title = navbar[title],
        type = _navbar$title.type,
        children = _navbar$title.children,
        slug = _navbar$title.slug;

    if (type === NavbarItemType.CATEGORY) {
      return createElement("li", {
        className: "nav-item sub-nav",
        key: slug + type
      }, createElement("div", {
        className: "nav-category"
      }, title), createElement(NavLevel, Object.assign({}, {
        navbar: children
      })));
    } else {
      return createElement(NavItem, {
        key: slug + type,
        path: '/document/' + slug,
        slug: slug
      }, title);
    }
  }));
}
function Nav() {
  var _useDocStore = useDocStore(function (state) {
    return [state.documentsLoaded, state.navbar];
  }),
      documentsLoaded = _useDocStore[0],
      navbar = _useDocStore[1];

  var NavLevel = useDocContext().componentList.NavLevel;
  return !documentsLoaded ? createElement("div", null, "loading navbar...") : createElement("nav", null, createElement(NavLevel, Object.assign({}, {
    navbar: navbar
  })));
}

function SideBar() {
  var _useDocContext$compon = useDocContext().componentList,
      Nav = _useDocContext$compon.Nav,
      Search = _useDocContext$compon.Search;
  return createElement("aside", {
    className: "sidebar"
  }, createElement("h1", null, "Dokument.js"), createElement(Search, null), createElement(Nav, null));
}

function RenderArticle() {
  var DocumentRenderer = useDocContext().componentList.DocumentRenderer;

  var _useParams = useParams(),
      slug = _useParams.slug,
      headingSlug = _useParams.headingSlug;

  return createElement(DocumentRenderer, {
    slug: slug,
    headingSlug: headingSlug
  });
}

function Main() {
  return createElement("main", null, createElement("article", null, createElement(Switch, null, createElement(Route, {
    path: "/"
  }, createElement(RenderArticle, null)), createElement(Route, {
    path: "/document/:slug?/:headingSlug?"
  }, createElement(RenderArticle, null)))));
}

function useGetTo() {
  var _useDocContext = useDocContext(),
      rootPath = _useDocContext.rootPath;

  return function (doc) {
    var topHeading = doc && doc.headings[0] && doc.headings[0].size === 1 ? doc.headings[0] : undefined;
    return join('/document', rootPath, doc.slug, topHeading ? topHeading.slug : '');
  };
}

function getSentencesWithSearchResults(text, searchWords) {
  return text.split(/[.?!\n]/).filter(function (n) {
    return new RegExp("" + searchWords.join('|'), 'i').test(n);
  });
}

function SearchResults(props) {
  var searchQuery = props.searchQuery;

  var _useDocContext = useDocContext(),
      search = _useDocContext.search;

  var documentMap = useDocStore(function (state) {
    return state.documentMap;
  });
  var result = search(searchQuery);
  var getTo = useGetTo();
  return createElement("div", {
    className: 'search-results'
  }, createElement("h1", null, "Listing ", result.length, " document", result.length !== 1 ? 's' : '', " with search results for ", searchQuery, ":"), createElement("ul", null, result.map(function (r) {
    var doc = documentMap[r.slug];
    return createElement("li", {
      key: doc.slug
    }, createElement("label", null, createElement(Link, {
      to: getTo(doc)
    }, createElement(Highlighter, {
      highlightClassName: "search-highlight",
      searchWords: [searchQuery],
      autoEscape: true,
      textToHighlight: doc.title
    }))), getSentencesWithSearchResults(removeMarkdown(doc.content), [searchQuery]).map(function (item) {
      return createElement("pre", {
        key: item
      }, createElement(Highlighter, {
        highlightClassName: "search-highlight",
        searchWords: [searchQuery],
        autoEscape: true,
        textToHighlight: item
      }));
    }));
  })));
}
function Search() {
  var _React$useState = useState(''),
      searchQuery = _React$useState[0],
      setSearchQuery = _React$useState[1];

  var location = useLocation();
  useEffect(function () {
    setSearchQuery('');
  }, [location]);
  useEffect(function () {
    var listener = function listener(event) {
      console.log(event);
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
  return createElement("div", {
    className: "search"
  }, searchQuery.length > 0 && createElement(SearchResults, {
    searchQuery: searchQuery
  }), createElement("input", {
    type: "text",
    value: searchQuery,
    placeholder: "search...",
    onChange: function onChange(e) {
      return setSearchQuery(e.currentTarget.value);
    }
  }));
}

function PreviousAndNext(props) {
  var previous = props.previous,
      next = props.next;
  var getTo = useGetTo();
  return createElement("div", {
    className: "previous-next"
  }, previous && createElement("div", {
    className: "previous"
  }, createElement("span", null, createElement(Link, {
    to: getTo(previous)
  }, previous.title))), next && createElement("div", {
    className: "next"
  }, createElement("span", null, createElement(Link, {
    to: getTo(next)
  }, next.title))));
}

var componentListValue = {
  DocumentRenderer: DocumentRenderer,
  NavItem: NavItem,
  NavLevel: NavLevel,
  Nav: Nav,
  SideBar: SideBar,
  Main: Main,
  Search: Search,
  PreviousAndNext: PreviousAndNext
};

var docs = function docs(container, optionsIn) {
  if (optionsIn === void 0) {
    optionsIn = {};
  }

  try {
    var options = _extends({
      rootPath: '/',
      remarkPlugins: [],
      rehypePlugins: []
    }, optionsIn, {
      componentList: _extends({}, componentListValue, {}, optionsIn.componentList || {})
    });

    load(options);
    var Provider = docContext.Provider;
    render(createElement(Provider, {
      value: _extends({}, docContextValue, {}, options)
    }, createElement(Docs, null)), container);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

var load = function load(options) {
  try {
    return Promise.resolve(docStoreActions.loadNavbar(options.rootPath)).then(function () {
      return Promise.resolve(docStoreActions.loadDocuments(options.rootPath, docStore.getRawState().navbar)).then(function () {
        Object.values(docStore.getRawState().documentMap).forEach(function (doc) {
          addDocumentToIndex(doc);
        });
        console.log(docStore);
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

export { docs };
//# sourceMappingURL=dokument.js.esm.js.map
