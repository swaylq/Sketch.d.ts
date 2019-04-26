/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleOrthography<T0 = void, T1 = void, T2 = void> extends NSOrthography {
    languageMap<R = unknown>(): R;
    dominantScript<R = unknown>(): R;
    initWithFlags<R = unknown, P0 = number>(_initWithFlags: P0): R;
  }
  namespace NSSimpleOrthography {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOrthography {
      alloc<R = NSSimpleOrthography>(): R;
      new: <R = NSSimpleOrthography>() => R;
      orthographyWithFlags<R = unknown, P0 = number>(_orthographyWithFlags: P0): R;
    }
  }
}

declare const NSSimpleOrthography: cocoa.NSSimpleOrthography.CLASS;
