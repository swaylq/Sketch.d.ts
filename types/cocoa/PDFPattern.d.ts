/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFPattern<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    setupFromDictionary<R = void, P0 = unknown>(_setupFromDictionary: P0): R;
    setupFromStream<R = void, P0 = unknown>(_setupFromStream: P0): R;
    initWithResource<R = unknown, P0 = unknown>(_initWithResource: P0): R;
    coords<R = NSArray>(): R;
    setCoords<R = void, P0 = NSArray>(_v: P0): R;
    space<R = unknown>(): R;
    setSpace<R = void, P0 = unknown>(_v: P0): R;
    function<R = PDFFunction>(): R;
    setFunction<R = void, P0 = PDFFunction>(_v: P0): R;
    shadingType<R = number>(): R;
    setShadingType<R = void, P0 = number>(_v: P0): R;
  }
  namespace PDFPattern {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = PDFPattern>(): R;
      new: <R = PDFPattern>() => R;
      patternWithResource<R = unknown, P0 = unknown>(_patternWithResource: P0): R;
    }
  }
}

declare const PDFPattern: cocoa.PDFPattern.CLASS;
