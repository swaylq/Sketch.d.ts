/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberArrowButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    initWithArrowFacesLeft<R = unknown, P0 = boolean>(_initWithArrowFacesLeft: P0): R;
    arrowFacesLeft<R = boolean>(): R;
  }
  namespace NSScrubberArrowButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSScrubberArrowButton>(): R;
      new: <R = NSScrubberArrowButton>() => R;
    }
  }
}

declare const NSScrubberArrowButton: cocoa.NSScrubberArrowButton.CLASS;
