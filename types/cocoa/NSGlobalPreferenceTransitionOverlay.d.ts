/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlobalPreferenceTransitionOverlay<T0 = void, T1 = void, T2 = void> extends NSWindow {
    endPresentation<R = void>(): R;
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    _setWindowTag<R = void>(): R;
    _shouldAutoFlattenLayerTree<R = boolean>(): R;
    initOnScreen<R = unknown, P0 = unknown>(_initOnScreen: P0): R;
  }
  namespace NSGlobalPreferenceTransitionOverlay {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSGlobalPreferenceTransitionOverlay>(): R;
      new: <R = NSGlobalPreferenceTransitionOverlay>() => R;
    }
  }
}

declare const NSGlobalPreferenceTransitionOverlay: cocoa.NSGlobalPreferenceTransitionOverlay.CLASS;
