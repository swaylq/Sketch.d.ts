/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingLanguageTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    canDragRowsWithIndexes_atPoint<R = boolean, P0 = unknown, P1 = CGPoint>(_canDragRowsWithIndexes: P0, _atPoint: P1): R;
  }
  namespace NSSpellingLanguageTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = NSSpellingLanguageTableView>(): R;
      new: <R = NSSpellingLanguageTableView>() => R;
    }
  }
}

declare const NSSpellingLanguageTableView: cocoa.NSSpellingLanguageTableView.CLASS;
