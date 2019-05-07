/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillAndBorderColorScreenPicker<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSFillAndBorderColorScreenPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFillAndBorderColorScreenPicker>(): R;
      new: <R = MSFillAndBorderColorScreenPicker>() => R;
      setPreferredStylePartName<R = void, P0 = unknown>(_setPreferredStylePartName: P0): R;
      applyColor_toLayers<R = void, P0 = unknown, P1 = unknown>(_applyColor: P0, _toLayers: P1): R;
      pickColorForLayers_colorSpace_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_pickColorForLayers: P0, _colorSpace: P1, _completionBlock: P2): R;
    }
  }
}

declare const MSFillAndBorderColorScreenPicker: cocoa.MSFillAndBorderColorScreenPicker.CLASS;
