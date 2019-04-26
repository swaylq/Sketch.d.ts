/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatchView<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
    needsPanelToBecomeKey<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPanelFavoriteSwatchView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSColorPanelFavoriteSwatchView>(): R;
      new: <R = NSColorPanelFavoriteSwatchView>() => R;
    }
  }
}

declare const NSColorPanelFavoriteSwatchView: cocoa.NSColorPanelFavoriteSwatchView.CLASS;
