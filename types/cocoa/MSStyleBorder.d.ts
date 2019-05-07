/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBorder<T0 = void, T1 = void, T2 = void> extends _MSStyleBorder, MSColorConvertibleProtocol {
    asFill<R = unknown>(): R;
    supportsAdvancedBorderSettings<R = boolean>(): R;
    patternFillType<R = number>(): R;
    noiseIntensity<R = number>(): R;
    CSSAttributeString<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSStyleBorder(BlendingView): 
    wantsColorModePicker<R = boolean>(): R;
  }
  namespace MSStyleBorder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleBorder, MSColorConvertibleProtocol {
      alloc<R = MSStyleBorder>(): R;
      new: <R = MSStyleBorder>() => R;
  
  }
  }
}

declare const MSStyleBorder: cocoa.MSStyleBorder.CLASS;
