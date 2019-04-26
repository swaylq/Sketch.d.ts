/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageCounter<T0 = void, T1 = void, T2 = void> extends MSObjectCounter {
    sizeString<R = NSString>(): R;
    setSizeString<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    imageData<R = MSImageData>(): R;
  }
  namespace MSImageCounter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSObjectCounter {
      alloc<R = MSImageCounter>(): R;
      new: <R = MSImageCounter>() => R;
    }
  }
}

declare const MSImageCounter: cocoa.MSImageCounter.CLASS;
