/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelGreyPickerWell<T0 = void, T1 = void, T2 = void> extends NSColorPanelColorWell {}
  namespace NSColorPanelGreyPickerWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorPanelColorWell {
      alloc<R = NSColorPanelGreyPickerWell>(): R;
      new: <R = NSColorPanelGreyPickerWell>() => R;
    }
  }
}

declare const NSColorPanelGreyPickerWell: cocoa.NSColorPanelGreyPickerWell.CLASS;
