/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsNonLocalVersionPlaceholderView<T0 = void, T1 = void, T2 = void> extends NSDocumentRevisionsPlaceholderView {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _updateForProgress<R = void>(): R;
    setClickAction_target<R = void, P0 = string, P1 = unknown>(_setClickAction: P0, _target: P1): R;
    downloadProgress<R = NSProgress>(): R;
    setDownloadProgress<R = void, P0 = NSProgress>(_v: P0): R;
    hasButton<R = boolean>(): R;
    setHasButton<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSDocumentRevisionsNonLocalVersionPlaceholderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDocumentRevisionsPlaceholderView {
      alloc<R = NSDocumentRevisionsNonLocalVersionPlaceholderView>(): R;
      new: <R = NSDocumentRevisionsNonLocalVersionPlaceholderView>() => R;
    }
  }
}

declare const NSDocumentRevisionsNonLocalVersionPlaceholderView: cocoa.NSDocumentRevisionsNonLocalVersionPlaceholderView.CLASS;
