/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilterServicesPasteboard<T0 = void, T1 = void, T2 = void> extends NSPasteboard {
    changeCount<R = number>(): R;
    types<R = unknown>(): R;
    pasteboardItems<R = unknown>(): R;
  }
  namespace NSFilterServicesPasteboard {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPasteboard {
      alloc<R = NSFilterServicesPasteboard>(): R;
      new: <R = NSFilterServicesPasteboard>() => R;
      filterPasteboardWithPasteboard<R = unknown, P0 = unknown>(_filterPasteboardWithPasteboard: P0): R;
      filterPasteboardWithData_ofType<R = unknown, P0 = unknown, P1 = unknown>(_filterPasteboardWithData: P0, _ofType: P1): R;
    }
  }
}

declare const NSFilterServicesPasteboard: cocoa.NSFilterServicesPasteboard.CLASS;
