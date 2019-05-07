/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationCursorManager<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTouchBarCustomizationCursorManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarCustomizationCursorManager>(): R;
      new: <R = NSTouchBarCustomizationCursorManager>() => R;
      _showCursor<R = void>(): R;
    }
  }
}

declare const NSTouchBarCustomizationCursorManager: cocoa.NSTouchBarCustomizationCursorManager.CLASS;
