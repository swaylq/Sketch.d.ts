/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderMinimizationDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorPickerSliderCompletedInteraction<R = void, P0 = NSTouchBarColorPickerSlider>(_colorPickerSliderCompletedInteraction: P0): R;
    colorPickerSliderWantsToBeUnminimized_completionHandler<R = boolean, P0 = NSTouchBarColorPickerSlider, P1 = CDUnknownBlockType>(_colorPickerSliderWantsToBeUnminimized: P0, _completionHandler: P1): R;
  }
  namespace NSTouchBarColorPickerSliderMinimizationDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
