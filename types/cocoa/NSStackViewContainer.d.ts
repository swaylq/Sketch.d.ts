/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackViewContainer<T0 = void, T1 = void, T2 = void> extends NSView {
    stackView<R = NSStackView>(): R;
    setStackView<R = void, P0 = NSStackView>(_v: P0): R;
  }
  namespace NSStackViewContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSStackViewContainer>(): R;
      new: <R = NSStackViewContainer>() => R;
    }
  }
}

declare const NSStackViewContainer: cocoa.NSStackViewContainer.CLASS;
