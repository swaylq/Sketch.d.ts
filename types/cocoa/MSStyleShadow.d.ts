/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleShadow<T0 = void, T1 = void, T2 = void> extends _MSStyleShadow, MSColorConvertibleProtocol {
    CSSAttributeString<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSStyleShadow(EqualAppearance): 
    hasEqualAppearance<R = boolean, P0 = unknown>(_hasEqualAppearance: P0): R;
    // + MSStyleShadow(Previewing): 
    configureFillForPreview<R = void, P0 = unknown>(_configureFillForPreview: P0): R;
  }
  namespace MSStyleShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleShadow, MSColorConvertibleProtocol {
      alloc<R = MSStyleShadow>(): R;
      new: <R = MSStyleShadow>() => R;
  
  }
  }
}

declare const MSStyleShadow: cocoa.MSStyleShadow.CLASS;
