/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillAndBorderColorScreenPicker<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSFillAndBorderColorScreenPicker<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSFillAndBorderColorScreenPicker>(): R;
      new: <R = MSFillAndBorderColorScreenPicker>() => R;
      setPreferredStylePartName<R = void, P0 = unknown>(_setPreferredStylePartName: P0): R;
      applyColor_toLayers<R = void, P0 = unknown, P1 = unknown>(_applyColor: P0, _toLayers: P1): R;
      pickColorForLayers_colorSpace_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_pickColorForLayers: P0, _colorSpace: P1, _completionBlock: P2): R;
    }
  }
}

declare const MSFillAndBorderColorScreenPicker: cocoa.classes.MSFillAndBorderColorScreenPicker;
