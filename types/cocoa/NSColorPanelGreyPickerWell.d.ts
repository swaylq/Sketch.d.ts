/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelGreyPickerWell<T = any> extends cocoa.NSColorPanelColorWell {}
  namespace classes {
    export interface NSColorPanelGreyPickerWell<T = any> extends cocoa.classes.NSColorPanelColorWell {
      alloc<R = NSColorPanelGreyPickerWell>(): R;
      new: <R = NSColorPanelGreyPickerWell>() => R;
    }
  }
}

declare const NSColorPanelGreyPickerWell: cocoa.classes.NSColorPanelGreyPickerWell;
