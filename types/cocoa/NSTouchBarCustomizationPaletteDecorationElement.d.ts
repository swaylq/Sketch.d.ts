/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteDecorationElement<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPaletteDecorationElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarCustomizationPaletteDecorationElement>(): R;
      new: <R = NSTouchBarCustomizationPaletteDecorationElement>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteDecorationElement: cocoa.NSTouchBarCustomizationPaletteDecorationElement.CLASS;
