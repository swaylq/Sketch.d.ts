/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableCharacterSet<T = any> extends NSCharacterSet, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
    invert<R = void>(): R;
    formIntersectionWithCharacterSet<R = void, P0 = unknown>(_formIntersectionWithCharacterSet: P0): R;
    formUnionWithCharacterSet<R = void, P0 = unknown>(_formUnionWithCharacterSet: P0): R;
    removeCharactersInString<R = void, P0 = unknown>(_removeCharactersInString: P0): R;
    addCharactersInString<R = void, P0 = unknown>(_addCharactersInString: P0): R;
    removeCharactersInRange<R = void, P0 = _NSRange>(_removeCharactersInRange: P0): R;
    addCharactersInRange<R = void, P0 = _NSRange>(_addCharactersInRange: P0): R;
  }
  namespace classes {
    export interface NSMutableCharacterSet<T = any> extends NSCharacterSet, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSMutableCharacterSet>(): R;
      new: <R = NSMutableCharacterSet>() => R;
    }
  }
}

declare const NSMutableCharacterSet: cocoa.classes.NSMutableCharacterSet;