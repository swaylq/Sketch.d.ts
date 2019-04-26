/// <reference types="@types/node/util.d.ts" />
/// <reference path="./cocoa.d.ts" />

declare module "util" {
  /**
   * @param object
   * @returns Whether the argument is a native objc object
   */
  export function isNativeObject(object: any): boolean;

  /**
   * @param object Objective-C native object, like NSString, NSObject, MSLayer etc.
   * @returns The class name of a native object or `undefined` if the object is not a native one
   */
  export function getNativeClass(object: any): string | undefined;

  /**
   * Cast assimilated arrays (NSArray) to a proper JS array
   * @param nsArray
   */
  export function toArray<T>(nsArray: cocoa.NSArray<T>): T[];

  /**
   * Cast assimilated objects (NSDictionary) to a proper JS object
   * @param dict
   */
  export function toObject<T extends object>(dict: cocoa.NSDictionary): T;

  /**
   * cast any object or primitive into its proper JS counterpart.
   * Note that `NSDictionary` and `NSArray` elements are **not** recursively
   * converted unless an options object is passed as the
   * second argument and `options.recurse` is set to `true`
   * @param native
   */
  export function toJSObject<T>(native: any): T;
}
