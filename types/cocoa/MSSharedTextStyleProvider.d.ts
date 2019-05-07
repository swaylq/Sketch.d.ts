/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextStyleProvider<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace MSSharedTextStyleProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
      alloc<R = MSSharedTextStyleProvider>(): R;
      new: <R = MSSharedTextStyleProvider>() => R;
    }
  }
}

declare const MSSharedTextStyleProvider: cocoa.MSSharedTextStyleProvider.CLASS;
