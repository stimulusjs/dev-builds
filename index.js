import "core-js/fn/array/find"
import "core-js/fn/array/find-index"
import "core-js/fn/array/from"
import "core-js/fn/map"
import "core-js/fn/object/assign"
import "core-js/fn/promise"
import "core-js/fn/set"
import "element-closest"
import "mutation-observer-inner-html-shim"
import "eventlistener-polyfill"

if (typeof SVGElement.prototype.contains != "function") {
  SVGElement.prototype.contains = function(node) {
    return this === node || this.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY
  }
}
