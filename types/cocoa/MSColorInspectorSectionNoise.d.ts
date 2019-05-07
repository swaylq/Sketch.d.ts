/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionNoise<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection {
    refreshNoiseIntensityTouchBarSlider<R = void>(): R;
    adjustNoiseIntensity<R = void, P0 = unknown>(_adjustNoiseIntensity: P0): R;
    hasPresetPickers<R = boolean>(): R;
    viewsWithColorPickerView_blendingView_topViewIsEmpty<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_viewsWithColorPickerView: P0, _blendingView: P1, _topViewIsEmpty: P2): R;
  }
  namespace MSColorInspectorSectionNoise {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection {
      alloc<R = MSColorInspectorSectionNoise>(): R;
      new: <R = MSColorInspectorSectionNoise>() => R;
    }
  }
}

declare const MSColorInspectorSectionNoise: cocoa.MSColorInspectorSectionNoise.CLASS;
