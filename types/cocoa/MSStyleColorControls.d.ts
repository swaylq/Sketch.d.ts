/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleColorControls<T0 = void, T1 = void, T2 = void> extends _MSStyleColorControls {
    resetToDefaultValues<R = void>(): R;
    hasDefaultColorControlsValues<R = boolean>(): R;
    userVisibleContrast<R = number>(): R;
    setUserVisibleContrast<R = void, P0 = number>(_v: P0): R;
    // + MSStyleColorControls(Inspector):
    userVisibleContrast<R = number>(): R;
    setUserVisibleContrast<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSStyleColorControls {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleColorControls {
      alloc<R = MSStyleColorControls>(): R;
      new: <R = MSStyleColorControls>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      keyPathsForValuesAffectingUserVisibleContrast<R = unknown>(): R;
      // + MSStyleColorControls(Inspector): 
      keyPathsForValuesAffectingUserVisibleContrast<R = unknown>(): R;
    }
  }
}

declare const MSStyleColorControls: cocoa.MSStyleColorControls.CLASS;
