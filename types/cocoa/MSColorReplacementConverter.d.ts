/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorReplacementConverter<T0 = void, T1 = void, T2 = void> extends NSObject, MSColorConverterProtocol {
    cxx_destruct<R = void>(): R;
    initWithColor_replacementColor_colorSpace_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = boolean>(_initWithColor: P0, _replacementColor: P1, _colorSpace: P2, _ignoreAlphaWhenMatching: P3, _replaceAlphaOfOriginalColor: P4): R;
    replacementColor<R = MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    immutableReplacementColor<R = MSImmutableColor>(): R;
    immutableColor<R = MSImmutableColor>(): R;
    ignoreAlphaWhenMatching<R = boolean>(): R;
    colorSpace<R = NSColorSpace>(): R;
    color<R = MSColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorReplacementConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSColorConverterProtocol {
      alloc<R = MSColorReplacementConverter>(): R;
      new: <R = MSColorReplacementConverter>() => R;
    }
  }
}

declare const MSColorReplacementConverter: cocoa.MSColorReplacementConverter.CLASS;
