/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelHackAlert<T0 = void, T1 = void, T2 = void> extends NSAlert {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
  }
  namespace _NSSavePanelHackAlert {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAlert {
      alloc<R = _NSSavePanelHackAlert>(): R;
      new: <R = _NSSavePanelHackAlert>() => R;
    }
  }
}
