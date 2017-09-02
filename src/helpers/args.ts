/**
 * Given an array-like, returns a real array.
 * @param  {Array-like} args
 * @return {Arrau}
 */
export default function args(args: any[]): any[] {
    return Array.prototype.slice.call(args);
}