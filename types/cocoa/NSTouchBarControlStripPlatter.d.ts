/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarControlStripPlatter<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
    wantsUpdateLayer<R = boolean>(): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    platterColor<R = NSColor>(): R;
    setPlatterColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarControlStripPlatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarControlStripPlatter>(): R;
      new: <R = NSTouchBarControlStripPlatter>() => R;
    }
  }
}

declare const NSTouchBarControlStripPlatter: cocoa.NSTouchBarControlStripPlatter.CLASS;
