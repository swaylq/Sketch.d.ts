/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerSelector<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    shouldUseArtboardSelectionModeForRect_page_extendSelection_options<R = boolean, P0 = CGRect, P1 = unknown, P2 = boolean, P3 = number>(_shouldUseArtboardSelectionModeForRect: P0, _page: P1, _extendSelection: P2, _options: P3): R;
    updateSelectionWithRect_page_extendSelection_options<R = void, P0 = CGRect, P1 = unknown, P2 = boolean, P3 = number>(_updateSelectionWithRect: P0, _page: P1, _extendSelection: P2, _options: P3): R;
    initialSelection<R = MSLayerArray>(): R;
    setInitialSelection<R = void, P0 = MSLayerArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerSelector<T = any> extends NSObject {
      alloc<R = MSLayerSelector>(): R;
      new: <R = MSLayerSelector>() => R;
    }
  }
}

declare const MSLayerSelector: cocoa.classes.MSLayerSelector;