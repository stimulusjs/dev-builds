var Guide = /** @class */ (function () {
    function Guide(logger) {
        this.warnedKeysByObject = new WeakMap;
        this.logger = logger;
    }
    Guide.prototype.warn = function (object, key, message) {
        var warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set;
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    };
    return Guide;
}());
export { Guide };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3VpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFJRSxlQUFZLE1BQWM7UUFGakIsdUJBQWtCLEdBQThCLElBQUksT0FBTyxDQUFBO1FBR2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxvQkFBSSxHQUFKLFVBQUssTUFBVyxFQUFFLEdBQVcsRUFBRSxPQUFlO1FBQzVDLElBQUksVUFBVSxHQUE0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTdFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUE7U0FDaEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUNsQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQyJ9