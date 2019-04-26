/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDoneButton<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
  }
  namespace _NSTouchBarCustomizationPreviewDoneButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = _NSTouchBarCustomizationPreviewDoneButton>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDoneButton>() => R;
    }
  }
}
