/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnapshotContextSignature<T0 = void, T1 = void, T2 = void> extends NSObject {
    isApplicableForRect_context_hints<R = boolean, P0 = CGRect, P1 = unknown, P2 = unknown>(_isApplicableForRect: P0, _context: P1, _hints: P2): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDrawingRect_applicableForRect_context_hints<R = unknown, P0 = CGRect, P1 = CGRect, P2 = unknown, P3 = unknown>(_initWithDrawingRect: P0, _applicableForRect: P1, _context: P2, _hints: P3): R;
  }
  namespace NSSnapshotContextSignature {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSnapshotContextSignature>(): R;
      new: <R = NSSnapshotContextSignature>() => R;
    }
  }
}

declare const NSSnapshotContextSignature: cocoa.NSSnapshotContextSignature.CLASS;
