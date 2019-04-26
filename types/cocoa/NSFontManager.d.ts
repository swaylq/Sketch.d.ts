/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuItemValidationProtocol {}
  namespace NSFontManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuItemValidationProtocol {
      alloc<R = NSFontManager>(): R;
      new: <R = NSFontManager>() => R;
      setFontManagerFactory<R = void, P0 = unknown>(_setFontManagerFactory: P0): R;
    }
  }
}

declare const NSFontManager: cocoa.NSFontManager.CLASS;
