/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickingDefaultProtocol<T0 = void, T1 = void, T2 = void> {
    minContentSize<R = CGSize>(): R;
    buttonToolTip<R = NSString>(): R;
    setMode<R = void, P0 = number>(_setMode: P0): R;
    detachColorList<R = void, P0 = NSColorList>(_detachColorList: P0): R;
    attachColorList<R = void, P0 = NSColorList>(_attachColorList: P0): R;
    alphaControlAddedOrRemoved<R = void, P0 = unknown>(_alphaControlAddedOrRemoved: P0): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    insertNewButtonImage_in<R = void, P0 = NSImage, P1 = NSButtonCell>(_insertNewButtonImage: P0, _in: P1): R;
    provideNewButtonImage<R = NSImage>(): R;
    initWithPickerMask_colorPanel<R = unknown, P0 = number, P1 = NSColorPanel>(_initWithPickerMask: P0, _colorPanel: P1): R;
  }
  namespace NSColorPickingDefaultProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
