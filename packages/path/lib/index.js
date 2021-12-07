'use strict'
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    var i = m.call(o),
      r,
      ar = [],
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) {
      e = { error: error }
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return ar
  }
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i)
          ar[i] = from[i]
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from))
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Path = void 0
var parser_1 = require('./parser')
var shared_1 = require('./shared')
var destructor_1 = require('./destructor')
var matcher_1 = require('./matcher')
var pathCache = new Map()
var isMatcher = Symbol('PATH_MATCHER')
var isValid = function (val) {
  return val !== undefined && val !== null
}
var isAssignable = function (val) {
  return typeof val === 'object' || typeof val === 'function'
}
var isNumberIndex = function (val) {
  return (0, shared_1.isStr)(val) ? /^\d+$/.test(val) : (0, shared_1.isNum)(val)
}
var getIn = function (segments, source) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i]
    var rules = (0, destructor_1.getDestructor)(index)
    if (!rules) {
      if (!isValid(source)) {
        if (i !== segments.length - 1) {
          return source
        }
        break
      }
      source = source[index]
    } else {
      source = (0, destructor_1.getInByDestructor)(source, rules, {
        setIn: setIn,
        getIn: getIn,
      })
      break
    }
  }
  return source
}
var setIn = function (segments, source, value) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i]
    var rules = (0, destructor_1.getDestructor)(index)
    if (!rules) {
      if (!isValid(source) || !isAssignable(source)) return
      if ((0, shared_1.isArr)(source) && !isNumberIndex(index)) {
        return
      }
      if (!isValid(source[index])) {
        if (value === undefined) {
          return
        }
        if (i < segments.length - 1) {
          source[index] = (0, shared_1.isNum)(segments[i + 1]) ? [] : {}
        }
      }
      if (i === segments.length - 1) {
        source[index] = value
      }
      source = source[index]
    } else {
      ;(0, destructor_1.setInByDestructor)(source, rules, value, {
        setIn: setIn,
        getIn: getIn,
      })
      break
    }
  }
}
var deleteIn = function (segments, source) {
  for (var i = 0; i < segments.length; i++) {
    var index = segments[i]
    var rules = (0, destructor_1.getDestructor)(index)
    if (!rules) {
      if (i === segments.length - 1 && isValid(source)) {
        delete source[index]
        return
      }
      if (!isValid(source) || !isAssignable(source)) return
      source = source[index]
      if (!(0, shared_1.isObj)(source)) {
        return
      }
    } else {
      ;(0, destructor_1.deleteInByDestructor)(source, rules, {
        setIn: setIn,
        getIn: getIn,
        deleteIn: deleteIn,
      })
      break
    }
  }
}
var hasOwnProperty = Object.prototype.hasOwnProperty
var existIn = function (segments, source, start) {
  if (start instanceof Path) {
    start = start.length
  }
  for (var i = start; i < segments.length; i++) {
    var index = segments[i]
    var rules = (0, destructor_1.getDestructor)(index)
    if (!rules) {
      if (i === segments.length - 1) {
        return hasOwnProperty.call(source, index)
      }
      if (!isValid(source) || !isAssignable(source)) return false
      source = source[index]
      if (!(0, shared_1.isObj)(source)) {
        return false
      }
    } else {
      return (0, destructor_1.existInByDestructor)(source, rules, start, {
        setIn: setIn,
        getIn: getIn,
        deleteIn: deleteIn,
        existIn: existIn,
      })
    }
  }
}
var parse = function (pattern, base) {
  if (pattern instanceof Path) {
    return {
      entire: pattern.entire,
      segments: pattern.segments.slice(),
      isRegExp: false,
      isWildMatchPattern: pattern.isWildMatchPattern,
      isMatchPattern: pattern.isMatchPattern,
      haveExcludePattern: pattern.haveExcludePattern,
      tree: pattern.tree,
    }
  } else if ((0, shared_1.isStr)(pattern)) {
    if (!pattern)
      return {
        entire: '',
        segments: [],
        isRegExp: false,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false,
      }
    var parser = new parser_1.Parser(pattern, Path.parse(base))
    var tree = parser.parse()
    if (!parser.isMatchPattern) {
      var segments = parser.data.segments
      return {
        entire: segments.join('.'),
        segments: segments,
        tree: tree,
        isRegExp: false,
        isWildMatchPattern: false,
        haveExcludePattern: false,
        isMatchPattern: false,
      }
    } else {
      return {
        entire: pattern,
        segments: [],
        isRegExp: false,
        isWildMatchPattern: parser.isWildMatchPattern,
        haveExcludePattern: parser.haveExcludePattern,
        isMatchPattern: true,
        tree: tree,
      }
    }
  } else if ((0, shared_1.isFn)(pattern) && pattern[isMatcher]) {
    return parse(pattern['path'])
  } else if ((0, shared_1.isArr)(pattern)) {
    return {
      entire: pattern.join('.'),
      segments: pattern.reduce(function (buf, key) {
        return buf.concat(parseString(key))
      }, []),
      isRegExp: false,
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: false,
    }
  } else if ((0, shared_1.isRegExp)(pattern)) {
    return {
      entire: pattern,
      segments: [],
      isRegExp: true,
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: true,
    }
  } else {
    return {
      entire: '',
      isRegExp: false,
      segments: pattern !== undefined ? [pattern] : [],
      isWildMatchPattern: false,
      haveExcludePattern: false,
      isMatchPattern: false,
    }
  }
}
var parseString = function (source) {
  if ((0, shared_1.isStr)(source)) {
    source = source.replace(/\s*/g, '')
    try {
      var _a = parse(source),
        segments = _a.segments,
        isMatchPattern = _a.isMatchPattern
      return !isMatchPattern ? segments : source
    } catch (e) {
      return source
    }
  } else if (source instanceof Path) {
    return source.segments
  }
  return source
}
var Path = /** @class */ (function () {
  function Path(input, base) {
    var _this = this
    this.concat = function () {
      var _a
      var args = []
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be concat'))
      }
      var path = new Path('')
      path.segments = (_a = _this.segments).concat.apply(
        _a,
        __spreadArray(
          [],
          __read(
            args.map(function (s) {
              return parseString(s)
            })
          ),
          false
        )
      )
      path.entire = path.segments.join('.')
      return path
    }
    this.slice = function (start, end) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be slice'))
      }
      var path = new Path('')
      path.segments = _this.segments.slice(start, end)
      path.entire = path.segments.join('.')
      return path
    }
    this.push = function () {
      var items = []
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i]
      }
      return _this.concat.apply(_this, __spreadArray([], __read(items), false))
    }
    this.pop = function () {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be pop'))
      }
      return new Path(_this.segments.slice(0, _this.segments.length - 1))
    }
    this.splice = function (start, deleteCount) {
      var items = []
      for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i]
      }
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be splice'))
      }
      items = items.reduce(function (buf, item) {
        return buf.concat(parseString(item))
      }, [])
      var segments_ = _this.segments.slice()
      segments_.splice.apply(
        segments_,
        __spreadArray([start, deleteCount], __read(items), false)
      )
      return new Path(segments_)
    }
    this.forEach = function (callback) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be each'))
      }
      _this.segments.forEach(callback)
    }
    this.map = function (callback) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be map'))
      }
      return _this.segments.map(callback)
    }
    this.reduce = function (callback, initial) {
      if (_this.isMatchPattern || _this.isRegExp) {
        throw new Error(''.concat(_this.entire, ' cannot be reduce'))
      }
      return _this.segments.reduce(callback, initial)
    }
    this.parent = function () {
      return _this.slice(0, _this.length - 1)
    }
    this.includes = function (pattern) {
      var _a = Path.parse(pattern),
        entire = _a.entire,
        segments = _a.segments,
        isMatchPattern = _a.isMatchPattern
      var cache = _this.includesCache.get(entire)
      if (cache !== undefined) return cache
      var cacheWith = function (value) {
        _this.includesCache.set(entire, value)
        return value
      }
      if (_this.isMatchPattern) {
        if (!isMatchPattern) {
          return cacheWith(_this.match(segments))
        } else {
          throw new Error(
            ''.concat(_this.entire, ' cannot be used to match ').concat(entire)
          )
        }
      }
      if (isMatchPattern) {
        throw new Error(
          ''.concat(_this.entire, ' cannot be used to match ').concat(entire)
        )
      }
      if (segments.length > _this.segments.length) return cacheWith(false)
      for (var i = 0; i < segments.length; i++) {
        if (
          !(0, shared_1.isEqual)(String(segments[i]), String(_this.segments[i]))
        ) {
          return cacheWith(false)
        }
      }
      return cacheWith(true)
    }
    this.transform = function (regexp, callback) {
      if (!(0, shared_1.isFn)(callback)) return ''
      if (_this.isMatchPattern) {
        throw new Error(''.concat(_this.entire, ' cannot be transformed'))
      }
      var args = _this.segments.reduce(function (buf, key) {
        return new RegExp(regexp).test(key) ? buf.concat(key) : buf
      }, [])
      return callback.apply(void 0, __spreadArray([], __read(args), false))
    }
    this.match = function (pattern) {
      var _a, _b
      var path = Path.parse(pattern)
      var cache = _this.matchCache.get(path.entire)
      if (cache !== undefined) {
        if (cache.record && cache.record.score !== undefined) {
          _this.matchScore = cache.record.score
        }
        return cache.matched
      }
      var cacheWith = function (value) {
        _this.matchCache.set(path.entire, value)
        return value
      }
      if (path.isMatchPattern) {
        if (_this.isMatchPattern) {
          throw new Error(
            ''.concat(path.entire, ' cannot match ').concat(_this.entire)
          )
        } else {
          _this.matchScore = 0
          return cacheWith(path.match(_this.segments))
        }
      } else {
        if (_this.isMatchPattern) {
          if (_this.isRegExp) {
            try {
              return (_b =
                (_a = _this['entire']) === null || _a === void 0
                  ? void 0
                  : _a['test']) === null || _b === void 0
                ? void 0
                : _b.call(_a, path.entire)
            } finally {
              _this.entire.lastIndex = 0
            }
          }
          var record = {
            score: 0,
          }
          var result = cacheWith(
            new matcher_1.Matcher(_this.tree, record).match(path.segments)
          )
          _this.matchScore = record.score
          return result.matched
        } else {
          var record = {
            score: 0,
          }
          var result = cacheWith(
            matcher_1.Matcher.matchSegments(
              _this.segments,
              path.segments,
              record
            )
          )
          _this.matchScore = record.score
          return result.matched
        }
      }
    }
    //别名组匹配
    this.matchAliasGroup = function (name, alias) {
      var namePath = Path.parse(name)
      var aliasPath = Path.parse(alias)
      var nameMatched = _this.match(namePath)
      var nameMatchedScore = _this.matchScore
      var aliasMatched = _this.match(aliasPath)
      var aliasMatchedScore = _this.matchScore
      if (_this.haveExcludePattern) {
        if (nameMatchedScore >= aliasMatchedScore) {
          return nameMatched
        } else {
          return aliasMatched
        }
      } else {
        return nameMatched || aliasMatched
      }
    }
    this.existIn = function (source, start) {
      if (start === void 0) {
        start = 0
      }
      return existIn(_this.segments, source, start)
    }
    this.getIn = function (source) {
      return getIn(_this.segments, source)
    }
    this.setIn = function (source, value) {
      setIn(_this.segments, source, value)
      return source
    }
    this.deleteIn = function (source) {
      deleteIn(_this.segments, source)
      return source
    }
    this.ensureIn = function (source, defaults) {
      var results = _this.getIn(source)
      if (results === undefined) {
        _this.setIn(source, defaults)
        return _this.getIn(source)
      }
      return results
    }
    var _a = parse(input, base),
      tree = _a.tree,
      segments = _a.segments,
      entire = _a.entire,
      isRegExp = _a.isRegExp,
      isMatchPattern = _a.isMatchPattern,
      isWildMatchPattern = _a.isWildMatchPattern,
      haveExcludePattern = _a.haveExcludePattern
    this.entire = entire
    this.segments = segments
    this.isMatchPattern = isMatchPattern
    this.isWildMatchPattern = isWildMatchPattern
    this.isRegExp = isRegExp
    this.haveExcludePattern = haveExcludePattern
    this.tree = tree
    this.matchCache = new Map()
    this.includesCache = new Map()
  }
  Path.prototype.toString = function () {
    var _a
    return (_a = this.entire) === null || _a === void 0 ? void 0 : _a.toString()
  }
  Path.prototype.toArr = function () {
    var _a
    return (_a = this.segments) === null || _a === void 0 ? void 0 : _a.slice()
  }
  Object.defineProperty(Path.prototype, 'length', {
    get: function () {
      return this.segments.length
    },
    enumerable: false,
    configurable: true,
  })
  Path.match = function (pattern) {
    var path = Path.parse(pattern)
    var matcher = function (target) {
      return path.match(target)
    }
    matcher[isMatcher] = true
    matcher.path = path
    return matcher
  }
  Path.isPathPattern = function (target) {
    if (
      (0, shared_1.isStr)(target) ||
      (0, shared_1.isArr)(target) ||
      (0, shared_1.isRegExp)(target) ||
      ((0, shared_1.isFn)(target) && target[isMatcher])
    ) {
      return true
    }
    return false
  }
  Path.transform = function (pattern, regexp, callback) {
    return Path.parse(pattern).transform(regexp, callback)
  }
  Path.parse = function (path, base) {
    if (path === void 0) {
      path = ''
    }
    if (path instanceof Path) {
      var found = pathCache.get(path.entire)
      if (found) {
        return found
      } else {
        pathCache.set(path.entire, path)
        return path
      }
    } else if (path && path[isMatcher]) {
      return Path.parse(path['path'])
    } else {
      var key_ = base ? Path.parse(base) : ''
      var key = ''.concat(path, ':').concat(key_)
      var found = pathCache.get(key)
      if (found) {
        return found
      } else {
        path = new Path(path, base)
        pathCache.set(key, path)
        return path
      }
    }
  }
  Path.getIn = function (source, pattern) {
    var path = Path.parse(pattern)
    return path.getIn(source)
  }
  Path.setIn = function (source, pattern, value) {
    var path = Path.parse(pattern)
    return path.setIn(source, value)
  }
  Path.deleteIn = function (source, pattern) {
    var path = Path.parse(pattern)
    return path.deleteIn(source)
  }
  Path.existIn = function (source, pattern, start) {
    var path = Path.parse(pattern)
    return path.existIn(source, start)
  }
  Path.ensureIn = function (source, pattern, defaultValue) {
    var path = Path.parse(pattern)
    return path.ensureIn(source, defaultValue)
  }
  return Path
})()
exports.Path = Path
//# sourceMappingURL=index.js.map
