/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAttributedStringAttribute<T0 = void, T1 = void, T2 = void> extends NSObject, BCJSONEncodingProtocol {
    cxx_destruct<R = void>(): R;
    attributeDictionary<R = NSDictionary>(): R;
    setAttributeDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    range<R = _NSRange>(): R;
    setRange<R = void, P0 = _NSRange>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAttributedStringAttribute {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCJSONEncodingProtocol {
      alloc<R = MSAttributedStringAttribute>(): R;
      new: <R = MSAttributedStringAttribute>() => R;
    }
  }
}

declare const MSAttributedStringAttribute: cocoa.MSAttributedStringAttribute.CLASS;
