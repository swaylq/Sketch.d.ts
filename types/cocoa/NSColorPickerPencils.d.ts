/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPencils<T = any> extends NSColorPicker, NSColorPickingCustomProtocol {
    changeDisplayedColorName<R = void, P0 = unknown>(_changeDisplayedColorName: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    pencilView<R = NSColorPickerPencilView>(): R;
    setPencilView<R = void, P0 = NSColorPickerPencilView>(_v: P0): R;
    containerView<R = NSView>(): R;
    setContainerView<R = void, P0 = NSView>(_v: P0): R;
    colorNameTextField<R = NSTextField>(): R;
    setColorNameTextField<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPickerPencils<T = any> extends NSColorPicker, NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerPencils>(): R;
      new: <R = NSColorPickerPencils>() => R;
    }
  }
}

declare const NSColorPickerPencils: cocoa.classes.NSColorPickerPencils;
