var _Response = /** @class */ (function () {
    function _Response(response) {
        this.response = response;
    }
    Object.defineProperty(_Response.prototype, "statusCode", {
        get: function () {
            return this.response.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "ok", {
        get: function () {
            return this.response.ok;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "unauthenticated", {
        get: function () {
            return this.statusCode == 401;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "authenticationURL", {
        get: function () {
            return this.response.headers.get("WWW-Authenticate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "contentType", {
        get: function () {
            var contentType = this.response.headers.get("Content-Type") || "";
            return contentType.replace(/;.*$/, "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "html", {
        get: function () {
            if (this.contentType.match(/^(application|text)\/(html|xhtml\+xml)$/)) {
                return this.response.text();
            }
            else {
                return Promise.reject("Expected an HTML response but got \"" + this.contentType + "\" instead");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_Response.prototype, "json", {
        get: function () {
            if (this.contentType.match(/^application\/json/)) {
                return this.response.json();
            }
            else {
                return Promise.reject("Expected a JSON response but got \"" + this.contentType + "\" instead");
            }
        },
        enumerable: true,
        configurable: true
    });
    return _Response;
}());
export { _Response as Response };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFHRSxtQkFBWSxRQUFrQjtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsc0JBQUksaUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5QkFBRTthQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFlO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQTtRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFpQjthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBVzthQUFmO1lBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNuRSxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsRUFBRTtnQkFDckUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO2FBQzVCO2lCQUFNO2dCQUNMLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyx5Q0FBc0MsSUFBSSxDQUFDLFdBQVcsZUFBVyxDQUFDLENBQUE7YUFDekY7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFJO2FBQVI7WUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7Z0JBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsd0NBQXFDLElBQUksQ0FBQyxXQUFXLGVBQVcsQ0FBQyxDQUFBO2FBQ3hGO1FBQ0gsQ0FBQzs7O09BQUE7SUFDSCxnQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUFFRCxPQUFPLEVBQUUsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFBIn0=