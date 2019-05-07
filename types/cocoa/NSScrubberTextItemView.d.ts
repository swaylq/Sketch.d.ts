/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberTextItemView<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
    isFlipped<R = boolean>(): R;
    textField<R = NSTextField>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSScrubberTextItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
      alloc<R = NSScrubberTextItemView>(): R;
      new: <R = NSScrubberTextItemView>() => R;
      keyPathsForValuesAffectingTitle<R = unknown>(): R;
    }
  }
}

declare const NSScrubberTextItemView: cocoa.NSScrubberTextItemView.CLASS;
