/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComplexOrthography<T0 = void, T1 = void, T2 = void> extends NSOrthography {
    languageMap<R = unknown>(): R;
    dominantScript<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSComplexOrthography {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOrthography {
      alloc<R = NSComplexOrthography>(): R;
      new: <R = NSComplexOrthography>() => R;
    }
  }
}

declare const NSComplexOrthography: cocoa.NSComplexOrthography.CLASS;
