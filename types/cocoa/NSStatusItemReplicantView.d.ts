/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusItemReplicantView<T0 = void, T1 = void, T2 = void> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    drawBlock<R = CDUnknownBlockType>(): R;
    setDrawBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSStatusItemReplicantView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSStatusItemReplicantView>(): R;
      new: <R = NSStatusItemReplicantView>() => R;
    }
  }
}

declare const NSStatusItemReplicantView: cocoa.NSStatusItemReplicantView.CLASS;
