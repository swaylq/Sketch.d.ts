/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsPlaceholderView<T0 = void, T1 = void, T2 = void> extends NSView {
    setElementsHidden<R = void, P0 = boolean>(_setElementsHidden: P0): R;
    _hasButtonOrProgress<R = boolean>(): R;
    makeMessageTextField<R = unknown, P0 = boolean>(_makeMessageTextField: P0): R;
    _layout<R = void>(): R;
    progressIndicatorAnimating<R = boolean>(): R;
    setProgressIndicatorAnimating<R = void, P0 = boolean>(_v: P0): R;
    progressIndicatorVisible<R = boolean>(): R;
    setProgressIndicatorVisible<R = void, P0 = boolean>(_v: P0): R;
    message2<R = NSString>(): R;
    setMessage2<R = void, P0 = NSString>(_v: P0): R;
    message1<R = NSString>(): R;
    setMessage1<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSDocumentRevisionsPlaceholderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDocumentRevisionsPlaceholderView>(): R;
      new: <R = NSDocumentRevisionsPlaceholderView>() => R;
    }
  }
}

declare const NSDocumentRevisionsPlaceholderView: cocoa.NSDocumentRevisionsPlaceholderView.CLASS;
