export function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, function (_, char) { return char.toUpperCase(); });
}
export function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
export function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX2hlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RyaW5nX2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxtQkFBbUIsS0FBYTtJQUNwQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsVUFBQyxDQUFDLEVBQUUsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUE7QUFDOUUsQ0FBQztBQUVELE1BQU0scUJBQXFCLEtBQWE7SUFDdEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDdkQsQ0FBQztBQUVELE1BQU0sb0JBQW9CLEtBQWE7SUFDckMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxNQUFJLElBQUksQ0FBQyxXQUFXLEVBQUksRUFBeEIsQ0FBd0IsQ0FBQyxDQUFBO0FBQ3pFLENBQUMifQ==