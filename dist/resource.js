import { Request } from "@stimulus/http";
var Resource = /** @class */ (function () {
    function Resource(scope) {
        this.scope = scope;
    }
    Object.defineProperty(Resource.prototype, "bootstrapRequest", {
        get: function () {
            return new Request("get", this.bootstrapUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "createRequest", {
        get: function () {
            return new Request("post", this.url, { body: this.formData });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "editRequest", {
        get: function () {
            return new Request("get", this.editUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "showRequest", {
        get: function () {
            return new Request("get", this.url);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "updateRequest", {
        get: function () {
            return new Request("put", this.url, { body: this.formData });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "destroyRequest", {
        get: function () {
            return new Request("delete", this.url);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "shouldBootstrapContents", {
        get: function () {
            return this.data.has("bootstrapUrl")
                || this.data.has("bootstrap");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "bootstrapUrl", {
        get: function () {
            return this.data.get("bootstrapUrl")
                || this.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "url", {
        get: function () {
            return this.data.get("url")
                || this.element.getAttribute("href")
                || this.element.getAttribute("action")
                || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "editUrl", {
        get: function () {
            return this.data.get("editUrl")
                || this.url + "/edit";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "formData", {
        get: function () {
            if (this.formTarget instanceof HTMLFormElement) {
                return new FormData(this.formTarget);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "formTarget", {
        get: function () {
            return this.targets.find("form") || this.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "primaryFieldTarget", {
        get: function () {
            return (this.targets.find("primaryField") || this.element);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: true,
        configurable: true
    });
    return Resource;
}());
export { Resource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRXhDO0lBR0Usa0JBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsc0JBQUksc0NBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDOUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUF1QjthQUEzQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO21CQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7bUJBQy9CLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDZixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFHO2FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzttQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO21CQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7bUJBQ25DLEVBQUUsQ0FBQTtRQUNULENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO21CQUN2QixJQUFJLENBQUMsR0FBRyxVQUFPLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4QkFBUTthQUFaO1lBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLGVBQWUsRUFBRTtnQkFDOUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDckM7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQWtCO2FBQXRCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQWdCLENBQUE7UUFDM0UsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUNILGVBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDIn0=