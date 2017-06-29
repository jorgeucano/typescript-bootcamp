export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;
descriptor.value = function(...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args));
        const result = originalMethod.apply(this, args);
        console.log("The return value is: " + result);
        return result;
    };
    return descriptor;
}