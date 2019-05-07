/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionWithPicker<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSCollapsibleHeaderInspectorItemTargetProtocol {
    pickerHeaderItem<R = MSCollapsibleHeaderInspectorItem>(): R;
    setPickerHeaderItem<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace MSColorInspectorSectionWithPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSection, MSCollapsibleHeaderInspectorItemTargetProtocol {
      alloc<R = MSColorInspectorSectionWithPicker>(): R;
      new: <R = MSColorInspectorSectionWithPicker>() => R;
    }
  }
}

declare const MSColorInspectorSectionWithPicker: cocoa.MSColorInspectorSectionWithPicker.CLASS;
