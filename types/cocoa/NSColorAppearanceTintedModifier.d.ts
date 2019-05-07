/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorAppearanceTintedModifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithCatalogColorName<R = unknown, P0 = unknown>(_initWithCatalogColorName: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorAppearanceTintedModifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSColorAppearanceTintedModifier>(): R;
      new: <R = NSColorAppearanceTintedModifier>() => R;
      selectionModifier<R = unknown>(): R;
      textHighlightModifier<R = unknown>(): R;
      focusIndicatorModifier<R = unknown>(): R;
    }
  }
}

declare const NSColorAppearanceTintedModifier: cocoa.NSColorAppearanceTintedModifier.CLASS;
