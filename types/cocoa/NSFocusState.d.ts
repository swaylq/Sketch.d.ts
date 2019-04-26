/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFocusState<T0 = void, T1 = void, T2 = void> extends NSPSMatrix {
    setWindow<R = void, P0 = unknown>(_setWindow: P0): R;
    reset<R = void>(): R;
    flushWithContext<R = void, P0 = unknown>(_flushWithContext: P0): R;
    flush<R = void>(): R;
    clip<R = void, P0 = CGRect>(_clip: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSFocusState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPSMatrix {
      alloc<R = NSFocusState>(): R;
      new: <R = NSFocusState>() => R;
      sharedFocusState<R = unknown>(): R;
    }
  }
}

declare const NSFocusState: cocoa.NSFocusState.CLASS;
