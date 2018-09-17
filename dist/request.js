var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Response } from "./response";
var Request = /** @class */ (function () {
    function Request(method, url, options) {
        if (options === void 0) { options = {}; }
        this.method = method;
        this.url = url;
        this.options = options;
    }
    Request.prototype.perform = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Response.bind;
                        return [4 /*yield*/, fetch(this.url, this.fetchOptions)];
                    case 1:
                        response = new (_a.apply(Response, [void 0, _b.sent()]))();
                        if (response.unauthenticated && response.authenticationURL) {
                            return [2 /*return*/, Promise.reject(window.location.href = response.authenticationURL)];
                        }
                        else {
                            return [2 /*return*/, response];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Request.prototype, "fetchOptions", {
        get: function () {
            return {
                method: this.method,
                headers: this.headers,
                body: this.body,
                credentials: "same-origin",
                redirect: "follow"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "headers", {
        get: function () {
            return compact({
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-Token": this.csrfToken,
                "Content-Type": this.contentType,
                "Accept": this.accept
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "csrfToken", {
        get: function () {
            var meta = Array.from(document.querySelectorAll("meta[name=csrf-token]")).slice(-1)[0];
            if (meta) {
                return meta.getAttribute("content");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "contentType", {
        get: function () {
            if (this.options.contentType) {
                return this.options.contentType;
            }
            else if (this.body == null || this.body instanceof FormData) {
                return;
            }
            else if (this.body instanceof File) {
                return this.body.type;
            }
            else {
                return "application/octet-stream";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "accept", {
        get: function () {
            switch (this.responseKind) {
                case "html":
                    return "text/html, application/xhtml+xml";
                case "json":
                    return "application/json";
                default:
                    return "*/*";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "body", {
        get: function () {
            return this.options.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "responseKind", {
        get: function () {
            return this.options.responseKind || "html";
        },
        enumerable: true,
        configurable: true
    });
    return Request;
}());
export { Request };
function compact(object) {
    var result = {};
    for (var key in object) {
        var value = object[key];
        if (value !== undefined) {
            result[key] = value;
        }
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQTtBQVdyQztJQUtFLGlCQUFZLE1BQWMsRUFBRSxHQUFXLEVBQUUsT0FBcUI7UUFBckIsd0JBQUEsRUFBQSxZQUFxQjtRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFSyx5QkFBTyxHQUFiOzs7Ozs7NkJBQ3VCLFFBQVE7d0JBQUMscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBaEUsUUFBUSxHQUFHLGNBQUksUUFBUSxXQUFDLFNBQXdDLEtBQUM7d0JBQ3ZFLElBQUksUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7NEJBQzFELHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUE7eUJBQ3pFOzZCQUFNOzRCQUNMLHNCQUFPLFFBQVEsRUFBQTt5QkFDaEI7Ozs7O0tBQ0Y7SUFFRCxzQkFBSSxpQ0FBWTthQUFoQjtZQUNFLE9BQU87Z0JBQ0wsTUFBTSxFQUFPLElBQUksQ0FBQyxNQUFNO2dCQUN4QixPQUFPLEVBQU0sSUFBSSxDQUFDLE9BQU87Z0JBQ3pCLElBQUksRUFBUyxJQUFJLENBQUMsSUFBSTtnQkFDdEIsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBSyxRQUFRO2FBQ3RCLENBQUE7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFPO2FBQVg7WUFDRSxPQUFPLE9BQU8sQ0FBQztnQkFDYixrQkFBa0IsRUFBRSxnQkFBZ0I7Z0JBQ3BDLGNBQWMsRUFBTSxJQUFJLENBQUMsU0FBUztnQkFDbEMsY0FBYyxFQUFNLElBQUksQ0FBQyxXQUFXO2dCQUNwQyxRQUFRLEVBQVksSUFBSSxDQUFDLE1BQU07YUFDaEMsQ0FBQyxDQUFBO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4QkFBUzthQUFiO1lBQ0UsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3hGLElBQUksSUFBSSxFQUFFO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUNwQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVc7YUFBZjtZQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7YUFDaEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLFFBQVEsRUFBRTtnQkFDN0QsT0FBTTthQUNQO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7YUFDdEI7aUJBQU07Z0JBQ0wsT0FBTywwQkFBMEIsQ0FBQTthQUNsQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU07YUFBVjtZQUNFLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekIsS0FBSyxNQUFNO29CQUNULE9BQU8sa0NBQWtDLENBQUE7Z0JBQzNDLEtBQUssTUFBTTtvQkFDVCxPQUFPLGtCQUFrQixDQUFBO2dCQUMzQjtvQkFDRSxPQUFPLEtBQUssQ0FBQTthQUNmO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5QkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUE7UUFDNUMsQ0FBQzs7O09BQUE7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQzs7QUFFRCxpQkFBaUIsTUFBVztJQUMxQixJQUFNLE1BQU0sR0FBUSxFQUFFLENBQUE7SUFDdEIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7UUFDeEIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBO1NBQ3BCO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMifQ==